export default function Services() {
  const services = [
    ["Voice Search & Local SEO","Optimize for mobile and voice queries, build pages that match intent, and fix citations."],
    ["Conversion Rate Optimization","Re-write key pages to boost conversions."],
    ["Competitor Intelligence Reports","See where top competitors win and beat them."],
    ["AI Automations","Chat, SMS, and email bots that qualify and schedule leads."],
  ];
  return (
    <section id="services" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-black">Our Services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map(([title, desc]) => (
            <div key={title} className="rounded-xl bg-white p-6 text-left shadow">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
