import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PanelProps {
  children: ReactNode;
  className?: string;
}

export default function Panel({ children, className = "" }: PanelProps) {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6">
      <div
        className={cn(
          "shell-shadow relative overflow-hidden rounded-[2.5rem] bg-white p-6 md:p-10",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
