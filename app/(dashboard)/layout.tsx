import { BreadcrumbHeader } from "@/components/breadcrumb-header";
import { DesktopSidebar } from "@/components/desktop-sidebar";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col min-h-screen flex-1">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <BreadcrumbHeader />
          <div className="gap-1 flex items-center">
            <ThemeModeToggle />
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
