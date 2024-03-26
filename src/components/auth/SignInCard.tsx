"use client";

import { signInUser } from "@/actions/auth";
import PasswordInput from "@/components/auth/PasswordInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInFormSchema, type SignInForm } from "@/lib/zod-schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function SignInCard() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const signInForm = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = async (credentials: SignInForm) => {
    setIsSubmitting(true);
    const { user, errorMessage } = await signInUser(credentials);
    if (user && !errorMessage) {
      router.push("/");
      setIsSubmitting(false);
      return;
    }
    signInForm.setError("email", {
      message: "Invalid credentials. Please try again.",
    });
    signInForm.setError("password", {
      message: "Invalid credentials. Please try again.",
    });
    setIsSubmitting(false);
  };

  return (
    <Card className="min-w-96">
      <CardHeader className="items-center gap-2 pb-2">
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Sign in to get started with your citizen dashboard!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...signInForm}>
          <form className="flex flex-col gap-4">
            <FormField
              control={signInForm.control}
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
              control={signInForm.control}
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
            <Button
              type="submit"
              className="mt-2"
              disabled={isSubmitting}
              onClick={signInForm.handleSubmit(onSubmit)}
            >
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In
            </Button>
          </form>
        </Form>
        <p className="pt-2 text-xs text-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-900">
            Click here to sign up!
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
