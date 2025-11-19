import React from 'react';
import {Footer, Navbar} from "@/components";
import Image from "next/image";

interface Props {
  children: React.ReactNode
}

const MarketingLayout = ({children}: Props) => {
  return (
    <>
      <div id="home"
           className="absolute inset-0 h-full [mask-image:radial-gradient(ellipse_90%_80%_at_50%_0%,#000_80%,transparent_110%)] dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem]">
        <Image src="/assets/movies-cards.png" alt="movies cards" quality={100} fill
               className="object-cover object-top opacity-90 dark:opacity-20"/>
      </div>
      <Navbar/>
      <main className="mt-24 mx-auto w-full z-0 relative">
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default MarketingLayout
