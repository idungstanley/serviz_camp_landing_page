import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ServizCAMP",
  description: "Connecting You with Local Experts, Fast & Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative z-40 flex flex-col min-h-screen justify-between bg-white">
          {/* Navbar */}
          <Navbar />
          <div className="w-full h-[700px] absolute top-0 left-0 z-40 inset-0"
            style={{
              backgroundImage: "url('/images/overlay.png')",
              backgroundPosition: "right",
              backgroundSize: "55% 100%",
              backgroundRepeat: "no-repeat",
            }}>
          </div>

          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
