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
          <div className="py-14">
            <div className="mx-auto px-4 md:px-8">
              <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                Trusted by the best in the industry
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
            className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Simple Pricing"/>
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
          <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
            <MagicBadge title="Features"/>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">
          {REVIEWS.slice(0, 3).map((review, index) => (
            <AnimationContainer delay={0.2 * index} key={index}>
              <MagicCard key={index} className="md:p-0 h-full">
                <Card className="flex flex-col w-full border-none">
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
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center rounded-3xl bg-card ring-1 ring-border p-6 sm:p-10 md:p-14">
            {/* Left: Copy */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Kendi Netflix’inizi Kurmak İster misiniz?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Tamamen size özel tasarım, güçlü altyapı ve yüksek trafikli yayın sunucularıyla
                kendi Netflix tarzı platformunuzu birkaç gün içinde yayına almanızı sağlıyoruz.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-muted-foreground">
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
                  <Link href={"/contact"}>Bizimle Çalışmak İstiyorum</Link>
                </Button>
                <p className="text-xs sm:text-sm text-muted-foreground mt-3">
                  İletişim bilgilerinizi bırakın, ekibimiz en kısa sürede dönüş yapsın.
                </p>
              </div>
            </div>

            {/* Right: Multi-device Mockup */}
            <div className="relative w-full">
              <div className="absolute -inset-6 -z-10 bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-2xl rounded-3xl"/>
              <div className="relative aspect-[16/10] w-full">
                {/* TV */}
                <div className="absolute inset-0 mx-auto rounded-2xl bg-muted/20 ring-1 ring-border overflow-hidden">
                  <div className="h-8 w-full bg-neutral-800/80 flex items-center gap-2 px-3">
                    <span className="size-2 rounded-full bg-neutral-600"/>
                    <span className="size-2 rounded-full bg-neutral-600"/>
                    <span className="size-2 rounded-full bg-neutral-600"/>
                    <div className="ml-auto h-3 w-24 rounded bg-neutral-700"/>
                  </div>
                  <div className="p-4 sm:p-6 grid grid-cols-3 gap-2 sm:gap-3">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="aspect-[16/9] rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-800 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,#ffffff33,transparent_35%)]"/>
                        <div className="absolute bottom-0 left-0 right-0 p-2">
                          <div className="h-2 w-2/3 rounded bg-white/20"/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-3 w-40 rounded-b-xl bg-neutral-900/90"/>

                {/* Tablet */}
                <div className="absolute right-2 -bottom-6 sm:right-6 sm:-bottom-10 w-40 sm:w-48 md:w-56 aspect-[3/4] rounded-2xl bg-muted/20 ring-1 ring-border overflow-hidden">
                  <div className="h-6 w-full flex items-center justify-center">
                    <div className="h-1 w-16 rounded-full bg-neutral-700"/>
                  </div>
                  <div className="p-3 grid grid-cols-2 gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="aspect-[4/3] rounded-md bg-neutral-800 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,#ffffff40,transparent_45%)]"/>
                        <div className="absolute bottom-0 left-0 right-0 p-1.5">
                          <div className="h-1.5 w-1/2 rounded bg-white/15"/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile */}
                <div className="absolute left-2 -bottom-6 sm:left-6 sm:-bottom-10 w-20 sm:w-24 md:w-28 aspect-[9/19] rounded-[1.4rem] bg-muted/20 ring-1 ring-border overflow-hidden">
                  <div className="h-5"/>
                  <div className="px-2 grid grid-cols-1 gap-1.5">
                    <div className="aspect-[16/9] rounded-md bg-neutral-800"/>
                    <div className="h-2 w-3/4 rounded bg-white/15"/>
                    <div className="grid grid-cols-3 gap-1.5">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="aspect-square rounded bg-neutral-800"/>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-6 w-20 rounded-full bg-neutral-800"/>
                </div>
              </div>
            </div>
          </section>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* CTA Section */}
      <MaxWidthWrapper className="mt-40 mb-40 max-w-[90vw] overflow-x-hidden scrollbar-hide">
        <AnimationContainer delay={0.1}>
          <LampContainer />
            <div className="flex flex-col items-center justify-center relative w-full text-center -mt-[180px]">
              <div className="flex flex-col items-center justify-center w-full">
                <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-lg mt-6 text-center text-neutral-500">
                  Here are some of the most common questions we get asked. If you have a question that isn&apos;t answered here, feel free to reach out to us.
                </p>
              </div>
              <div className="max-w-3xl mx-auto w-full mt-20">
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
