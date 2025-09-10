import { Brand } from "@/lib/brands";

export default function ProofBar({ brand }: { brand: Brand }) {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-4">
        {["Voice Search","Local SEO","CRO","AI Automations"].map((item) => (
          <div key={item} className="rounded border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-600">{item}</div>
        ))}
      </div>
    </section>
  );
}
