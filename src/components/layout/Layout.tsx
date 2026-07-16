import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-surface text-on-surface">
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute bottom-[-20%] right-[-10%] h-[60vw] w-[60vw] rounded-full bg-gray-400/20 blur-[120px] mix-blend-multiply" />
      </div>

      <Header />
      <main className="relative z-10 flex-1 pb-lg pt-4 sm:pt-6">
        <div className="flex flex-col gap-lg">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
