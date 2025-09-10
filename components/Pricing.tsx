import { Brand } from "@/lib/brands";

export default function Pricing({ brand }: { brand: Brand }) {
  const tiers = [
    { name: "Kickstart", price: "$997", period: "one-time", bullets: ["Competitor audit & roadmap","Homepage CRO rewrite","GBP overhaul","Quick wins shipped in 30 days"], highlight: false },
    { name: "Growth", price: "$1,497/mo", period: "monthly", bullets: ["All Kickstart + ongoing SEO","Content gap plan & publishing","A/B testing & reporting","AI assistant management"], highlight: true },
    { name: "Scale", price: "$2,497/mo", period: "monthly", bullets: ["Everything in Growth","Multi-location strategy","Advanced CRO & funnels","Custom automations & integrations"], highlight: false },
  ];
  return (
    <section id="pricing" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-black">Pricing Plans</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl p-6 shadow ring-1 ring-black/5 ${tier.highlight ? 'ring-2 ring-sky-400 bg-white' : 'bg-white'}`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">{tier.name}</h3>
                  <div className="mt-2 text-2xl font-black text-slate-900">{tier.price}</div>
                  <div className="text-xs text-slate-500">{tier.period}</div>
                </div>
                {tier.highlight && <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">Popular</span>}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white" style={{ background: brand.primary }}>
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
