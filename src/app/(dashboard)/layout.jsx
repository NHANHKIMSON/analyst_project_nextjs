"use client";
import { AppSidebar } from "@/components/app-sidebar";
import Navigation from "@/components/navbar";
import { SiteHeader } from "@/components/site-header";
import { Card } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
export default function DashbaordLayout({ children }) {
  return (
    <>
    <Navigation/>
      <SidebarProvider
        style={{
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        }}
      >
        <AppSidebar variant="floating" />
        <SidebarInset>
          <Card>
            <SiteHeader />
            {children}
          </Card>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
