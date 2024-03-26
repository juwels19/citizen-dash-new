import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(10, { message: "Password must be at least 10 characters" }),
});

export type SignInForm = z.infer<typeof signInFormSchema>;

export const signUpFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(10, { message: "Password must be at least 10 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type SignUpForm = z.infer<typeof signUpFormSchema>;
