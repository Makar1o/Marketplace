import Link from "next/link";
import { HeartIcon, ShieldCheckIcon, StoreIcon, ZapIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHeader } from "../components/page-header";
import { InfoCard } from "../components/info-card";

const values = [
  {
    icon: StoreIcon,
    title: "Creators own the storefront",
    description:
      "Every seller gets their own subdomain and branding. Funroad stays out of the way instead of putting its logo on your work.",
  },
  {
    icon: ZapIcon,
    title: "Ship in an afternoon",
    description:
      "No contracts, no onboarding calls. Create an account, connect Stripe, upload a file and you are open for business.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Payouts you can trust",
    description:
      "Money moves through Stripe Connect straight into your account. We never sit on your balance waiting to release it.",
  },
  {
    icon: HeartIcon,
    title: "Built for small catalogues",
    description:
      "One ebook or two hundred templates — the dashboard is designed for people who sell their own work, not warehouses.",
  },
];

const stats = [
  { value: "10%", label: "Flat platform fee" },
  { value: "0$", label: "To open a store" },
  { value: "60+", label: "Categories to list in" },
  { value: "24h", label: "Typical payout window" },
];

export const AboutView = () => {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="About us"
        title="A marketplace that gets out of the creator's way."
        description="Funroad is a multi-vendor storefront for digital products. Writers, designers and developers sell directly to their audience and keep the relationship."
      />

      <div className="px-4 lg:px-12 py-12 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 border rounded-md bg-white p-6 lg:p-10 flex flex-col gap-4">
            <h2 className="text-2xl font-medium">Why we built it</h2>
            <p className="text-muted-foreground">
              Most storefront tools force you to choose between a locked-down
              marketplace that owns your customers and a blank page that takes a
              weekend to configure. Neither is a good deal when you just want to
              sell the thing you made.
            </p>
            <p className="text-muted-foreground">
              Funroad sits in the middle. You get a hosted storefront on your
              own subdomain, a product catalogue with categories and search, a
              review system and a purchase library for your buyers — all of it
              working from the moment you sign up.
            </p>
            <p className="text-muted-foreground">
              The platform takes a single flat cut on each sale. There is no
              monthly bill, no listing fee and nothing to cancel if you stop
              selling for a while.
            </p>
          </div>

          <div className="border rounded-md bg-white p-6 lg:p-10 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <p className="text-4xl font-semibold">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-medium">What we care about</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <InfoCard key={value.title} {...value} />
            ))}
          </div>
        </div>

        <div className="border rounded-md bg-white p-6 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium">Ready to open your store?</h2>
            <p className="text-muted-foreground">
              It takes a Stripe account and about five minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              variant="elevated"
              className="bg-black text-white hover:bg-pink-400 hover:text-primary"
            >
              <Link prefetch href="/sign-up">
                Start selling
              </Link>
            </Button>
            <Button asChild size="lg" variant="elevated">
              <Link href="/features">See the features</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
