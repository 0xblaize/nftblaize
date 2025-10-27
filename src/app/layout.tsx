import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NFTBlaize | Portfolio",
  description: "Frontend Developer & Web3 Enthusiast Portfolio",
  icons: {
    icon: "/favicon.ico", // ✅ Local path, not Imgur
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
        <link rel="icon" href="/favicon.png" /> {/* ✅ Local favicon */}
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
        <Navbar />
        <main className="pt-20">{children}</main>
      
      </body>
    </html>
  );
}
