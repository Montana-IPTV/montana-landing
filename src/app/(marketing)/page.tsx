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
import {currentUser} from "@clerk/nextjs/server";
import {ArrowRightIcon, ChevronRightIcon, CreditCardIcon, StarIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {FAQ} from "@/utils/constants/faq";

const HomePage = async () => {

  const user = await currentUser();

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
        <MaxWidthWrapper>
          <div
            className="flex flex-col items-center justify-center w-full text-center">
            <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
              <h1
                className="text-foreground text-center py-4 text-5xl font-bold tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                Tüm Platformlar <span
                className="text-transparent bg-gradient-to-r from-[#1E7ED6] to-[#76B3EB] bg-clip-text inline-bloc">
                                Tek Paket
                            </span>
              </h1>
              <p className="mb-12 text-xl tracking-tight md:text-2xl text-balance">
                            <span
                              className="text-transparent bg-gradient-to-r from-[#1E7ED6] to-[#76B3EB] bg-clip-text inline-bloc">Montana Servers </span>
                ile premium kalitenin farkını keşfedin!
              </p>
              <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                <Button asChild variant="blue">
                  <Link href={user ? "/dashboard" : "/auth/sign-in"} className="flex items-center">
                    <span className="text-md">Hesap Oluştur</span>
                    <ChevronRightIcon className="w-5 h-5 ml-1"/>
                  </Link>
                </Button>
              </div>
            </AnimationContainer>
          </div>
        </MaxWidthWrapper>
        <AnimationContainer delay={0.2}
                            className="relative pt-20 pb-20 md:py-10 px-2 w-full flex items-center justify-center">
          <div
            className="absolute md:top-[20%] left-1/2 gradient w-2/5 -translate-x-1/2 h-1/5 md:h-1/4 inset-0 blur-[9rem] animate-image-glow"></div>
          <Image
            src="/assets/home/hero-2.png"
            alt="Dashboard"
            width={1330}
            height={480}
            quality={100}
            className="mx-auto max-w-full md:max-w-screen-2xl px-4 md:px-12 lg:px-12 w-full h-auto relative z-10"
          />
        </AnimationContainer>
      </div>

      {/* Companies Section */}
      <MaxWidthWrapper>
        <AnimationContainer delay={0.4}>
          <div className="py-14 scroll-mt-40" id="companies">
            <div className="mx-auto px-4 md:px-8">
              <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                Tüm Yayın Platformları ve Spor Kanalları Tek Yerde!
              </h2>
              <div className="mt-8">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                  {COMPANIES.map((company) => (
                    <li key={company.name}>
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        quality={100}
                        className="w-32 h-[72px] object-contain"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Pricing Section */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div
            id="pricing"
            className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto scroll-mt-[100px]">
            <MagicBadge title="Planlar"/>
            <h2
              className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Filmler ve Diziler Tek Yerde
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Tüm dünyadan binlerce kanal, film ve diziyi tek yerde toplayın. İstediğiniz platformda anında izleyin
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2}>
          <PricingCards/>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Features Section */}
      <MaxWidthWrapper className="pt-10">
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
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div
            className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Sizden Gelenler"/>
            <h2
              className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Sizden Gelenler
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Gerçek deneyimler, samimi düşünceler. Ürünlerimizi en iyi anlatanlar sizsiniz.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 py-10">
          {REVIEWS.slice(0, 3).map((review, index) => (
            <AnimationContainer delay={0.2 * index} key={index}>
              <MagicCard key={index} className="md:p-0 h-full">
                <Card className="flex flex-col w-full border-none h-full">
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
            </AnimationContainer>
          ))}
          <div className="flex flex-col items-start h-min gap-6">
            {REVIEWS.slice(3, 6).map((review, index) => (
              <AnimationContainer delay={0.2 * index} key={index}>
                <MagicCard key={index} className="md:p-0">
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
              </AnimationContainer>
            ))}
          </div>
          <div className="flex flex-col items-start h-min gap-6">
            {REVIEWS.slice(6, 9).map((review, index) => (
              <AnimationContainer delay={0.2 * index} key={index}>
                <MagicCard key={index} className="md:p-0">
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
              </AnimationContainer>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* SaaS OTT Builder Section */}
      <MaxWidthWrapper className="py-8">
        <AnimationContainer delay={0.1}>
          <section
            id="contact"
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center rounded-3xl bg-card ring-1 ring-border px-6 py-8 pl-8 scroll-mt-[120px]">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Kendi Netflix’inizi Kurmak İster misiniz?
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Tamamen size özel tasarım, güçlü altyapı ve yüksek trafikli yayın sunucularıyla
                kendi Netflix tarzı platformunuzu birkaç gün içinde yayına almanızı sağlıyoruz.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-2.5 rounded-full bg-primary"></span>
                  <span>Hazır altyapı — hızlı kurulum</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none mt-1.5 size-2.5 rounded-full bg-primary"></span>
                  <span>Sunucu & CDN hizmeti (yüksek performans + düşük gecikme)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none mt-1.5 size-2.5 rounded-full bg-primary"></span>
                  <span>Tamamen white-label tasarım</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none mt-1.5 size-2.5 rounded-full bg-primary"></span>
                  <span>Ödeme sistemi & üyelik altyapısı</span>
                </li>
              </ul>
              <div className="pt-2">
                <Button asChild variant="blue" size="lg">
                  <Link href={"/contact"}>Bizimle Çalış</Link>
                </Button>
                <p className="text-xs sm:text-sm text-muted-foreground mt-3">
                  İletişim bilgilerinizi bırakın, ekibimiz en kısa sürede dönüş yapsın.
                </p>
              </div>
            </div>

            <div className="relative w-full">
              <div className="w-full flex items-center justify-center">
                <Image className="object-contain" src="/assets/home/partnership.png" alt="partnership" width={2658} height={1803} />
              </div>
            </div>
          </section>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* CTA Section */}
      <MaxWidthWrapper className="mt-40 mb-40 max-w-[90vw] overflow-x-hidden scrollbar-hide">
        <AnimationContainer delay={0.1}>
          <LampContainer/>
          <div className="flex flex-col items-center justify-center relative w-full text-center -mt-[200px]">
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
                {FAQ.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

    </div>
  )
};

export default HomePage
