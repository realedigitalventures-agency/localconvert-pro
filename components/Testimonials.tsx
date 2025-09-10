export default function Testimonials() {
  const testimonials = [
    ["Royalty Fence","Inbound leads up 52% in 8 weeks after CRO + GBP work."],
    ["FT Custom Spaces","Quotes rose 41% from new keyword traffic."],
    ["Texas Indoor Billboards","AI assistant books demos 24/7; sales cycle shortened."],
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-black">Client love</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map(([name,quote]) => (
            <div key={name} className="rounded-lg bg-white p-6 shadow">
              <p className="text-sm">“{quote}”</p>
              <div className="mt-3 font-semibold">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
