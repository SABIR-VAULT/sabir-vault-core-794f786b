import { Fragment } from "react";
import { AlertTriangle, ArrowDown, ArrowLeft, ArrowRight, Database, FileText, ScanBarcode, ShieldCheck } from "lucide-react";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { ArticleBody, inline } from "@/components/ArticleBody";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { useContactDialog } from "@/components/ContactDialog";
import { bi, useLang } from "@/lib/i18n";
import { barcodeScannerBody } from "@/lib/insights-barcode-scanner";

const icons = [FileText, ScanBarcode, Database, ShieldCheck];
const related = [
  {
    to: "/insights/claude-erp-retail-illusion",
    title: bi('The "Claude Agent for ERP" Illusion in Retail', '«ШІ-агент на Claude для 1С» у ритейлі'),
    text: bi("Why cloud LLMs break on 5,000+ SKUs and how Deterministic Shield + Local VLM recovers frozen capital.", "Чому хмарні моделі ламаються на тисячах SKU і як Shield + Local VLM повертають заморожені гроші."),
  },
  {
    to: "/insights/frankenstein-syndrome",
    title: bi("The Frankenstein Syndrome: Why Growth Breaks Operations", "Синдром Франкенштейна: чому ріст вбиває операційку"),
    text: bi("How to fix spreadsheet chaos and cross-departmental margin leaks without a $20,000 custom ERP.", "Як розібрати хаос у таблицях і зупинити витік маржі без власної ERP за $20 000."),
  },
] as const;

function WarehouseFlow() {
  const { lang, t } = useLang();
  return <figure aria-label={t(bi("Warehouse cross-verification architecture", "Архітектура складської форензик-звірки"))} className="mt-8">
    <ol className="space-y-0">
      {barcodeScannerBody[lang].steps.map((step, index) => {
        const Icon = icons[index];
        return <Fragment key={step.label}>
          {index > 0 && <li aria-hidden="true" className="flex justify-center py-3 text-primary"><ArrowDown size={20} strokeWidth={1.5}/></li>}
          <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 md:p-6">
            {Icon && <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary"><Icon size={20} strokeWidth={1.5}/></span>}
            <div className="min-w-0"><p className="font-display text-sm font-semibold text-foreground">{step.label}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.sub}</p></div>
          </li>
        </Fragment>;
      })}
    </ol>
  </figure>;
}

export default function BarcodeScannerPage() {
  const { lang, t } = useLang();
  const { open } = useContactDialog();
  const pilot = () => open({ model: "pilot" });
  const body = barcodeScannerBody[lang];
  return <div className="warehouse-article min-h-screen bg-background text-foreground">
    <SiteHeader onPilot={pilot}/>
    <main>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft size={16} strokeWidth={1.5}/>{t(bi("Back to Insights", "Назад до аналітики"))}</Link>
        <p className="mt-10 text-xs font-semibold uppercase leading-relaxed text-primary">{t(bi("Published by Sabir Dushayev · Lead Systems Architect · November 2026", "Автор: Сабір Душаєв · Головний системний архітектор · Листопад 2026"))}</p>
        <h1 className="mt-5 font-display text-3xl font-semibold leading-tight md:text-5xl">{t(bi("Why a $500 Barcode Scanner Won't Fix Warehouse Shrinkage", "Чому ТЗД за 20 000 грн не зупинить недостачі на складі"))}</h1>
        <div className="mt-10 border-t border-border pt-4">
          <ArticleBody source={body.pre}/>
          <WarehouseFlow/>
          <ArticleBody source={body.mid}/>
          <aside aria-label={body.alertTitle} className="mt-8 overflow-hidden rounded-2xl border border-destructive/40 bg-card font-mono">
            <div className="flex items-start gap-3 border-b border-border px-5 py-4">
              <AlertTriangle size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-destructive"/>
              <h2 className="text-sm font-semibold leading-relaxed text-foreground">{body.alertTitle}</h2>
              <span aria-hidden="true" className="ml-auto mt-1.5 size-2 shrink-0 rounded-full bg-destructive motion-safe:animate-pulse"/>
            </div>
            <ol className="list-decimal space-y-4 py-5 pl-10 pr-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
              {body.alert.map(item => <li key={item}>{inline(item)}</li>)}
            </ol>
          </aside>
          <ArticleBody source={body.post}/>
        </div>
      </article>
      <section aria-label={t(bi("Related Reading", "Читайте також"))} className="mx-auto grid max-w-3xl gap-6 px-6 pb-12 md:grid-cols-2">
        {related.map(item => <Link key={item.to} to={item.to} className="group glass glass-hover block rounded-2xl p-7">
          <p className="text-xs font-semibold uppercase text-primary">{t(bi("Related Reading", "Читайте також"))}</p>
          <h2 className="mt-4 font-display text-xl font-semibold text-foreground">{t(item.title)}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(item.text)}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">{t(bi("Read Article", "Читати статтю"))}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></span>
        </Link>)}
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="glass rounded-2xl border-primary/30 p-8 md:p-12">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">{t(bi("Stop Paying for Inventory Shrinkage Out of Pocket.", "Припиніть покривати складські недостачі з власної кишені."))}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t(bi("Run an air-gapped audit of your invoices, stocktakes, and warehouse logs in 48 hours before buying expensive hardware.", "Проведіть автономний аудит накладних, інвентаризацій і логів складу за 48 годин ще до покупки дорогого обладнання."))}</p>
          <Button onClick={pilot} size="lg" className="mt-8 h-auto min-h-12 whitespace-normal px-5 py-3">{t(bi("Start 14-Day Free Evaluation", "Замовити 14-денний безкоштовний тест"))}<ArrowRight className="shrink-0"/></Button>
        </div>
      </section>
    </main>
    <SiteFooter/>
  </div>;
}