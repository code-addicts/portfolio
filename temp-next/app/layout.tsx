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
    default: "Suthar Pawankumar | Portfolio",
    template: "%s | Suthar Pawankumar",
  },
  description:
    "Full-Stack Developer building performant, maintainable systems and delightful interfaces. Projects in MERN, Tailwind, and automation.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Suthar Pawankumar | Portfolio",
    description:
      "Full-Stack Developer building performant, maintainable systems and delightful interfaces.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suthar Pawankumar | Portfolio",
    description:
      "Full-Stack Developer building performant, maintainable systems and delightful interfaces.",
  },
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
