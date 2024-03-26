"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function PasswordInput({ field }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex">
      <Input
        placeholder="Password"
        {...field}
        type={showPassword ? "" : "password"}
        className="rounded-r-none"
      />
      <Button
        size="icon"
        type="button"
        variant="outline"
        className="border-l-0 rounded-l-none"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <HiOutlineEyeOff size={20} />
        ) : (
          <HiOutlineEye size={20} />
        )}
      </Button>
    </div>
  );
}
