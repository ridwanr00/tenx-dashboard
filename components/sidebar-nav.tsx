"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/users", label: "Users" },
]

export default function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="space-y-1">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          pathname.startsWith(item.href + "/")

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "block rounded px-3 py-2 text-sm transition",
              isActive
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
