"use client";

import {Button, buttonVariants} from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import {Menu, X} from "lucide-react";
import Link from "next/link";
import React, {useState} from 'react';

const MobileNavbar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex lg:hidden items-center justify-end relative z-10">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {!isOpen && (
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <Menu className="w-5 h-5"/>
            </Button>
          </SheetTrigger>
        )}
        <SheetContent className="w-screen p-4">
          <Link href="/#home">
            <img src="/logo.svg" alt="logo" width={1920} height={682} className="w-[120px] h-[40px] md:w-[142px] md:h-[50px]"/>
          </Link>
          <SheetClose asChild className="absolute top-5 right-4 bg-background z-20 flex items-center justify-center">
            <Button size="icon" variant="ghost" className="text-neutral-600">
              <X className="w-5 h-5"/>
            </Button>
          </SheetClose>
          <div className="flex flex-col items-start w-full py-2 mt-2">
            <Link 
              href="#contact" 
              onClick={handleClose}
              className={buttonVariants({variant: "blue", className: "w-full"})}
            >
              Hemen İzlemeye Başla
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
};

export default MobileNavbar
