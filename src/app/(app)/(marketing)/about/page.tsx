import type { Metadata } from "next";
import { AboutView } from "@/module/marketing/ui/views/about-view";

export const metadata: Metadata = {
  title: "About | funroad",
  description:
    "Funroad is a multi-vendor marketplace where creators sell digital products from their own branded storefront.",
};

const Page = () => {
  return <AboutView />;
};

export default Page;
