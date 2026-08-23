import type { Metadata } from "next";
import { PricingView } from "@/module/marketing/ui/views/pricing-view";

export const metadata: Metadata = {
  title: "Pricing | funroad",
  description:
    "Free to open a storefront. A flat platform fee on each sale, with no subscription and no listing charges.",
};

const Page = () => {
  return <PricingView />;
};

export default Page;
