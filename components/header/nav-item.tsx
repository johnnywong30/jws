"use client";

import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type NavItemType = {
  href: string;
  active: boolean;
  label: string;
};

const NavItem: React.FC<NavItemType> = ({ href, active, label }) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle())}
          active={active}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavItem;
