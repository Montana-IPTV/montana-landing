// export const PLANS = [
//     {
//         name: "Free",
//         info: "For most individuals",
//         price: {
//             monthly: 0,
//             yearly: 0,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 100 tags", limit: "100 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "1K clicks/month" },
//             { text: "Community support", tooltip: "Get answers your questions on discord" },
//             { text: "AI powered suggestions", tooltip: "Get up to 100 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Start for free",
//             href: "/auth/sign-up?plan=free",
//             variant: "default",
//         }
//     },
//     {
//         name: "Pro",
//         info: "For small businesses",
//         price: {
//             monthly: 9,
//             yearly: 90,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 500 tags", limit: "500 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "20K clicks/month" },
//             { text: "Export click data", tooltip: "Upto 1K links" },
//             { text: "Priority support", tooltip: "Get 24/7 chat support" },
//             { text: "AI powered suggestions", tooltip: "Get up to 500 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Get started",
//             href: "/auth/sign-up?plan=pro",
//             variant: "purple",
//         }
//     },
//     {
//         name: "Business",
//         info: "For large organizations",
//         price: {
//             monthly: 49,
//             yearly: 490,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Unlimited tags" },
//             { text: "Customizable branded links"},
//             { text: "Track clicks", tooltip: "Unlimited clicks" },
//             { text: "Export click data", tooltip: "Unlimited clicks" },
//             { text: "Dedicated manager", tooltip: "Get priority support from our team" },
//             { text: "AI powered suggestions", tooltip: "Get unlimited AI powered suggestions" },
//         ],
//         btn: {
//             text: "Contact team",
//             href: "/auth/sign-up?plan=business",
//             variant: "default",
//         }
//     }
// ];

// export const PRICING_FEATURES = [
//     {
//         text: "Shorten links",
//         tooltip: "Create shortened links",
//     },
//     {
//         text: "Track clicks",
//         tooltip: "Track clicks on your links",
//     },
//     {
//         text: "See top countries",
//         tooltip: "See top countries where your links are clicked",
//     },
//     {
//         text: "Upto 10 tags",
//         tooltip: "Add upto 10 tags to your links",
//     },
//     {
//         text: "Community support",
//         tooltip: "Community support is available for free users",
//     },
//     {
//         text: "Priority support",
//         tooltip: "Get priority support from our team",
//     },
//     {
//         text: "AI powered suggestions",
//         tooltip: "Get AI powered suggestions for your links",
//     },
// ];

// export const WORKSPACE_LIMIT = 2;
export const PLANS = [
  {
    logo: "/logo-sports.svg",
    name: "Montana Sports",
    text: "Tüm Spor Yayınları",
    price: {
      monthly: 299.90,
      yearly: 0,
    },
    features: [
      {text: "500+ Canlı Kanal"},
      {text: "Dünya & Yerel Kanallar"},
      {text: "Spor Yayınları"},
      {text: "HD/FHD/4K Kalite"},
      {text: "7/24 Destek"}
    ],
    btn: {
      text: "Paketi İncele",
      href: "/auth/sign-up?plan=sports",
      variant: "default",
    }
  },
  {
    logo: "/logo-cinema.svg",
    name: "Montana Cinema",
    text: "Tüm Spor Yayınları",
    price: {
      monthly: 349.90,
      yearly: 0,
    },
    features: [
      {text: "15000+ Film & Dizi"},
      {text: "Yeni Çıkan Yapımlar"},
      {text: "Tüm Kategoriler"},
      {text: "HD/FHD/4K Kalite"},
      {text: "7/24 Destek"}
    ],
    btn: {
      text: "Paketi İncele",
      href: "/auth/sign-up?plan=cinema",
      variant: "default",
    }
  },
  {
    logo: "/logo-max.svg",
    name: "Montana Max",
    text: "Tüm Spor Yayınları",
    popular: true,
    price: {
      monthly: 499.90,
      yearly: 0,
    },
    features: [
      {text: "Tüm Kanallar & İçerikler"},
      {text: "Canlı TV + Film + Dizi"},
      {text: "15000+ İçerik Kütüphanesi"},
      {text: "HD/FHD/4K Kalite"},
      {text: "Öncelikli Destek"}
    ],
    btn: {
      text: "Paketi İncele",
      href: "/auth/sign-up?plan=max",
      variant: "default",
    }
  }
];

export const PRICING_FEATURES = [
  {
    text: "Shorten links",
    tooltip: "Create shortened links",
  },
  {
    text: "Track clicks",
    tooltip: "Track clicks on your links",
  },
  {
    text: "See top countries",
    tooltip: "See top countries where your links are clicked",
  },
  {
    text: "Upto 10 tags",
    tooltip: "Add upto 10 tags to your links",
  },
  {
    text: "Community support",
    tooltip: "Community support is available for free users",
  },
  {
    text: "Priority support",
    tooltip: "Get priority support from our team",
  },
  {
    text: "AI powered suggestions",
    tooltip: "Get AI powered suggestions for your links",
  },
];

export const WORKSPACE_LIMIT = 2;
