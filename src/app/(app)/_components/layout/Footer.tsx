import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="xl:mx-auto relative mt-12 bg-gradient-to-b from-white to-[#4DC6E2] ">
      <div className="absolute top-0 w-full left-0 scale-x-[-1] overflow-hidden rotate-180 transform transition-transform">
        <svg
          className="relative block"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
      <div className="xl:mx-auto xl:container">
        <div className="pt-44 pb-8 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-start items-start">
            <div className="space-y-6 flex justify-start items-start flex-col">
              <div className="flex items-center space-x-2">
                <div className="w-16 h-16 relative -ml-2">
                  <Image
                    fill
                    src="/logo/logo.png"
                    alt="logo"
                    className="object-contain"
                  />
                </div>
                <span className="text-3xl font-semibold">Vasuki</span>
              </div>
              <Button className="bg-black h-auto text-white text-[1rem] px-12 py-3 rounded">
                Contact Us
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <nav className="space-y-4">
                <Link
                  href="/about"
                  className="block text-black hover:text-gray-700"
                >
                  About
                </Link>
                <Link
                  href="/features"
                  className="block text-black hover:text-gray-700"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="block text-black hover:text-gray-700"
                >
                  Pricing
                </Link>
                <Link
                  href="/gallery"
                  className="block text-black hover:text-gray-700"
                >
                  Gallery
                </Link>
                <Link
                  href="/team"
                  className="block text-black hover:text-gray-700"
                >
                  Team
                </Link>
              </nav>
            </div>
          </div>

          <div className="mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white">
              <div className="text-sm ">© 2025 All Rights Reserved</div>
              <div className="flex space-x-6 text-sm ">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Use</Link>
                <Link href="/refunds">Sales and Refunds</Link>
                <Link href="/legal">Legal</Link>
                <Link href="/sitemap">Site Map</Link>
              </div>
              <div className="text-sm ">+1 860 854-36-89</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
