import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import MainLayout from "@/components/common/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Citizen Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <MainLayout>{children}</MainLayout>
          {/* {children} */}
        </ThemeProvider>
      </body>
    </html>
  );
}
