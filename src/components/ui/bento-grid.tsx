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
import {ReactNode} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./card";
import {Input} from "./input";
import {Integrations} from "./integrations";
import {Label} from "./label";

export const CARDS = [
  {
    Icon: Smartphone,
    name: "Telefon & Tablet",
    description: "Telefonunu al, istediğin yerde favori dizilerini ve filmlerini izle. Eğlence hep yanında, hiçbir anı kaçırma.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Hemen Başla",
    background: (
      <div
        className="absolute right-[-100px] bottom-6 w-[250px] sm:-bottom-5 lg:bottom-unset lg:top-10 sm:w-[45%] lg:w-[80%] opacity-50 origin-to translate-x-0 transition-all duration-300 ease-out group-hover:-translate-x-10 p-2">
        <img src="/assets/home/devices/mobile.png" alt="mobile" className="w-full h-full" height={360} width={360}/>
      </div>
    ),
  },
  {
    Icon: Tv,
    name: "Android & Smart TV",
    description: "Büyük ekranın ve yüksek ses kalitesinin tadını çıkar. Filmler, diziler ve canlı maçlar, sinema deneyimini evine taşıyor. Montana ile izlemek, her sahneyi gerçek gibi hissetmeni sağlar ve ailenle veya arkadaşlarınla birlikte keyifli anlar yaratır.",
    href: "#",
    cta: "Şimdi İzle",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div
        className="absolute right-[-100px] sm:-bottom-5 bottom-6 w-[250px] sm:w-[50%] lg:bottom-unset lg:right-2 lg:top-[-10px] lg:w-[50%] opacity-50 origin-to translate-x-0 transition-all duration-300 ease-out group-hover:-translate-x-10 p-2">
        <img src="/assets/home/devices/tv.png" alt="tv" className="w-full h-full" height={360} width={360}/>
      </div>
    ),
  },
  {
    Icon: LucideLaptopMinimal,
    name: "PC & Mac",
    description: "Laptop üzerinden izlemeye başla ve favori içeriklerini keşfet. Montana, iş molalarını ve kısa araları keyifli hale getirir. Tarayıcıdan tek tıkla açabilir, ofiste, evde veya seyahatte rahatça izleyebilirsin. Her sahne, her dizi ve film, senin kontrolünde.",
    href: "#",
    cta: "Denemeye Başla",
    className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
    background: (
      <div
        className="absolute right-[-100px] sm:-bottom-5 bottom-6 w-[250px] sm:w-[50%] lg:bottom-unset lg:right-2 lg:top-[-10px] lg:w-[50%] opacity-50 origin-to translate-x-0 transition-all duration-300 ease-out group-hover:-translate-x-10 p-2">
        <img src="/assets/home/devices/pc.png" alt="pc" className="w-full h-full" height={360} width={360}/>
      </div>
    ),
  },
  {
    Icon: Tablet,
    name: "iOS & Android Uygulama",
    description: "Tabletini aç, yolda, kafede veya kısa molalarda tek dokunuşla izlemeye başla. Montana ile eğlence hep seninle, favori içeriklerini her an yanında taşı.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Hemen İzle",
    background: (
      <div
        className="absolute right-[-100px] sm:-bottom-5 bottom-6 w-[250px] sm:w-[50%] lg:bottom-unset lg:right-[-90px] lg:top-10 lg:w-[80%] opacity-50 origin-to translate-x-0 transition-all duration-300 ease-out group-hover:-translate-x-10 p-2">
        <img src="/assets/home/devices/tablet.png" alt="tablet" className="w-full h-full" height={360} width={360}/>
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
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-gradient-to-br from-black via-zinc-950 to-black",
      "[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    {/* Animasyonlu Border */}
    <div className="absolute inset-0 rounded-xl overflow-hidden">
      <div className="absolute inset-[-2px] bg-gradient-to-r from-[#1E7ED6] via-[#76B3EB] to-[#1E7ED6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-flow"></div>
      <div className="absolute inset-[2px] rounded-xl bg-gradient-to-br from-black via-zinc-950 to-black"></div>
    </div>

    {/* Glow Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#1E7ED6]/20 blur-[80px] rounded-full"></div>
    </div>

    <div className="relative z-10">{background}</div>
    
    {/* İkon - Arka planda */}
    <div className="absolute top-6 right-6 pointer-events-none z-0">
      <Icon
        className="h-48 w-48 text-white/10 transition-all duration-300 ease-in-out"/>
    </div>

    <div
      className="relative z-10 pointer-events-none flex flex-col gap-1 px-6 pb-6 transition-all duration-300 group-hover:-translate-y-10">
      <h3 className="text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400 group-hover:text-neutral-300 transition-colors">{description}</p>
    </div>

    <div
      className={cn(
        "relative z-10 absolute bottom-0 flex w-full translate-y-10 flex-row items-center px-6 pb-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <button
        onClick={() => {
          const appUrl = process.env.NEXT_PUBLIC_APP_URL || "";
          window.location.href = `${appUrl}/register`;
        }}
        className="text-[#1E7ED6] hover:text-[#76B3EB] text-base font-semibold my-2 inline-flex items-center hover:underline transition-all cursor-pointer"
      >
        {cta}
        <ArrowRightIcon className="ml-2 h-5 w-5"/>
      </button>
    </div>
  </div>
);

export {BentoCard, BentoGrid};
