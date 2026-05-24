import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pawan Suthar | Full-Stack Developer",
    template: "%s | Pawan Suthar",
  },
  description:
    "Full-Stack Developer specializing in MERN, automation, and intelligent web solutions. Portfolio, projects, and contact.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://PawanSuthar.dev"
  ),
  alternates: {
    canonical: "https://PawanSuthar.dev/",
  },
  openGraph: {
    title: "Pawan Suthar | Full-Stack Developer",
    description:
      "Portfolio of Pawan Suthar, MERN stack developer and automation specialist. Projects, resume, and contact.",
    type: "website",
    url: "https://PawanSuthar.dev/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pawan Suthar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawan Suthar | Full-Stack Developer",
    description:
      "Portfolio of Pawan Suthar, MERN stack developer and automation specialist.",
    images: ["/og-image.png"],
    site: "@pawansuthar310",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="w-full">
          <Navbar />
        </div>
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
