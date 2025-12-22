import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GothicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
}

export const GothicButton = forwardRef<HTMLButtonElement, GothicButtonProps>(
  ({ className, variant = "outline", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative px-8 py-4 font-display uppercase tracking-[0.25em] text-sm transition-all duration-300 ease-out group overflow-hidden",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variant === "outline" 
            ? "border border-white/30 text-white hover:border-white hover:bg-white hover:text-black" 
            : "bg-white text-black hover:bg-transparent hover:text-white border border-white",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2 justify-center">
          {children}
        </span>
      </button>
    );
  }
);

GothicButton.displayName = "GothicButton";
