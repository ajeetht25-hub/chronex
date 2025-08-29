import React from "react";
import Image from "next/image";
import { cn } from "@repo/ui/lib/utils";

const Navbar = ({isFixed}: {isFixed?: boolean}) => {
  return (
    <div className={cn("h-20 xl:container xl:mx-auto mb-5", isFixed ? "absolute top-0 left-0 z-50 bg-transparent lg:px-10": "")} >
      <div className="flex justify-between items-center px-3">
        <div className="relative w-20 h-20">
          <Image src="/logo/logo.png" alt="logo" className="object-contain" fill />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
