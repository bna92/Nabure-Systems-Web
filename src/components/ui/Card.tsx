import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  hover?: boolean;
  innerBg?: string;
}

export default function Card({
  children,
  className = "",
  innerClassName = "",
  hover = false,
  innerBg = "bg-white",
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2rem] bg-gradient-to-br from-gray-200 via-transparent to-gray-200 p-px card-soft-shadow h-full transition-shadow duration-300",
        hover && "card-soft-shadow-hover",
        className,
      )}
    >
      <div className={cn(innerBg, "h-full rounded-[calc(2rem-1px)]", innerClassName)}>
        {children}
      </div>
    </div>
  );
}
