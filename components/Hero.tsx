import { Brand } from "@/lib/brands";

export default function Hero({ brand }: { brand: Brand }) {
  return (
    <section className={`bg-gradient-to-br ${brand.gradientFrom} ${brand.gradientTo} py-20 text-white`}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-black sm:text-5xl">{brand.name}: {brand.tagline}</h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">
            We combine Local SEO, voice search optimization, CRO, and AI automations to convert more local traffic into booked appointments and sales.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#audit" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-900 shadow">Start Free Audit</a>
            <a href="#pricing" className="rounded-lg border border-white/70 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">See Plans</a>
          </div>
        </div>

        <div className="rounded-xl bg-white/90 p-6 text-slate-800 shadow">
          <h3 className="mb-2 text-lg font-bold">In 30 days you get:</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>Homepage CRO makeover</li>
            <li>Google Business Profile overhaul</li>
            <li>Competitor gap analysis</li>
            <li>AI lead capture assistant</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
