'use client';

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <p className="text-zinc-500 mb-4">Download my resume or view key highlights below.</p>
      <button 
        onClick={handleDownload}
        className="inline-block px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors"
      >
        Download Resume (PDF)
      </button>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Highlights</h2>
        <ul className="list-disc ml-6 text-zinc-500">
          <li>Full-Stack development: React, Node.js, Express, MongoDB</li>
          <li>Performance-focused architecture and automation</li>
          <li>Experience with OCR (Tesseract.js) and email integrations</li>
          <li>Strong design sense with Tailwind CSS and Framer Motion</li>
        </ul>
      </section>
    </div>
  );
}