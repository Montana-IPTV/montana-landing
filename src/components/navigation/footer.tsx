import Link from 'next/link';
import {AnimationContainer, Icons} from "@/components"
import {TextHoverEffect} from "@/components/ui/text-hover-effect"
import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex flex-col relative items-center justify-center border-t border-border pt-8 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-12 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

      <div
        className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

      <div className="h-[18rem] lg:h-[18rem] hidden md:flex items-center justify-center w-full">
        <TextHoverEffect text="MONTANA" />
      </div>
    </footer>
  )
}

export default Footer
