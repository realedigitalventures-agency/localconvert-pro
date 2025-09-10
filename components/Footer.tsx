import { Brand } from "@/lib/brands";

export default function Footer({ brand }: { brand: Brand }) {
  return (
    <footer className="mt-10 border-top border-black/5 bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg text-white" style={{ background: brand.primary }}>
              <span className="text-xs font-bold">LC</span>
            </div>
            <div className="text-sm font-semibold text-slate-900">{brand.logoText}</div>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            {brand.tagline}. We help local businesses turn clicks into clients with SEO, CRO, and AI.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Company</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li><a href="#services">Services</a></li>
            <li><a href="#audit">Audit</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#results">Results</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Legal</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Data Processing</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Contact</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li><a href={`mailto:${brand.ctaEmail}`}>{brand.ctaEmail}</a></li>
            <li><a href={`tel:${brand.ctaPhone.replace(/[^\d+]/g, '')}`}>{brand.ctaPhone}</a></li>
            <li>Phoenix, AZ</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-slate-500">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
