"use client";

import {AnimationContainer, MaxWidthWrapper, PricingCards} from "@/components";
import {BentoCard, BentoGrid, CARDS} from "@/components/ui/bento-grid";
import {BorderBeam} from "@/components/ui/border-beam";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {LampContainer} from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import {COMPANIES, PROCESS} from "@/utils";
import {REVIEWS} from "@/utils/constants/misc";
import {ArrowRightIcon, ChevronRightIcon, CreditCardIcon, StarIcon} from "lucide-react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {FAQ} from "@/utils/constants/faq";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";

const HomePage = () => {
  useEffect(() => {
    // Structured Data (JSON-LD) ekle
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://montanahd.com";
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Montana - Tüm Platformlar, Tek Abonelik",
      "description": "Montana ile üst düzey yayın deneyimini, kesintisiz performansı ve gerçek premium kaliteyi keşfedin. Tek üyelikle her ekranda sorunsuz erişim.",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.svg`,
      "sameAs": [],
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "3",
        "lowPrice": "299.90",
        "highPrice": "499.90",
        "priceCurrency": "TRY"
      }
    };

    // Mevcut structured data script'ini kontrol et
    let script = document.querySelector('script[type="application/ld+json"]');
    
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup yapmaya gerek yok, script kalıcı olmalı
    };
  }, []);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

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
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background min-h-screen">
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
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-foreground text-center py-4 text-4xl sm:text-5xl md:text-7xl font-bold tracking-normal text-balance !leading-[1.15] w-full font-heading">
                Tüm Platformlar <br />
                <span
                className="text-transparent bg-gradient-to-r from-[#1E7ED6] via-[#76B3EB] to-[#1E7ED6] bg-clip-text inline-block bg-[length:200%_auto] animate-gradient-x"> Tek Abonelik</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-white-900 sm:text-lg md:text-xl tracking-tight text-balance px-2 mt-4 text-muted-foreground max-w-2xl mx-auto">
                Montana ile üst düzey yayın deneyimini, kesintisiz performansı ve gerçek premium kaliteyi keşfedin. Tek üyelikle her ekranda sorunsuz erişim.
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
          </div>
        </MaxWidthWrapper>

        <div className="relative pt-4 md:pt-12 sm:pb-14 md:pb-16 px-2 w-full flex items-center justify-center">
          {/* Blur efekti - sonradan beliriyor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="absolute top-[25%] left-1/2 gradient w-[80%] sm:w-2/3 md:w-2/5 -translate-x-1/2 h-[20%] sm:h-[25%] md:h-[30%] blur-[9rem]"
          ></motion.div>

          {/* Ana görsel - alttan yukarı */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="relative z-10"
          >
            <img
              src="/assets/home/hero-2.png"
              alt="Dashboard"
              width={1330}
              height={480}
              className="mx-auto max-w-none sm:max-w-full md:max-w-screen-2xl px-2 sm:px-4 md:px-12 w-[600px] sm:w-full h-auto"
            />
          </motion.div>
        </div>

      </div>

      {/* Companies Section */}
      <MaxWidthWrapper className="pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="pb-12 md:pb-16" id="companies">
            <div className="mx-auto px-4 md:px-8">
              <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold font-heading text-neutral-200 uppercase">
                Tüm Yayın Platformları ve Spor Kanalları Tek Yerde!
              </h2>
              <div className="mt-8">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                  {COMPANIES.map((company, index) => (
                    <motion.li
                      key={company.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.15 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <img
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        className="w-20 sm:w-32 h-[45px] sm:h-[72px] object-contain transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_15px_rgba(30,126,214,0.5)]"
                      />
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>

      {/* Pricing Section */}
      <MaxWidthWrapper className="py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            id="pricing"
            className="flex flex-col items-center lg:items-center justify-center w-full py-2 md:py-8 max-w-xl mx-auto scroll-mt-[100px]">
            <MagicBadge title="Paketlerimiz"/>
            <h2
              className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                Her İçerik Tek Abonelikte
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Tüm dünyadan binlerce kanal, film ve diziyi tek yerde toplayın. İstediğiniz platformda anında izleyin
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <PricingCards/>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-6 max-w-2xl mx-auto"
        >
          * Paket fiyatları seçilen cihaz sayısı ve bölgeye göre değişiklik gösterebilir.
        </motion.p>
      </MaxWidthWrapper>

      {/* Features Section */}
      <MaxWidthWrapper className="pt-20 md:pt-24 pb-12 md:pb-16">
        <AnimationContainer delay={0.1}>
          <div
            id="platforms"
            className="flex flex-col w-full items-center lg:items-center justify-center py-8 scroll-mt-[120px]">
            <MagicBadge title="Platformlar"/>
            <h2
              className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              İstediğiniz şekilde İzleyin
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Tek bir ekrana bağlı kalma! Her yer senin sinema salonun.
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2}>
          <BentoGrid className="py-8">
            {CARDS.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Reviews Section */}
      <MaxWidthWrapper className="py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            id="reviews"
            className="flex flex-col items-center lg:items-center justify-center w-full md:py-8 max-w-xl mx-auto scroll-mt-[120px]">
            <MagicBadge title="Yorumlar"/>
            <h2
              className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Sizden Gelenler
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Binlerce memnun kullanıcımızın Montana deneyimi. Premium yayın kalitesi ve kesintisiz hizmet hakkında ne dediklerini keşfedin.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 sm:py-10">
          {REVIEWS.slice(0, 3).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagicCard className="md:p-0 h-full">
                <Card className="flex flex-col w-full border-none h-full">
                  <CardHeader className="space-y-0 p-4">
                    <CardTitle className="text-lg font-medium text-muted-foreground">
                      {review.name}
                    </CardTitle>
                    <CardDescription>
                      {review.username}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pb-4 px-4">
                    <p className="text-muted-foreground">
                      {review.review}
                    </p>
                  </CardContent>
                  <CardFooter className="w-full space-x-1 mt-auto px-4">
                    {Array.from({length: review.rating}, (_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500"/>
                    ))}
                  </CardFooter>
                </Card>
              </MagicCard>
            </motion.div>
          ))}
          <div className="flex flex-col items-start h-min gap-6">
            {REVIEWS.slice(3, 6).map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <MagicCard className="md:p-0">
                  <Card className="flex flex-col w-full border-none h-min">
                    <CardHeader className="space-y-0">
                      <CardTitle className="text-lg font-medium text-muted-foreground">
                        {review.name}
                      </CardTitle>
                      <CardDescription>
                        {review.username}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pb-4">
                      <p className="text-muted-foreground">
                        {review.review}
                      </p>
                    </CardContent>
                    <CardFooter className="w-full space-x-1 mt-auto">
                      {Array.from({length: review.rating}, (_, i) => (
                        <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500"/>
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col items-start h-min gap-6">
            {REVIEWS.slice(6, 9).map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index + 6) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <MagicCard className="md:p-0">
                  <Card className="flex flex-col w-full border-none h-min">
                    <CardHeader className="space-y-0">
                      <CardTitle className="text-lg font-medium text-muted-foreground">
                        {review.name}
                      </CardTitle>
                      <CardDescription>
                        {review.username}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pb-4">
                      <p className="text-muted-foreground">
                        {review.review}
                      </p>
                    </CardContent>
                    <CardFooter className="w-full space-x-1 mt-auto">
                      {Array.from({length: review.rating}, (_, i) => (
                        <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500"/>
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* CTA Section */}
      <MaxWidthWrapper className="mt-20 md:mt-32 lg:mt-48 mb-40 md:max-w-[90vw] overflow-x-hidden scrollbar-hide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div id="faq" className="scroll-mt-[120px]">
            <LampContainer/>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center relative w-full text-center lg:-mt-[180px]"
            >
              <div className="flex flex-col items-center justify-center w-full">
                <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-5xl">
                  Sıkça Sorulan Sorular
                </h2>
                <p className="max-w-lg mt-6 text-center text-neutral-500">
                  Merak ettiğiniz tüm soruların cevapları burada! Hizmetlerimiz, fiyatlandırma ve daha fazlası hakkında
                </p>
              </div>
              <div className="max-w-3xl mx-auto w-full mt-10">
                <Accordion type="single" collapsible>
                  {FAQ.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                    >
                      <AccordionItem value={faq.id}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </MaxWidthWrapper>

    </div>
  )
};

export default HomePage
