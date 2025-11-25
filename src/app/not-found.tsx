"use client";

import { Footer, MaxWidthWrapper } from '@/components';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  const controls = useAnimation();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    // Background animasyonu için
    const handleVisibilityChange = () => {
      const isPageVisible = !document.hidden;
      
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

  const validateEmail = (emailValue: string): boolean => {
    if (!emailValue.trim()) {
      setEmailError("E-posta adresi gereklidir");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue.trim())) {
      setEmailError("Geçerli bir e-posta adresi giriniz");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleJoinClick = () => {
    if (!validateEmail(email)) {
      return;
    }
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "";
    window.location.href = `${appUrl}/register?email=${encodeURIComponent(email.trim())}`;
  };

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full relative">
      {/* Background Animation */}
      <div 
        className="absolute inset-0 h-full overflow-clip [mask-image:radial-gradient(ellipse_90%_80%_at_50%_0%,#000_80%,transparent_110%)] dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem]"
      >
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-background"></div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background min-h-screen relative z-10">
        <MaxWidthWrapper>
          <div className="flex flex-col items-center justify-center w-full text-center px-4 pt-16 md:pt-24">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src="/logo.svg"
              alt="Montana Logo"
              width={1920}
              height={682}
              className="w-[200px] h-[70px] md:w-[280px] md:h-[100px] mb-8 md:mb-12 object-contain"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#1E7ED6] via-[#76B3EB] to-[#1E7ED6] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x mb-4"
            >
              404
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-foreground text-center py-4 text-4xl sm:text-5xl md:text-7xl font-bold tracking-normal text-balance !leading-[1.15] w-full font-heading"
            >
              Sayfa Bulunamadı
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-white-900 sm:text-lg md:text-xl tracking-tight text-balance px-2 mt-4 text-muted-foreground max-w-2xl mx-auto"
            >
              Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönerek devam edebilir veya hemen kayıt olabilirsiniz.
            </motion.p>

            {/* Email ve Bize Katıl Butonu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-12 mb-4 w-full max-w-lg mx-auto px-4"
            >
              <div className="w-full flex flex-col sm:flex-row items-start gap-3">
                <div className="w-full sm:flex-1 flex flex-col">
                  <input
                    type="text"
                    placeholder="E-posta adresiniz"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) {
                        validateEmail(e.target.value);
                      }
                    }}
                    onBlur={() => validateEmail(email)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleJoinClick();
                      }
                    }}
                    className={`w-full px-5 py-4 rounded-lg bg-white/10 backdrop-blur-sm border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#1E7ED6] focus:border-transparent transition-all text-base ${
                      emailError ? "border-red-500/50" : "border-white/20"
                    }`}
                  />
                  {emailError && (
                    <p className="text-xs text-red-400 mt-1.5 ml-1 text-left">{emailError}</p>
                  )}
                </div>
                <button
                  onClick={handleJoinClick}
                  className="px-10 py-4 rounded-lg bg-gradient-to-r from-[#1E7ED6] to-[#76B3EB] text-white font-semibold transition-all duration-300 whitespace-nowrap text-base"
                >
                  Bize Katıl
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="mt-8"
            >
              <button
                onClick={() => router.push("/")}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm underline"
              >
                Ana Sayfaya Dön
              </button>
            </motion.div>
          </div>
        </MaxWidthWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;