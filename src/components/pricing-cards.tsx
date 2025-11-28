"use client";

import {cn} from "@/utils";
import {motion} from "framer-motion";
import {CheckCircleIcon} from "lucide-react";
import {useEffect, useState} from 'react';

interface Package {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  images: { dark: string | null; light: string | null } | null;
  platformIcons: string[] | null;
  monthlyPrice: string;
  features: string[] | null;
  isFeatured: boolean;
  displayOrder: number;
}

const PricingCards = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('/api/packages');
        if (response.ok) {
          const data = await response.json();
          setPackages(data);
        }
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-96 bg-gradient-to-br from-black via-zinc-950 to-black rounded-xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (packages.length === 0) {
    return null;
  }

  // Önerilen paketi ortaya al
  const sortedPackages = [...packages].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return 0; // Featured'ı ortaya almak için
    if (!a.isFeatured && b.isFeatured) return 0;
    return a.displayOrder - b.displayOrder;
  });

  // Featured paketi bul ve ortaya al
  const featuredIndex = sortedPackages.findIndex(pkg => pkg.isFeatured);
  if (featuredIndex !== -1 && sortedPackages.length === 3) {
    const featured = sortedPackages[featuredIndex];
    sortedPackages.splice(featuredIndex, 1);
    sortedPackages.splice(1, 0, featured); // Ortaya (index 1) ekle
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full md:gap-10 flex-wrap max-w-7xl mx-auto pt-6">
      {sortedPackages.map((pkg, index) => {
        const logoUrl = pkg.images?.dark || '/logo.svg';
        const price = parseFloat(pkg.monthlyPrice);
        const isFeatured = pkg.isFeatured;

        return (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "group relative flex flex-col w-full rounded-xl overflow-visible",
              "bg-gradient-to-br from-black via-zinc-950 to-black",
              "[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
          >
            {/* Sabit Gradient Border */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className={cn(
                "absolute inset-[-1.5px] rounded-xl bg-gradient-to-r from-[#1E7ED6] via-[#76B3EB] to-[#1E7ED6] transition-opacity duration-500",
                isFeatured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )}></div>
              <div className="absolute inset-[1.5px] rounded-xl bg-gradient-to-br from-black via-zinc-950 to-black overflow-hidden"></div>
            </div>

            {/* Popüler Badge */}
            {isFeatured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <div className="bg-gradient-to-r from-[#1E7ED6] to-[#76B3EB] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                  EN POPÜLER
                </div>
              </div>
            )}

            <div className="relative z-10 flex flex-col h-full">
              <div className={cn(
                "border-b border-border/30 p-4 pt-6 sm:p-6 text-center flex flex-col items-center",
                isFeatured ? "bg-[#1E7ED6]/[0.1]" : "bg-foreground/[0.03]"
              )}>
                <img
                  src={logoUrl}
                  alt={pkg.name}
                  width={1920}
                  height={682}
                  className="h-14 sm:h-20 w-fit object-contain brightness-110 mb-6"
                />
                {pkg.platformIcons && pkg.platformIcons.length > 0 && (
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {pkg.platformIcons.map((iconUrl, iconIndex) => (
                      <img
                        key={iconIndex}
                        src={iconUrl}
                        alt={`Platform ${iconIndex + 1}`}
                        className="h-6 w-6 object-contain opacity-100 brightness-110"
                      />
                    ))}
                  </div>
                )}
                {pkg.description && (
                  <span className="text-sm text-neutral-400 mt-4 mb-2 block">
                    {pkg.description}
                  </span>
                )}
                <h5 className="text-4xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent mt-2 sm:mt-4">
                  {price.toFixed(2)}
                  <span className="text-lg text-muted-foreground font-normal ml-1">
                    TRY/Ay
                  </span>
                </h5>
              </div>

              <div className="p-4 sm:p-6 space-y-4 flex-grow">
                {pkg.features && pkg.features.length > 0 ? (
                  pkg.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.1 + featureIndex * 0.03 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircleIcon className="text-[#1E7ED6] w-5 h-5 flex-shrink-0"/>
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-neutral-400 text-sm">Özellik bilgisi bulunmuyor</div>
                )}
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "";
                    window.location.href = `${appUrl}/register`;
                  }}
                  className={cn(
                    "w-full inline-flex items-center justify-center rounded-lg px-6 py-2 sm:py-3 text-base font-semibold transition-all duration-300",
                    isFeatured
                      ? "bg-gradient-to-r from-[#1E7ED6] to-[#76B3EB] text-white hover:shadow-lg hover:shadow-[#1E7ED6]/50 hover:scale-105"
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  )}
                >
                  Paketi İncele
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  )
};

export default PricingCards
