import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LocalConvert Pro — Turn Local Traffic into Paying Customers",
  description:
    "Results-driven Local SEO, CRO, voice search optimization, and AI automations to convert local traffic into booked appointments and sales.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-800">{children}</body>
    </html>
  );
}
