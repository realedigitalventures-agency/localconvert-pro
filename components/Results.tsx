export default function Results() {
  const metrics = [
    ["Organic Leads","+30–60%","Lift in qualified form fills and calls"],
    ["GBP Actions","2–4x","Calls, directions, and site visits"],
    ["Conversion Rate","+25–50%","From CRO on key pages"],
    ["Response Time","<1m","AI assistant first-reply"],
  ];
  return (
    <section id="results" className="py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-black">The outcomes we optimize for</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([label,value,note]) => (
            <div key={label as string} className="rounded-xl bg-white p-6 text-center shadow">
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-sm text-slate-700">{label}</div>
              <div className="text-xs text-slate-500">{note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
