import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { MenuDashboard } from "@/components/menu-dashboard"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserNav } from "@/components/user/user-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <DashboardNav className="mx-6 hidden sm:flex md:flex" />
          <div className="sm:hidden">
            <MenuDashboard />
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
    </>
  )
}
