"use client";

import { usePathname } from "next/navigation";
import { useUIStore } from "@/lib/store/ui-store";
import { getPageTitle } from "@/lib/page-title";
import SidebarNav from "@/components/sidebar-nav";
import ThemeToggle from "@/components/theme-toggle";
import LogoutButton from "@/components/logout-button";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  const { sidebarOpen, toggleSidebar } = useUIStore();

  return (
    <div className="flex min-h-screen">
      {sidebarOpen && (
        <aside className="w-64 bg-gray-900 text-white p-4 space-y-6">
          <h2 className="font-bold text-lg">Admin Panel</h2>
          <SidebarNav />
        </aside>
      )}

      <main className="flex-1 p-6 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{pageTitle}</h1>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LogoutButton />
            <button onClick={toggleSidebar} className="text-sm underline">
              Toggle Sidebar
            </button>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
