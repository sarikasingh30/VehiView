import type { Metadata } from "next";

import "./globals.css";
import { Footer, Navbar } from "../components";

export const metadata: Metadata = {
  title: "Vehi-View",
  description:
    "Ride the best car ever, where cool features and style come together for an amazing driving experience!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
