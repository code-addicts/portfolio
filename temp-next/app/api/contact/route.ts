import { NextResponse } from 'next/server';

export async function POST(request: Request) {

  try {
    const body = await request.json();
    const { name, email, message } = body || {};

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
    }

    // Prefer SendGrid if API key is present
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const SENDGRID_FROM = process.env.SENDGRID_FROM || process.env.SMTP_USER;
    const TO_EMAIL = process.env.TO_EMAIL || process.env.SMTP_USER || process.env.SENDGRID_FROM;

    if (SENDGRID_API_KEY && SENDGRID_FROM && TO_EMAIL) {
      try {
        const payload = {
          personalizations: [{ to: [{ email: TO_EMAIL }], subject: `Portfolio contact from ${name}` }],
          content: [{ type: 'text/plain', value: `${message}\n\nFrom: ${name} <${email}>` }],
          from: { email: SENDGRID_FROM, name: name || 'Website Visitor' },
        };

        await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        return NextResponse.json({ ok: true });
      } catch (err) {
        console.error('SendGrid error', err);
        // fallthrough to other methods
      }
    }

    // If SMTP env vars are present, try to send via Nodemailer as a fallback
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && TO_EMAIL) {
      try {
         
        const { default: nodemailer } = await import('nodemailer');
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT),
          secure: Number(SMTP_PORT) === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });


        await transporter.sendMail({
          from: `${name} <${email}>`,
          to: TO_EMAIL,
          subject: `Portfolio contact from ${name}`,
          text: message,
          html: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p>`,
        });
        return NextResponse.json({ ok: true });
      } catch (err) {
        console.error('Nodemailer error', err);
        // fallthrough to logged response
      }
    }

    // Fallback: log submission on server and return success
    console.log('Contact form submission (logged):', { name, email, message });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
