import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Asosiy" },
    { href: "/about", label: "Biz haqimizda" },
    { href: "/staff", label: "Xodimlar" },
    { href: "/news", label: "Yangiliklar" },
    { href: "/courses", label: "O'quv materiallar" },
    { href: "/videos", label: "Video darslar" },
    { href: "/tests", label: "Online testlar" },
    { href: "/register", label: "Ro'yxatdan o'tish" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center gap-2">
                <Building2 className="h-8 w-8 text-primary" />
                <div>
                  <span className="text-lg font-bold text-primary block leading-tight">FJSTI</span>
                  <span className="text-xs text-gray-600 block">Raqamli ta'lim markazi</span>
                </div>
              </a>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location === link.href
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}