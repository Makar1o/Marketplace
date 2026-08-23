import Link from "next/link";
import {
  CreditCardIcon,
  FolderTreeIcon,
  LayoutDashboardIcon,
  LibraryIcon,
  PaletteIcon,
  SearchIcon,
  StarIcon,
  UploadCloudIcon,
  UsersIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHeader } from "../components/page-header";
import { InfoCard } from "../components/info-card";

const features = [
  {
    icon: PaletteIcon,
    title: "Custom storefronts",
    description:
      "Every merchant gets a branded page on their own subdomain, with their logo, their products and their reviews.",
  },
  {
    icon: CreditCardIcon,
    title: "Stripe Connect payments",
    description:
      "Buyers check out with card payments and the money lands in the seller's own Stripe account. The platform fee is split automatically.",
  },
  {
    icon: UsersIcon,
    title: "Multi-tenant by design",
    description:
      "Vendors are isolated from each other. A merchant only ever sees and edits the products that belong to their own tenant.",
  },
  {
    icon: FolderTreeIcon,
    title: "Categories and subcategories",
    description:
      "A two-level catalogue covering business, software, writing and more, so shoppers can narrow down without knowing what to search for.",
  },
  {
    icon: SearchIcon,
    title: "Search and filtering",
    description:
      "Filter by price range, tags and rating, then sort by newest or trending. Filters live in the URL, so any view can be shared.",
  },
  {
    icon: StarIcon,
    title: "Ratings and reviews",
    description:
      "Verified buyers can rate what they bought. Ratings roll up onto the product card and the merchant storefront.",
  },
  {
    icon: LibraryIcon,
    title: "Buyer library",
    description:
      "Everything a customer purchases stays in their library with secure access to the files, so nothing is lost in an email thread.",
  },
  {
    icon: UploadCloudIcon,
    title: "File and image uploads",
    description:
      "Cover images and downloadable content are uploaded straight from the dashboard and served from blob storage.",
  },
  {
    icon: LayoutDashboardIcon,
    title: "Role-based dashboards",
    description:
      "Merchants manage their own catalogue and orders. Super admins get the full picture across every tenant on the platform.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create your account",
    description:
      "Pick a username — that becomes your storefront address on the platform.",
  },
  {
    step: "02",
    title: "Connect Stripe",
    description:
      "Verify your details once. Payouts then go directly to your own Stripe account.",
  },
  {
    step: "03",
    title: "Publish a product",
    description:
      "Add a cover, a price, a category and the file your buyers will download.",
  },
  {
    step: "04",
    title: "Get paid",
    description:
      "Share your link. Every sale settles automatically, minus the flat platform fee.",
  },
];

export const FeaturesView = () => {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Features"
        title="Everything you need to sell digital products."
        description="Storefronts, payments, catalogue, reviews and delivery — already wired together so you can spend your time on the product instead of the plumbing."
      />

      <div className="px-4 lg:px-12 py-12 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature) => (
            <InfoCard key={feature.title} {...feature} />
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-medium">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow flex flex-col gap-3 border rounded-md bg-white p-6 h-full"
              >
                <div className="px-2 py-1 border bg-pink-400 w-fit">
                  <p className="text-sm font-medium">{item.step}</p>
                </div>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-md bg-white p-6 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium">
              Curious what it costs to run?
            </h2>
            <p className="text-muted-foreground">
              One flat fee per sale. No subscription, no listing charges.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="elevated"
            className="bg-black text-white hover:bg-pink-400 hover:text-primary"
          >
            <Link href="/pricing">View pricing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
