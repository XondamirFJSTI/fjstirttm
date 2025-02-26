import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

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
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-xl font-bold text-primary">RTT Markazi</span>
              </a>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    location === link.href
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
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