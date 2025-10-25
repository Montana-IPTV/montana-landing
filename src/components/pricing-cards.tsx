"use client";

import {buttonVariants} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {cn, PLANS} from "@/utils";
import {motion} from "framer-motion";
import {CheckCircleIcon} from "lucide-react";
import Link from "next/link";
import {useState} from 'react';

type Tab = "monthly" | "yearly";

const PricingCards = () => {

  const MotionTabTrigger = motion(TabsTrigger);

  const [activeTab, setActiveTab] = useState<Tab>("monthly");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6">
      {PLANS.map((plan) => (
        <Card
          key={plan.name}
          className={cn(
            "flex flex-col w-full border-border rounded-xl",
            plan.name === "Pro" && "border-2 border-[#1E7ED6]"
          )}
        >
          <CardHeader className={cn(
            "border-b border-border rounded-tr-xl rounded-tl-xl",
            plan.name === "Pro" ? "bg-[#1E7ED6]/[0.07]" : "bg-foreground/[0.03]"
          )}>
            <CardTitle className={cn(plan.name !== "Pro" && "text-muted-foreground", "text-lg font-medium")}>
              {plan.name}
            </CardTitle>
            <h5 className="text-3xl font-semibold">
              {plan.price.monthly}
              <span className="text-base text-muted-foreground font-normal">
                  {plan.name !== "Free" ? " TRY/Aylık" : ""}
              </span>
            </h5>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {plan.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircleIcon className="text-[#1E7ED6] w-4 h-4"/>
                {feature.text}
              </div>
            ))}
          </CardContent>
          <CardFooter className="w-full mt-auto">
            <Link
              href={plan.btn.href}
              style={{width: "100%"}}
              className={buttonVariants({className: plan.name === "Hepsi Bir Arada" && "!bg-blue-600 hover:!bg-blue-600/80 text-white"})}
            >
              {plan.btn.text}
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
};

export default PricingCards
