"use client";

import {buttonVariants} from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {cn, NAV_LINKS} from "@/utils";
import {useClerk} from "@clerk/nextjs";
import {LucideIcon, ZapIcon} from "lucide-react";
import Link from "next/link";
import React, {useEffect, useState} from 'react';
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../global/animation-container";
import Image from "next/image";

const Navbar = () => {

  const {user} = useClerk();

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
              <Image src="/logo.svg" alt="logo" width={1920} height={682} className="w-[120px] h-[40px] md:w-[142px] md:h-[50px]"/>
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.title}>
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

          </div>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-x-4">
              <Link href="#contact" className={buttonVariants({variant: "blue"})}>
                İletişim
              </Link>
            </div>
          </div>

          <MobileNavbar/>

        </MaxWidthWrapper>
    </header>
  )
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({className, title, href, icon: Icon, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-neutral-300">
            <Icon className="h-4 w-4"/>
            <h6 className="text-sm font-medium !leading-none">
              {title}
            </h6>
          </div>
          <p title={children! as string} className="line-clamp-1 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar
