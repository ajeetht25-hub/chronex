import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ isFixed }: { isFixed?: boolean }) => {
  return (
    <div
      className={cn(
        "h-20 xl:container xl:mx-auto mb-5",
        isFixed ? "absolute top-0 left-0 z-50 bg-transparent lg:px-10" : ""
      )}
    >
      <div className="flex justify-between items-center px-3">
        <div className="relative w-20 h-20">
          <Image
            src="/logo/logo.png"
            alt="logo"
            className="object-contain"
            fill
          />
        </div>
        <div className="flex">
          <nav className="flex items-center gap-4">
            <Link
              href="/"
              className="block text-white hover:text-gray-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-gray-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-gray-200"
            >
              Contact
            </Link>
            <Link
              href="/storelocator"
              className="block text-white hover:text-gray-200"
            >
              Store Locator
            </Link>
            <Link
              href="/products"
              className="block text-white hover:text-gray-200"
            >
              Products
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
