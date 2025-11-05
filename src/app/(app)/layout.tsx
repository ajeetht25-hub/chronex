import "./globals.css";
import type { Metadata } from "next";
import "./globals.css"
import { Syne } from "next/font/google";
import Footer from "./_components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chronex - Home",
  description: "Chronex watch site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black ${syne.className}`}>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
