import Link from "next/link";
import { CheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { PLATFORM_FEE_PERCENTAGE } from "@/constants";

import { PageHeader } from "../components/page-header";

const plans = [
  {
    name: "Buyer",
    price: "Free",
    note: "You only pay for what you buy",
    description: "Browse the marketplace and keep every purchase forever.",
    cta: { label: "Browse products", href: "/" },
    featured: false,
    features: [
      "Unlimited purchases",
      "Permanent access in your library",
      "Re-download files any time",
      "Leave ratings and reviews",
    ],
  },
  {
    name: "Merchant",
    price: `${PLATFORM_FEE_PERCENTAGE}%`,
    note: "per sale — nothing else",
    description:
      "Open a storefront, list your catalogue and get paid through Stripe.",
    cta: { label: "Start selling", href: "/sign-up" },
    featured: true,
    features: [
      "Your own branded subdomain",
      "Unlimited products and categories",
      "Stripe Connect payouts to your account",
      "Orders, reviews and customer library",
      "No monthly fee, no listing fee",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "Let's talk",
    description:
      "For teams running a large catalogue or needing a tailored arrangement.",
    cta: { label: "Contact us", href: "/contact" },
    featured: false,
    features: [
      "Negotiated platform fee",
      "Multiple team members per tenant",
      "Priority support",
      "Migration help for existing catalogues",
    ],
  },
];

const faqs = [
  {
    question: "Are there any monthly charges?",
    answer:
      "No. Opening a storefront and keeping it online costs nothing. The platform only earns when you make a sale.",
  },
  {
    question: `What exactly is the ${PLATFORM_FEE_PERCENTAGE}% fee?`,
    answer: `It is the platform's share of each completed order, taken automatically at checkout. The remainder is transferred to your connected Stripe account. Stripe's own card processing fees are charged separately by Stripe.`,
  },
  {
    question: "When do I get paid?",
    answer:
      "Funds go straight to your Stripe account as part of the checkout, so payouts follow whatever schedule you have configured in Stripe.",
  },
  {
    question: "Do I need my own Stripe account?",
    answer:
      "Yes. During sign-up a Stripe Connect account is created for you, and you complete the verification steps before your products can be sold.",
  },
  {
    question: "Can I leave and take my customers with me?",
    answer:
      "Your storefront, your customers, your Stripe account. There is no lock-in and nothing to cancel — stop listing and the fee stops too.",
  },
];

export const PricingView = () => {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Pricing"
        title="Free to open. A flat cut when you sell."
        description={`No subscriptions and no listing fees. The platform takes ${PLATFORM_FEE_PERCENTAGE}% of each order and the rest goes straight to you.`}
      />

      <div className="px-4 lg:px-12 py-12 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col gap-6 border rounded-md bg-white p-6 lg:p-8 h-full transition-shadow hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                plan.featured && "border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-medium">{plan.name}</h2>
                {plan.featured && (
                  <div className="px-2 py-1 border bg-pink-400 w-fit">
                    <p className="text-sm font-medium">Most popular</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <p className="text-5xl font-semibold">{plan.price}</p>
                <p className="text-muted-foreground">{plan.note}</p>
              </div>

              <p className="text-muted-foreground">{plan.description}</p>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckIcon className="size-4 mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                variant="elevated"
                className={cn(
                  "w-full",
                  plan.featured &&
                    "bg-black text-white hover:bg-pink-400 hover:text-primary"
                )}
              >
                <Link href={plan.cta.href}>{plan.cta.label}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-medium">Questions</h2>
          <div className="border rounded-md bg-white px-6 lg:px-8">
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
