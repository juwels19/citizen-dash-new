"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@ui/button";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

export default function ThemeSwitchButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isLightMode = resolvedTheme === "light";

  const toggleTheme = (): void => {
    if (isLightMode) {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      aria-label={isLightMode ? "Toggle to Dark Mode" : "Toggle to Light Mode"}
    >
      {isLightMode ? <HiOutlineMoon size={32} /> : <HiOutlineSun size={32} />}
    </Button>
  );
}
