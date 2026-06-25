import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOFI — Stories of First-Gen Indians",
  description: "A global movement documenting and celebrating the stories of first-generation Indians around the world. Unite • Share • Inspire.",
  keywords: ["first gen Indian", "diaspora", "Indian stories", "immigration", "SOFI"],
  openGraph: {
    title: "SOFI — Stories of First-Gen Indians",
    description: "Unite • Share • Inspire. A global movement for first-generation Indians.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
