"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import NavItem from "@/components/header/nav-item";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

type NavLink = {
  href: string;
  label: string;
};

const items: NavLink[] = [
  {
    href: "/",
    label: "About",
  },
  {
    href: "/experiences",
    label: "Experience",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const DesktopContent = () => {
  const pathname = usePathname();
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="sm:gap-2">
          {items.map((item, i) => (
            <NavItem
              key={`side-nav${item.label}`}
              active={pathname === item.href}
              href={item.href}
              label={item.label}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export const MobileContent = () => {
  const pathname = usePathname();
  return (
    <>
      <Sidebar aria-describedby="side-nav-bar">
        <SidebarHeader className="flex py-4">
          <SidebarTrigger />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={`side-nav${item.label}`}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                    >
                      <Link href={item.href}>
                        <span
                          className={cn(
                            pathname === item.href ? "text-blue-500" : ""
                          )}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>

      <SidebarTrigger />
    </>
  );
};
