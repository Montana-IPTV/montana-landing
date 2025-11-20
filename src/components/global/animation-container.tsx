"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimationContainerProps {
  children: React.ReactNode;
  delay?: number;
  reverse?: boolean;
  className?: string;
}

export default function AnimationContainer({
                                             children,
                                             className,
                                             reverse = false,
                                             delay = 0,
                                           }: AnimationContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.15, // item %15 görünce trigger
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay,
          ease: "easeOut",
          type: "spring",
          stiffness: 200,
          damping: 18,
        },
      });
    }
  }, [isVisible]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
