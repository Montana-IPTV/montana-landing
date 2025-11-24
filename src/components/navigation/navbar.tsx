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
      "sticky top-0 inset-x-0 h-16 md:h-24 w-full border-b border-transparent z-[49] select-none",
      scroll && "border-background/80 bg-background/40 backdrop-blur-md"
    )}>
      <MaxWidthWrapper className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/#home">
              <img src="/logo.svg" alt="logo" width={1920} height={682} className="w-[120px] h-[40px] md:w-[142px] md:h-[50px]"/>
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <Link href="#contact" className={buttonVariants({variant: "blue"})}>
              Hemen İzlemeye Başla
            </Link>
          </div>

          <MobileNavbar/>

        </MaxWidthWrapper>
    </header>
  )
};

export default Navbar
