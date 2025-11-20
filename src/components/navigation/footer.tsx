import Link from 'next/link';
import { AnimationContainer, Icons } from "@/components"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                          <Link href="/#home">
                            <Image src="/logo.svg" alt="logo" width={166.27} height={45.39} className="w-[118px] h-[32px]" />
                          </Link>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            Bağlantılarınızı kolayca yönetin.
                        </p>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Ürün
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Özellikler
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Fiyatlandırma
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Müşteri Yorumları
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Entegrasyon
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Entegrasyonlar
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Twitter
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Kaynaklar
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/resources/blog" className="hover:text-foreground transition-all duration-300">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/resources/help" className="hover:text-foreground transition-all duration-300">
                                            Destek
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Şirket
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Hakkımızda
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                            Gizlilik Politikası
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                            Şartlar ve Koşullar
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

            </div>

            <div className="mt-8 mb-6 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Montana INC. Tüm hakları saklıdır.
                    </p>
                </AnimationContainer>
            </div>
        </footer>
    )
}

export default Footer
