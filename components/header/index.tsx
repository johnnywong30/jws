import React from "react";
import { DesktopContent, MobileContent } from "@/components/header/contents";
import ThemeToggle from "@/components/theme/toggle";

const Header = () => {
  return (
    <header className="flex flex-row py-2 px-4 gap-4 sm:px-8 w-screen sticky top-0 z-50 bg-background scrollbar-none">
      <div className="hidden sm:flex flex-row w-full items-center gap-4 justify-end">
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
