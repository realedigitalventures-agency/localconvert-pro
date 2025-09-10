"use client";
import { Brand } from "@/lib/brands";

export default function TopNav({ brand }: { brand: Brand }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-900">{brand.logoText}</span>
          <span className="hidden text-sm text-slate-500 sm:block">{brand.tagline}</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          {["Services","Audit","Pricing","Results","FAQ","Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-600 hover:text-slate-900">{item}</a>
          ))}
        </nav>
        <a href="#contact" className="rounded-lg bg-[var(--brand-primary)] px-4 py-2 text-sm font-semibold text-white">
          Free Audit
        </a>
      </div>
      {/* Mobile sticky CTA */}
      <div className="block md:hidden">
        <a href="#contact" className="block bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white">Free Audit →</a>
      </div>
    </header>
  );
}
