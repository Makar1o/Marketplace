import { z } from "zod";

export const contactSubjects = [
  "general",
  "selling",
  "billing",
  "bug",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please tell us your name")
    .max(80, "That name is a little too long"),
  email: z.string().email("Enter a valid email address"),
  subject: z.enum(contactSubjects, {
    message: "Pick what this is about",
  }),
  message: z
    .string()
    .min(20, "Please give us at least 20 characters to work with")
    .max(2000, "Please keep it under 2000 characters"),
});

export type ContactValues = z.infer<typeof contactSchema>;
