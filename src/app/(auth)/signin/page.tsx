"use client";
import SignInCard from "@/components/auth/SignInCard";
import { createSupabaseBrowserClient } from "@/db/supabase/client";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function SignIn() {
  // const supabase = createSupabaseBrowserClient();

  return (
    <div>
      <SignInCard />
    </div>
    // <Auth
    //   supabaseClient={supabase}
    //   appearance={{ theme: ThemeSupa }}
    //   providers={[]}
    // />
  );
}
