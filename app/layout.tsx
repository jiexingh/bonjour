import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/hooks/ThemeContext";
import { ThemeToaster } from "@/components/ThemeToaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonjour",
  description: "科技创造者的数字名片",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("dark:bg-black dark:text-white", inter.className)}>
        <ThemeProvider>
          {children}
          <ThemeToaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}