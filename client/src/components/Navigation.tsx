import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/home", label: "Home" },
    { href: "/community", label: "Community" },
    { href: "/faq", label: "FAQ" },
    { href: "/socials", label: "Support" },
    { href: "/home", label: "Join Us" },
    { href: "/apply", label: "Apply" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-sm pt-6 pb-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center flex-wrap gap-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <button
              className={cn(
                "px-6 py-2 border border-white/30 font-display text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black",
                location === link.href ? "bg-white text-black" : "text-white/70"
              )}
            >
              + {link.label}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
