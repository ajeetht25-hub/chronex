import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import Footer from "./_components/layout/Footer";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeForge - Home",
  description: "TimeForge watch site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black ${syne.className}`}>
        {/* <Image src='/logo/logo.png' alt="Vasuki Logo" className="mt-10"  width={100} height={300}/> */}
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
