"use client";
import { Brand } from "@/lib/brands";

export default function Contact({ brand }: { brand: Brand }) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(fd as any)),
    });
    (e.currentTarget as HTMLFormElement).reset();
    alert("Thanks! We’ll reply shortly.");
  }

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow">
        <h2 className="text-2xl font-black text-center">Get in Touch</h2>
        <form className="mt-4 grid gap-3" onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" className="rounded border border-slate-300 px-3 py-2 text-sm" />
          <input name="company" placeholder="Company" className="rounded border border-slate-300 px-3 py-2 text-sm" />
          <input name="email" placeholder="Email" type="email" required className="rounded border border-slate-300 px-3 py-2 text-sm" />
          <textarea name="message" placeholder="What do you want to improve? (Local SEO, CRO, AI automations…)" rows={4} className="rounded border border-slate-300 px-3 py-2 text-sm" />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-slate-500">By submitting, you agree to our privacy policy.</div>
            <button className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white" style={{ background: brand.primary }}>
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
          <a className="rounded-xl border border-slate-200 bg-white p-3 text-center" href={`tel:${brand.ctaPhone.replace(/[^\d+]/g, "")}`}>Call: {brand.ctaPhone}</a>
          <a className="rounded-xl border border-slate-200 bg-white p-3 text-center" href={`mailto:${brand.ctaEmail}`}>Email: {brand.ctaEmail}</a>
          <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">HQ: Phoenix, AZ</div>
        </div>
      </div>
    </section>
  );
}
