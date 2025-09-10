export default function FAQ() {
  const faqs = [
    ["How fast can I expect results?","Most clients see meaningful movement within 30 days."],
    ["Do you replace our current website?","Not necessarily. We usually optimize key pages and add missing content; full rebuild only if needed."],
    ["Can you integrate with our CRM?","Yes—Airtable, Mautic, HubSpot, GoHighLevel, and more via n8n/Zapier or direct APIs."],
    ["What does your reporting look like?","Monthly KPI snapshots + weekly highlights across rankings, GBP actions, conversion rate, and bookings."],
  ];
  return (
    <section id="faq" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-black text-center">FAQ</h2>
        <div className="mx-auto mt-8 max-w-3xl divide-y rounded-2xl border border-slate-200 bg-white">
          {faqs.map(([q,a]) => (
            <details key={q} className="group open:bg-slate-50">
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-slate-900">{q}</summary>
              <div className="px-5 pb-5 text-sm text-slate-600">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
