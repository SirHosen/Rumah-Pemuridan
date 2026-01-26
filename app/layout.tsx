import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rumah Pemuridan",
  description: "A place for spiritual growth and discipleship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
