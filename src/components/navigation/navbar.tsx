"use client";

import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/utils";
import Link from "next/link";
import React, {useEffect, useState} from 'react';
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 inset-x-0 h-16 w-full border-b border-transparent z-[49] select-none",
      scroll && "border-background/80 bg-background/40 backdrop-blur-md"
    )}>
      <MaxWidthWrapper className="flex items-center justify-end">
          <div className="flex items-center gap-4">
            <Link
              href={process.env.NEXT_PUBLIC_SERVICES_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Bize Ulaşın
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_APP_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({variant: "blue"})}
            >
              Giriş Yap
            </Link>
          </div>
        </MaxWidthWrapper>
    </header>
  )
};

export default Navbar
