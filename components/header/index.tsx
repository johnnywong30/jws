import React from "react";
import { DesktopContent, MobileContent } from "@/components/header/contents";
import ThemeToggle from "@/components/theme/toggle";
import Image from "next/image";
import JW from "@/public/jw.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-row py-4 px-4 gap-4 sm:px-8 w-screen">
      <div className="hidden sm:flex justify-end w-full items-center gap-4">
        <DesktopContent />
        <ThemeToggle />
      </div>
      <div className="flex flex-row sm:hidden justify-between w-full">
        <MobileContent />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
