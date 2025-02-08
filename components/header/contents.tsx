"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavItem from "@/components/header/nav-item";

import React from "react";

const HeaderContent = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className="sm:gap-2">
        <NavItem active={pathname === "/"} href="/" label="About" />
        <NavItem
          active={pathname === "/experiences"}
          href="/experiences"
          label="Experience"
        />
        <NavItem
          active={pathname === "/projects"}
          href="/projects"
          label="Projects"
        />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderContent;
