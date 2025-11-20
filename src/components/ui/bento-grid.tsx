import {buttonVariants} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {cn} from "@/utils";
import {
  ArrowRightIcon,
  CalendarIcon,
  Link2Icon,
  SearchIcon,
  WaypointsIcon,
  Tv,
  LucideLaptopMinimal,
  Tablet, Phone, PhoneIcon, Smartphone
} from "lucide-react";
import Link from "next/link";
import {ReactNode} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./card";
import {Input} from "./input";
import {Integrations} from "./integrations";
import {Label} from "./label";
import Image from "next/image";

export const CARDS = [
  {
    Icon: Smartphone,
    name: "Taşınabilir konfor",
    description: "Ekranı döndür, dizi maratonuna dilediğin yerde devam et.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div
        className="absolute right-[-100px] top-10 w-[80%] opacity-50 origin-to translate-x-0 transition-all duration-300 ease-out group-hover:-translate-x-10 p-2">
        <Image src="/assets/home/devices/mobile.png" alt="pc" className="w-full h-full" height={360} width={360}/>
      </div>
    ),
  },
  {
    Icon: Tv,
    name: "Büyük ekranda keyif",
    description: "Filmleri, dizileri ve maçları sinema kalitesinde izle.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div
        className="absolute right-[-100px] top-10 w-[80%] md:right-2 md:top-[-10px] md:w-[50%] opacity-50 origin-to translate-x-0 transition-all duration-300 ease-out group-hover:-translate-x-10 p-2">
        <Image src="/assets/home/devices/tv.png" alt="tv" className="w-full h-full" height={360} width={360}/>
      </div>
    ),
  },
  {
    Icon: LucideLaptopMinimal,
    name: "Çalışırken bile eğlence seninle",
    description: "Web tarayıcından anında giriş yap, favori içeriklerini keşfet.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
    background: (
      <div
        className="absolute right-2 top-[-10px] w-[50%] opacity-50 origin-to translate-x-0 transition-all duration-300 ease-out group-hover:-translate-x-10 p-2">
        <Image src="/assets/home/devices/pc.png" alt="pc" className="w-full h-full" height={360} width={360}/>
      </div>
    ),
  },
  {
    Icon: Tablet,
    name: "Her an yanında",
    description: "Yolda, kafede veya molada — tek dokunuşla izlemeye başla.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div
        className="absolute right-[-90px] top-10 w-[80%] opacity-50 origin-to translate-x-0 transition-all duration-300 ease-out group-hover:-translate-x-10 p-2">
        <Image src="/assets/home/devices/tablet.png" alt="pc" className="w-full h-full" height={360} width={360}/>
      </div>
    ),
  },
];

const BentoGrid = ({
                     children,
                     className,
                   }: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
                     name,
                     className,
                     background,
                     Icon,
                     description,
                     href,
                     cta,
                   }: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
      "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div>{background}</div>
    <div
      className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon
        className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"/>
      <h3 className="text-xl font-semibold text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className={cn(
        "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Link href={href} className={buttonVariants({size: "sm", variant: "ghost", className: "cursor-pointer"})}>
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4"/>
      </Link>
    </div>
    <div
      className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"/>
  </div>
);

export {BentoCard, BentoGrid};
