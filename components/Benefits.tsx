import { Brand } from "@/lib/brands";

export default function Benefits({ brand }: { brand: Brand }) {
  const benefits = [
    ["More Appointments","Boost bookings via voice search terms and CRO-tested CTAs."],
    ["Higher Close Rates","Pre-qualify leads with AI chat funnels."],
    ["Lower CAC","Convert existing traffic before buying more."],
    ["Faster Iteration","Weekly tests on headlines and offers."],
    ["Own the SERP","Map keywords to pages, strengthen citations."],
    ["Automation Ready","AI books and follows up 24/7."],
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-black">Why choose {brand.name}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
