import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Johnny Wong",
  description: "Johnny Wong is a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col gap-2 scrollbar-none`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider className="flex flex-col gap-1 justify-between">
            <Header />
            {children}
            <Analytics />
            <Footer />
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
