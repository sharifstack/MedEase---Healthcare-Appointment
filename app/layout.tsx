import type { Metadata } from "next";
import "./globals.css";

import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "./components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Medease - Your Trusted Medical Appointment Booking Platform",
  description:
    "Medease is a user-friendly medical appointment booking platform that connects patients with healthcare providers. With a wide range of specialists and convenient scheduling options, Medease makes it easy to find and book appointments for all your healthcare needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
