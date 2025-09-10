import { Brand } from "@/lib/brands";

export default function Process({ brand }: { brand: Brand }) {
  const steps = [
    ["Week 1","Audit & Roadmap","Competitor teardown, opportunity map, 30-day win plan."],
    ["Week 2","Implement","Homepage CRO, GBP overhaul, citation cleanup, schema."],
    ["Week 3","Automate","AI assistant tuned to capture/qualify and book leads 24/7."],
    ["Week 4","Scale","Content gaps filled, tests shipped, reporting + next sprint."],
  ];
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-black">How we work (fast)</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map(([week, title, desc], i) => (
            <div key={week as string} className="rounded-lg bg-white p-6 shadow">
              <div className="text-xs font-semibold text-slate-500">{week}</div>
              <h3 className="mt-1 font-bold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 h-1 w-full rounded-full bg-slate-100">
                <div className="h-1 rounded-full" style={{ width: `${(Number(i)+1)*25}%`, background: "var(--brand-secondary)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
