import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/community", label: "Coven" },
    { href: "/faq", label: "Truths" },
    { href: "/socials", label: "Links" },
    { href: "/apply", label: "Join" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <span className="font-display text-2xl tracking-[0.2em] text-white cursor-pointer hover:opacity-80 transition-opacity">
            NOCTURNE
          </span>
        </Link>

        <div className="hidden md:flex gap-12">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className="relative group cursor-pointer py-2">
                <span
                  className={cn(
                    "font-display text-sm tracking-[0.25em] uppercase transition-colors duration-300",
                    location === link.href ? "text-white" : "text-white/50 group-hover:text-white"
                  )}
                >
                  {link.label}
                </span>
                {location === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-white"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile menu button could go here */}
        <div className="md:hidden text-white/50 text-xs tracking-widest uppercase">
          Menu
        </div>
      </div>
    </nav>
  );
}
