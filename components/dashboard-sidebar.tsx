"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Home, Building, User, Settings, LogOut, FileCheck } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function DashboardSidebar({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  const items = [
    {
      href: "/dashboard",
      title: "Dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/policies",
      title: "Policies",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/agencies",
      title: "Agencies",
      icon: <Building className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/documents",
      title: "Documents",
      icon: <FileCheck className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/profile",
      title: "Profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/settings",
      title: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <nav className={cn("flex flex-col gap-2 p-4 h-full border-r", className)} {...props}>
      <div className="py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Agent Portal</h2>
        <div className="space-y-1">
          {items.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href={item.href}>
                {item.icon}
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/login">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </nav>
  )
}

export default DashboardSidebar
