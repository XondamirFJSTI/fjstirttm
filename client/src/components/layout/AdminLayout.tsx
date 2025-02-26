import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Video,
  TestTube,
  FileText,
  LogOut
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Xodimlar", href: "/admin/staff", icon: Users },
  { name: "Yangiliklar", href: "/admin/news", icon: FileText },
  { name: "O'quv materiallar", href: "/admin/courses", icon: BookOpen },
  { name: "Video darslar", href: "/admin/videos", icon: Video },
  { name: "Testlar", href: "/admin/tests", icon: TestTube },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-sm">
        <div className="flex h-16 items-center justify-center border-b">
          <span className="text-lg font-bold text-primary">Admin Panel</span>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    location === item.href
                      ? "bg-primary/5 text-primary"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </a>
              </Link>
            );
          })}
          <button className="mt-4 flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
            <LogOut className="h-5 w-5" />
            Chiqish
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
