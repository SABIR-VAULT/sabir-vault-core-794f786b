import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { ArticleBody } from "@/components/ArticleBody";
import { useContactDialog } from "@/components/ContactDialog";
import { frankensteinBody } from "@/lib/insights-frankenstein";
import { bi, useLang } from "@/lib/i18n";

const URL = "https://sabirvault.com/insights/frankenstein-syndrome";
const TITLE_EN = "The Frankenstein Syndrome: Why Company Growth Breaks Operations — and How to Fix Spreadsheet Chaos Without a $20,000 Custom ERP";
const DESC = "At 20+ employees, standard CRMs break down. Teams spawn dozens of Google Sheets, creating margin leaks, blind manual audits, and operational silos. How to regain control without a custom ERP.";

export const Route = createFileRoute("/insights/frankenstein-syndrome")({
  head: () => ({
    meta: [
      { title: "The Frankenstein Syndrome: Spreadsheet Chaos Without a $20K ERP | SABIR VAULT" },
      { name: "description", content: DESC },
      { property: "og:title", content: "The Frankenstein Syndrome: Why Company Growth Breaks Operations" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" }, { property: "og:url", content: URL }, { name: "twitter:card", content: "summary_large_image" },
      { property: "article:published_time", content: "2026-10-01" }, { property: "article:author", content: "Sabir Dushayev" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "Article", headline: TITLE_EN, description: DESC,
      inLanguage: ["en", "uk"], datePublished: "2026-10-01", dateModified: "2026-10-01", mainEntityOfPage: URL,
      author: { "@type": "Person", "@id": "https://sabirvault.com/#founder", name: "Sabir Dushayev", jobTitle: "Lead Systems Architect" },
      publisher: { "@type": "Organization", "@id": "https://sabirvault.com/#organization", name: "SABIR VAULT" },
    }) }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const { lang, t } = useLang(); const { open } = useContactDialog();
  const pilot = () => open({ model: "pilot" });
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <SiteHeader onPilot={pilot} />
    <main>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft size={16} strokeWidth={1.5}/>{t(bi("Back to Insights","Назад до аналітики"))}</Link>
        <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-primary">{t(bi("Published by Sabir Dushayev · Lead Systems Architect · October 2026","Автор: Сабір Душаєв · Головний системний архітектор · Жовтень 2026"))}</p>
        <h1 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-5xl" style={{fontFamily:'"Plus Jakarta Sans", Inter, sans-serif'}}>{t(bi(TITLE_EN,"Синдром Франкенштейна: чому ріст компанії вбиває операційку і як розібрати хаос у таблицях без ERP за $20 000"))}</h1>
        <div className="mt-10 border-t border-border pt-4"><ArticleBody source={frankensteinBody[lang]} /></div>
      </article>
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="glass rounded-2xl border-primary/30 p-8 md:p-12">
          <h2 className="text-2xl font-semibold md:text-3xl" style={{fontFamily:'"Plus Jakarta Sans", Inter, sans-serif'}}>{t(bi("Ready for a 3D X-Ray of Your Operations?","Готові отримати 3D-рентген ваших процесів?"))}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{t(bi("Discover where documents and margins are trapped across your current sheets and CRM in 48 hours.","Дізнайтеся, де саме губляться документи та маржа між вашими таблицями і CRM за 48 годин."))}</p>
          <Button onClick={pilot} size="lg" className="mt-8 h-auto min-h-12 whitespace-normal px-5 py-3">{t(bi("Start 14-Day Free Evaluation","Замовити 14-денний безкоштовний тест"))}<ArrowRight/></Button>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
