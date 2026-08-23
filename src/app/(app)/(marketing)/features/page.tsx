import type { Metadata } from "next";
import { FeaturesView } from "@/module/marketing/ui/views/features-view";

export const metadata: Metadata = {
  title: "Features | funroad",
  description:
    "Custom storefronts, Stripe Connect payouts, categories, reviews and a buyer library — everything needed to sell digital products.",
};

const Page = () => {
  return <FeaturesView />;
};

export default Page;
