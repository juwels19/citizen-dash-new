"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignUpForm, signUpFormSchema } from "@/lib/zod-schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/auth/PasswordInput";
import { Button } from "@/components/ui/button";
import { signUpUser } from "@/actions/auth";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function SignUpCard() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const signUpForm = useForm<SignUpForm>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = async (values: SignUpForm) => {
    setIsSubmitting(true);
    const { user, errorMessage } = await signUpUser(values);
    if (user && !errorMessage) {
      router.push("/");
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(false);
  };

  return (
    <Card className=" min-w-96">
      <CardHeader className="items-center gap-2 pb-2">
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Let&apos;s create your account!</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...signUpForm}>
          <form className="flex flex-col gap-4">
            <FormField
              control={signUpForm.control}
              name="name"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} type="text" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={signUpForm.control}
              name="email"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signUpForm.control}
              name="password"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signUpForm.control}
              name="confirmPassword"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-2"
              onClick={signUpForm.handleSubmit(onSubmit)}
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign Up
            </Button>
          </form>
        </Form>
        <p className="pt-2 text-xs text-center">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-900">
            Click here to sign in!
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
