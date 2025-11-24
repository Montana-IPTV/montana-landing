"use client";

import React, { useEffect, useState } from 'react';
import {Footer} from "@/components";
import {motion, useAnimation} from "framer-motion";

interface Props {
  children: React.ReactNode
}

const MarketingLayout = ({children}: Props) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Sayfa görünürlüğünü kontrol et
    const handleVisibilityChange = () => {
      const isPageVisible = !document.hidden;
      setIsVisible(isPageVisible);
      
      if (isPageVisible) {
        controls.start({
          y: [0, "-50%"],
          transition: {
            duration: 40,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      } else {
        controls.stop();
      }
    };

    // İlk animasyonu başlat
    controls.start({
      y: [0, "-50%"],
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      controls.stop();
    };
  }, [controls]);

  return (
    <>
      <div id="home"
           className="absolute inset-0 h-[600px] md:h-full overflow-clip [mask-image:radial-gradient(ellipse_90%_80%_at_50%_0%,#000_80%,transparent_110%)] dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute w-full h-[200%] top-0 will-change-transform"
            style={{ 
              display: "flex",
              flexDirection: "column"
            }}
            animate={controls}
          >
            <img 
              src="/assets/home/hero-bg.webp" 
              alt="hero background" 
              className="w-full h-1/2 object-cover object-top opacity-90 dark:opacity-20"
              loading="eager"
              decoding="async"
            />
            <img 
              src="/assets/home/hero-bg.webp" 
              alt="hero background" 
              className="w-full h-1/2 object-cover object-top opacity-90 dark:opacity-20"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>
        {/* Gradient overlay - içeriklerin görünmesi için */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-background"></div>
      </div>
      <main className="mx-auto w-full z-0 relative">
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default MarketingLayout
