import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diesel Performance Truck Repair",
  description: "Expert diagnostics and heavy-duty repair",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body>{children}</body>
    </html>
  );
}
