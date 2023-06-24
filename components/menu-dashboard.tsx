"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

interface MainNavProps {
  items?: NavItem[]
}

export const MenuDashboard = ({ items }: MainNavProps) => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger>
        <Icons.menu className="rotate-0 scale-100 transition-all dark:-rotate-180 dark:scale-100" />
      </SheetTrigger>
      <SheetContent position={"left"} size={"content"}>
        <SheetHeader>
          <SheetTitle>My next app dashboard</SheetTitle>
          <SheetDescription>
            This is just some description about this dunno
          </SheetDescription>

          <nav className="flex flex-col items-center gap-6">
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  full: "menu",
                }),
                pathname === "/dashboard"
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline"
              )}
            >
              Overview
            </Link>
            <Link
              href="/dashboard/customers"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  full: "menu",
                }),
                pathname === "/dashboard/customers"
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline"
              )}
            >
              Customers
            </Link>
            <Link
              href="/dashboard/products"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  full: "menu",
                }),
                pathname === "/dashboard/products"
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline"
              )}
            >
              Products
            </Link>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
