"use client";
import { signOutUser } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useSWRConfig } from "swr";

export default function SignOutButton() {
  const [isSigningOut, setIsSigningOut] = useState(false);
  const { mutate } = useSWRConfig();

  const onClick = async () => {
    setIsSigningOut(true);
    await signOutUser();
    setIsSigningOut(false);
    mutate("/user");
  };

  return (
    <Button onClick={onClick} disabled={isSigningOut}>
      {isSigningOut && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Sign
      Out
    </Button>
  );
}
