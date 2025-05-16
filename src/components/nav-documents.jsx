"use client"

import { IconDots, IconFolder, IconShare3, IconTrash } from "@tabler/icons-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavDocuments({
items
}) {
  const { isMobile } = useSidebar();
  const path = usePathname();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden mt-12">
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              className={path === item.url ? 'border bg-sidebar-accent border-primary' : ''}
              asChild
            >
              <Link href={item.url} className="flex items-center gap-2">
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
