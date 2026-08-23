import type { Metadata } from "next";
import { ContactView } from "@/module/marketing/ui/views/contact-view";

export const metadata: Metadata = {
  title: "Contact | funroad",
  description:
    "Questions about selling, payouts or a purchase? Get in touch with the funroad team.",
};

const Page = () => {
  return <ContactView />;
};

export default Page;
