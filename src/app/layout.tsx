import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/_components/Navbar";

export const metadata: Metadata = {
  title: "contact Manager",
  description: "This App, allows us to handle our Contact effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <Navbar/>
          <main className="container mx-auto px-4">
             
          {children}
          </main>
          </div>
      </body>
    </html>
  );
}
