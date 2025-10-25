import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NFTBlaize | Portfolio",
  description: "Frontend Developer & Web3 Enthusiast Portfolio",
  icons: {
    icon: "https://i.imgur.com/KrgZVPF.png", // <-- Replace with your direct Imgur image URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>NFTBlaize | Portfolio</title>
        <link
          rel="icon"
          href="https://i.imgur.com/KrgZVPF.png" // <-- Replace with your direct Imgur image URL
        />
      </head>
      <body
        className="text-white font-sans"
        style={{
          backgroundImage: "url('/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        {/* Navbar on all pages */}
        <Navbar />

        {/* Page content */}
        <main className="pt-20">{children}</main>

        {/* Footer on all pages */}
        <Footer />
      </body>
    </html>
  );
}
