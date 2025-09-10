"use client";
import { useState } from "react";
import { Brand } from "@/lib/brands";

export default function AuditWidget({ brand }: { brand: Brand }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ email: "", company: "", website: "", city: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, source: "audit-widget" }),
    });
    setSubmitted(true);
  }

  return (
    <section id="audit" className="py-16">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 shadow">
        <h3 className="text-2xl font-black">Free Competitor Audit</h3>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e)=>setForm({...form,email:e.target.value})}
              required
              className="rounded border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="Company"
              value={form.company}
              onChange={(e)=>setForm({...form,company:e.target.value})}
              required
              className="rounded border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              type="url"
              placeholder="Website URL"
              value={form.website}
              onChange={(e)=>setForm({...form,website:e.target.value})}
              required
              className="rounded border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="City / Service Area"
              value={form.city}
              onChange={(e)=>setForm({...form,city:e.target.value})}
              required
              className="rounded border border-slate-300 px-3 py-2 text-sm"
            />
            <button className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Get My Free Audit</button>
          </form>
        ) : (
          <p className="mt-4 text-green-600">Thanks! We’ll email your audit soon.</p>
        )}
      </div>
    </section>
  );
}
