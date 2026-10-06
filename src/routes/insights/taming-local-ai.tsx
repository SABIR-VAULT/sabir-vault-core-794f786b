import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { ArticleBody } from "@/components/ArticleBody";
import { useContactDialog } from "@/components/ContactDialog";
import { tamingLocalAiBody } from "@/lib/insights-taming-local-ai";
import { bi, useLang } from "@/lib/i18n";

const URL = "https://sabirvault.com/insights/taming-local-ai";
const TITLE_EN = "How to Tame Local AI in an Air-Gapped Environment: Why LLMs Cannot Be Trusted Without a Deterministic Skeleton";
const TITLE_UA = "Як приборкати штучний інтелект у закритому контурі: чому мовній моделі не можна вірити без жорсткого математичного каркасу";
const DESC_UA = "Чому публічні моделі не придатні для корпоративного аудиту. Як ми затисли локальну нейромережу на Apple Silicon у рамки 26 детермінованих транзисторів ризику.";
const DESC = "Why public AI models fail in corporate audits. How we constrain local LLMs on Apple Silicon using 26 deterministic behavioral transistors and a strict relational SQLite engine.";

export const Route = createFileRoute("/insights/taming-local-ai")({
  head: () => ({
    meta: [
      { title: "How to Tame Local AI in an Air-Gapped Environment | SABIR VAULT" },
      { name: "description", content: DESC },
      { property: "og:title", content: "How to Tame Local AI in an Air-Gapped Environment" },
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
  // Keep the browser title and description in the active language.
  useEffect(() => {
    document.title = `${lang === "ua" ? TITLE_UA : TITLE_EN} | SABIR VAULT`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", lang === "ua" ? DESC_UA : DESC);
  }, [lang]);
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <SiteHeader onPilot={pilot} />
    <main>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft size={16} strokeWidth={1.5}/>{t(bi("Back to Insights","Назад до аналітики"))}</Link>
        <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-primary">{t(bi("Published by Sabir Dushayev · Lead Systems Architect · October 2026","Автор: Сабір Душаєв · Головний системний архітектор · Жовтень 2026"))}</p>
        <h1 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-5xl" style={{fontFamily:'"Plus Jakarta Sans", Inter, sans-serif'}}>{t(bi(TITLE_EN,TITLE_UA))}</h1>
        <div className="mt-10 border-t border-border pt-4"><ArticleBody source={tamingLocalAiBody[lang]} /></div>
      </article>
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <Link to="/insights/frankenstein-syndrome" className="group glass glass-hover block rounded-2xl p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{t(bi("Related Reading","Читайте також"))}</p>
          <h2 className="mt-4 text-xl font-semibold text-foreground" style={{fontFamily:'"Plus Jakarta Sans", Inter, sans-serif'}}>{t(bi("The Frankenstein Syndrome: Why Company Growth Breaks Operations","Синдром Франкенштейна: чому ріст компанії вбиває операційку"))}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(bi("How to eliminate spreadsheet chaos, margin leaks, and cross-departmental silos without building a $20,000 custom ERP.","Як розібрати хаос у Google-таблицях, зупинити витік маржі та припинити ручні звірки без створення власної ERP за $20 000."))}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">{t(bi("Read Article","Читати статтю"))}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></span>
        </Link>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="glass rounded-2xl border-primary/30 p-8 md:p-12">
          <h2 className="text-2xl font-semibold md:text-3xl" style={{fontFamily:'"Plus Jakarta Sans", Inter, sans-serif'}}>{t(bi("Ready for a Sovereign 3D X-Ray of Your Enterprise?","Готові до суверенного 3D-рентгену вашого бізнесу?"))}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{t(bi("Deploy our air-gapped system on your local hardware in 15 minutes. Uncover operational bottlenecks without cloud risks.","Розгорніть нашу автономну систему на власному комп'ютері за 15 хвилин. Виявляйте приховані аномалії без хмарних ризиків."))}</p>
          <Button onClick={pilot} size="lg" className="mt-8 h-auto min-h-12 whitespace-normal px-5 py-3">{t(bi("Start 14-Day Free Evaluation","Замовити 14-денний безкоштовний тест"))}<ArrowRight/></Button>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
