import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import AuditWidget from "@/components/AuditWidget";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BRANDS } from "@/lib/brands";

export default function Page() {
  const brand = BRANDS.localconvert;
  return (
    <div>
      <TopNav brand={brand} />
      <Hero brand={brand} />
      <ProofBar brand={brand} />
      <Benefits brand={brand} />
      <Services />
      <AuditWidget brand={brand} />
      <Process brand={brand} />
      <Results />
      <Pricing brand={brand} />
      <Testimonials />
      <FAQ />
      <Contact brand={brand} />
      <Footer brand={brand} />

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: brand.name,
            url: `https://${brand.domain}`,
            telephone: brand.ctaPhone,
            email: brand.ctaEmail,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Phoenix",
              addressRegion: "AZ",
              addressCountry: "US",
            },
            areaServed: ["United States", "Arizona", "Florida", "Texas"],
            makesOffer: [
              { "@type": "Offer", name: "Local SEO & Voice Search Optimization" },
              { "@type": "Offer", name: "Conversion Rate Optimization (CRO)" },
              { "@type": "Offer", name: "Competitor Intelligence Reports" },
              { "@type": "Offer", name: "AI Automations (Sales/Support)" },
            ],
          }),
        }}
      />
    </div>
  );
}
