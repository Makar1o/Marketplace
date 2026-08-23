"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { BookOpenIcon, MailIcon, MessageCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { contactSchema, type ContactValues } from "../../schemas";
import { PageHeader } from "../components/page-header";
import { InfoCard } from "../components/info-card";

const subjectOptions: { value: ContactValues["subject"]; label: string }[] = [
  { value: "general", label: "General question" },
  { value: "selling", label: "Selling on Funroad" },
  { value: "billing", label: "Payments and payouts" },
  { value: "bug", label: "Something is broken" },
];

const channels = [
  {
    icon: MailIcon,
    title: "Email",
    description:
      "Write to hello@funroad.test and we usually reply within one working day.",
  },
  {
    icon: MessageCircleIcon,
    title: "Merchant support",
    description:
      "Already selling? Open a ticket from your dashboard and it jumps the queue.",
  },
  {
    icon: BookOpenIcon,
    title: "Docs first",
    description:
      "Most payout and Stripe questions are already answered on the pricing page.",
  },
];

export const ContactView = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactValues>({
    mode: "all",
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "general",
      message: "",
    },
  });

  // TODO: wire this up to a real endpoint (tRPC mutation + email adapter).
  // For now the form only validates and acknowledges the submission locally.
  const onSubmit = (values: ContactValues) => {
    setIsSubmitting(true);
    console.info("[contact] submission", values);
    toast.success("Thanks — we got your message and will be in touch.");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Contact"
        title="Talk to a human."
        description="Questions about selling, payouts or a product you bought — send them over and we will get back to you."
      />

      <div className="px-4 lg:px-12 py-12 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 border rounded-md bg-white p-6 lg:p-10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <h2 className="text-2xl font-medium">Send us a message</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Ada Lovelace" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Email</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="you@example.com" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  name="subject"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">What about?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pick a topic" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {subjectOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="message"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={6}
                          placeholder="Tell us what you need a hand with."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  variant="elevated"
                  disabled={isSubmitting}
                  className="bg-black text-white hover:bg-pink-400 hover:text-primary w-fit"
                >
                  Send message
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex flex-col gap-6">
            {channels.map((channel) => (
              <InfoCard key={channel.title} {...channel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
