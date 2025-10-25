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

      {/* Process Section */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div
            className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="The Process"/>
            <h2
              className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Effortless link management in 3 steps
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Follow these simple steps to optimize, organize, and share your links with ease.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
          {PROCESS.map((process, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className="group md:py-8">
                <div className="flex flex-col items-start justify-center w-full">
                  <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground"/>
                  <div className="flex flex-col relative items-start">
                                        <span
                                          className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                    <h3 className="text-base mt-6 font-medium text-foreground">
                      {process.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {process.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
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
          <div className="flex flex-col items-start h-min gap-6">
            {REVIEWS.slice(0, 3).map((review, index) => (
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

      {/* CTA Section */}
      <MaxWidthWrapper className="mt-20 max-w-[90vw] overflow-x-hidden scrollbar-hide">
        <AnimationContainer delay={0.1}>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2
                className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-2">
                Diziler, Filmler ve Maçlar <br/> Hepsi Tek Yerde!
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                İstediğin ekranda, istediğin zaman izle.
                Sınırsız eğlence her yerde seninle.
              </p>
              <div className="mt-6">
                <Button>
                  Hesabını Oluştur
                  <ArrowRightIcon className="w-4 h-4 ml-2"/>
                </Button>
              </div>
            </div>
          </LampContainer>
        </AnimationContainer>
      </MaxWidthWrapper>

    </div>
  )
};

export default HomePage
