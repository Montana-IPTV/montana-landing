import {
  BarChart3Icon,
  FolderOpenIcon,
  WandSparklesIcon,
  StarsIcon,
  ListPlus,
  User,
  Grid2x2CheckIcon,
  PhoneCallIcon,
  ServerIcon,
  LucideListVideo, VideoIcon, DiamondIcon, Clapperboard
} from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
  {
    name: "Asana",
    logo: "/assets/brands/bein.svg",
  },
  {
    name: "Tidal",
    logo: "/assets/brands/disney.svg",
  },
  {
    name: "Innovaccer",
    logo: "/assets/brands/exxen.svg",
  },
  {
    name: "Linear",
    logo: "/assets/brands/netflix.svg",
  },
  {
    name: "Raycast",
    logo: "/assets/brands/prime.svg",
  },
  {
    name: "Labelbox",
    logo: "/assets/brands/ssport.svg",
  }
] as const;

export const PROCESS = [
  {
    title: "WebTV Paneli",
    description: "Bir çok işlemi yapabileceğiniz webtv sayfası",
    icon: StarsIcon,
  },
  {
    title: "Tüm Kanallara Erişim",
    description: "Tüm kanallara tek listede erişim",
    icon: ListPlus,
  },
  {
    title: "IOS & Android Uygulamalar",
    description: "Kendimize özel Premium mobil uygulamalar!",
    icon: Grid2x2CheckIcon
  },
  {
    title: "Kişiye Özel Panel",
    description: "Kullanıcı dostu ve bir tıkla tüm hesabınızı yönetin!",
    icon: User,
  },
  {
    title: "Anında Destek",
    description: "Profesyonel ekibimiz ile haftanın her günü 12:00 & 00:00 gerçek canlı destek!",
    icon: PhoneCallIcon,
  },
  {
    title: "Güçlü Mainframe Server",
    description: "En yüksek teknoloji 25 GB Mainframe Server ile gücü hissedin!",
    icon: ServerIcon,
  },
  {
    title: "7/24 UHD & HD SD Yayınlar",
    description: "Kendi local kaynak yayınlarımızla IPTV farkını yaşayın!",
    icon: VideoIcon,
  },
  {
    title: "Yüzlerce Premium Kanal",
    description: "Yaklaşık 40 ülke ve en çok talep edilen Premium kanal arşivi!",
    icon: DiamondIcon,
  },
  {
    title: "Güncel Dizi ve Film VOD Arşivi",
    description: "Bir çok işlemi yapabileceğiniz webtv sayfası",
    icon: Clapperboard,
  },
] as const;

export const FEATURES = [
  {
    title: "Link shortening",
    description: "Create short links that are easy to remember and share.",
  },
  {
    title: "Advanced analytics",
    description: "Track and measure the performance of your links.",
  },
  {
    title: "Password protection",
    description: "Secure your links with a password.",
  },
  {
    title: "Custom QR codes",
    description: "Generate custom QR codes for your links.",
  },
  {
    title: "Link expiration",
    description: "Set an expiration date for your links.",
  },
  {
    title: "Team collaboration",
    description: "Share links with your team and collaborate in real-time.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Ahmet Yılmaz",
    username: "@ahmetyilmaz",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review: "Montana ile tüm maçları ve dizileri tek yerden izliyorum. Görüntü kalitesi harika, hiç donma yaşamadım. Kesinlikle tavsiye ederim!"
  },
  {
    name: "Ayşe Demir",
    username: "@aysedemir",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    review: "Çocuklarım için çizgi filmler, ben ve eşim için diziler... Hepsi tek abonelikte! Çok ekonomik ve kaliteli bir hizmet."
  },
  {
    name: "Mehmet Kaya",
    username: "@mehmetkaya",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    review: "3 aydır kullanıyorum, Netflix ve diğer platformlara ödediğim parayı kestim. Montana'da her şey var, hem de çok daha uygun fiyata."
  },
] as const;
