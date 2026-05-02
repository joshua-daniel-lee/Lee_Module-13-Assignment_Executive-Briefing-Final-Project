import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ready. - Pitch Deck",
  description: "ready. pitch deck with ReadyMove branding",
  icons: {
    icon: '/icon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
