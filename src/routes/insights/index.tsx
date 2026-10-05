import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { useContactDialog } from "@/components/ContactDialog";
import { bi, useLang } from "@/lib/i18n";

const URL = "https://sabirvault.com/insights";
export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Corporate Forensics Research | SABIR VAULT" },
      { name: "description", content: "In-depth articles on corporate data forensics, process mining, and sovereign operational risk architecture." },
      { property: "og:title", content: "Insights — Corporate Forensics Research | SABIR VAULT" },
      { property: "og:description", content: "Research and perspectives on corporate data forensics, process mining, and sovereign operational risk." },
      { property: "og:type", content: "website" }, { property: "og:url", content: URL }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const { t } = useLang(); const { open } = useContactDialog();
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <SiteHeader onPilot={() => open({ model: "pilot" })} />
    <main>
      <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg opacity-40"/><div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28"><div className="max-w-4xl animate-rise">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary"><BookOpen size={14} strokeWidth={1.5}/>{t(bi("Research & Perspectives","Аналітика та дослідження"))}</p>
        <h1 className="mt-8 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl" style={{fontFamily:'"Plus Jakarta Sans", Inter, sans-serif'}}>{t(bi("Engineering Truth. ","Інженерія фактів. "))}<span className="text-primary">{t(bi("Operational Clarity.","Операційна чіткість."))}</span></h1>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{t(bi("In-depth articles on corporate data forensics, process mining, and sovereign operational risk architecture.","Глибинні матеріали про корпоративний аудит, процеси та архітектуру суверенних даних."))}</p>
      </div></div></section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Link to="/insights/frankenstein-syndrome" className="group glass glass-hover block rounded-2xl p-8 md:p-10">
          <article>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">{t(bi("Business Operations","Бізнес-операції"))}</span>
              <span className="inline-flex items-center gap-1.5"><Clock size={14} strokeWidth={1.5}/>{t(bi("5 min read","5 хв читання"))}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar size={14} strokeWidth={1.5}/>{t(bi("October 2026","Жовтень 2026"))}</span>
            </div>
            <h2 className="mt-6 max-w-4xl text-2xl font-semibold leading-snug text-foreground md:text-3xl" style={{fontFamily:'"Plus Jakarta Sans", Inter, sans-serif'}}>{t(bi("The Frankenstein Syndrome: Why Company Growth Breaks Operations — and How to Fix Spreadsheet Chaos Without a $20,000 Custom ERP","Синдром Франкенштейна: чому ріст компанії вбиває операційку і як розібрати хаос у таблицях без ERP за $20 000"))}</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">{t(bi("At 20+ employees, standard CRMs break down. Teams spawn dozens of Google Sheets, creating margin leaks, blind manual audits, and operational silos. Here is how to regain control without burning a year building custom software.","Коли штат перевищує 20 людей, CRM тріщить по швах. Відділи плодять десятки Google-таблиць, втрачаючи маржу на стиках. Як розібрати цей хаос без року розробки софту."))}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">{t(bi("Read Article","Читати статтю"))}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></span>
          </article>
        </Link>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
