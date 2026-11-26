import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { type ReactNode } from "react";
import { AlertTriangle, ArrowDown, ArrowLeft, ArrowRight, Cpu, Database, FileText, Layers, MonitorDot, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { ArticleBody, inline } from "@/components/ArticleBody";
import { useContactDialog } from "@/components/ContactDialog";
import { claudeErpBody } from "@/lib/insights-claude-erp";
import { bi, useLang, type Bi } from "@/lib/i18n";

const URL = "https://sabirvault.com/insights/claude-erp-retail-illusion";
const H1 = bi("The \"Claude Agent for ERP\" Illusion: Why Connecting Cloud LLMs to 1C Breaks Retail Math — and How to Actually Recover Trapped Cash", "«ШІ-агент на Claude для 1С»: чому це небезпечна ілюзія і як насправді витягнути гроші зі звітів ритейлу");
const TITLE = bi("The \"Claude Agent for ERP\" Illusion in Retail | SABIR VAULT Insights", "ШІ-агент на Claude для 1С у ритейлі: ризики та альтернатива | SABIR VAULT");
const DESC = bi("Why plugging cloud LLMs like Claude into 1C or retail ERPs causes math hallucinations and margin leaks. Discover the Deterministic Shield + Air-Gapped Local AI architecture.", "Чому підключення хмарного Claude до 1С призводить до помилок у математиці та витоку комерційної таємниці. Як On-Premise Shield + Local VLM знаходить заморожені гроші.");
const F = { fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' };


function Node({ icon, label, sub }: { icon: ReactNode; label: string; sub: string }) {
  return <div className="flex flex-1 items-start gap-3 rounded-xl border border-border bg-card p-4">
    <span className="mt-0.5 text-primary">{icon}</span>
    <div><p className="text-sm font-semibold text-foreground">{label}</p><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{sub}</p></div>
  </div>;
}
function Step({ title, children }: { title: string; children: ReactNode }) {
  return <div><p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-primary">{title}</p><div className="flex flex-col gap-3 sm:flex-row">{children}</div></div>;
}
const Arrow = () => <div className="flex justify-center py-2 text-primary"><ArrowDown size={18} strokeWidth={1.5}/></div>;

function Diagram() {
  const { t } = useLang(); const s = 18;
  return <figure className="mt-8 rounded-2xl border border-border bg-background/60 p-5 md:p-6">
    <Step title={t(bi("Data Sources","Джерела даних"))}>
      <Node icon={<Database size={s} strokeWidth={1.5}/>} label={t(bi("ERP / 1C Exports","Вивантаження 1С"))} sub={t(bi("CSV / API: Sales, Stock, POS Receipts","CSV / API: продажі, залишки, чеки"))}/>
      <Node icon={<FileText size={s} strokeWidth={1.5}/>} label={t(bi("Primary Paperwork","Паперова первинка"))} sub={t(bi("Factory Invoices, Waybills, CMR","Інвойси фабрик, ТТН, CMR"))}/>
    </Step><Arrow/>
    <Step title={t(bi("Pre-Processing","Обробка сканів"))}>
      <Node icon={<Cpu size={s} strokeWidth={1.5}/>} label="Local VLM Engine" sub={t(bi("Document Scanning & Structured JSON (paperwork stream)","Розпізнавання та JSON (потік первинки)"))}/>
    </Step><Arrow/>
    <Step title={t(bi("Core Verification","Математичне ядро"))}>
      <Node icon={<ShieldCheck size={s} strokeWidth={1.5}/>} label="Deterministic Shield" sub={t(bi("Pure Math & SQLite WAL — both streams merge here","Чиста математика + SQLite WAL — обидва потоки сходяться тут"))}/>
    </Step><Arrow/>
    <Step title={t(bi("Outputs","Результат"))}>
      <Node icon={<Layers size={s} strokeWidth={1.5}/>} label="Event-Driven UI" sub={t(bi("Anomaly Traffic Light","Світлофор аномалій"))}/>
      <Node icon={<MonitorDot size={s} strokeWidth={1.5}/>} label="Local Copilot" sub="Qwen 3.5 Air-Gap"/>
    </Step>
  </figure>;
}

function AlertCard({ title, items }: { title: string; items: readonly string[] }) {
  return <div className="mt-8 overflow-hidden rounded-2xl border border-destructive/40 bg-card font-mono">
    <div className="flex items-center gap-3 border-b border-border px-5 py-3">
      <AlertTriangle size={18} strokeWidth={1.5} className="text-destructive"/>
      <span className="text-sm font-semibold text-foreground">{title}</span>
      <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-destructive"/>
    </div>
    <ol className="space-y-3 p-5 text-sm leading-relaxed text-muted-foreground">
      {items.map((x, k) => <li key={k}>{inline(x)}</li>)}
    </ol>
  </div>;
}

const related: { to: "/insights/taming-local-ai" | "/insights/frankenstein-syndrome"; title: Bi; text: Bi }[] = [
  { to: "/insights/taming-local-ai", title: bi("How to Tame Local AI in an Air-Gapped Environment","Як приборкати штучний інтелект у закритому контурі"), text: bi("Why LLMs cannot be trusted without a deterministic skeleton and 26 behavioral risk transistors.","Чому мовній моделі не можна вірити без жорсткого математичного каркасу та 26 транзисторів ризику.") },
  { to: "/insights/frankenstein-syndrome", title: bi("The Frankenstein Syndrome: Why Company Growth Breaks Operations","Синдром Франкенштейна: чому ріст компанії вбиває операційку"), text: bi("How to eliminate spreadsheet chaos and margin leaks without building a $20,000 custom ERP.","Як розібрати хаос у таблицях і зупинити витік маржі без власної ERP за $20 000.") },
];

export default function ArticlePage() {
  const { lang, t } = useLang(); const { open } = useContactDialog();
  const pilot = () => open({ model: "pilot" });
  const body = claudeErpBody[lang];
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <SiteHeader onPilot={pilot} />
    <main>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft size={16} strokeWidth={1.5}/>{t(bi("Back to Insights","Назад до аналітики"))}</Link>
        <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-primary">{t(bi("Published by Sabir Dushayev · Lead Systems Architect · November 2026","Автор: Сабір Душаєв · Головний системний архітектор · Листопад 2026"))}</p>
        <h1 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-5xl" style={F}>{t(H1)}</h1>
        <div className="mt-10 border-t border-border pt-4">
          <ArticleBody source={body.pre} />
          <Diagram />
          <ArticleBody source={body.mid} />
          <AlertCard title={body.alertTitle} items={body.alert} />
          <ArticleBody source={body.post} />
        </div>
      </article>
      <section className="mx-auto grid max-w-3xl gap-6 px-6 pb-12 md:grid-cols-2">
        {related.map((r) => <Link key={r.to} to={r.to} className="group glass glass-hover block rounded-2xl p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{t(bi("Related Reading","Читайте також"))}</p>
          <h2 className="mt-4 text-xl font-semibold text-foreground" style={F}>{t(r.title)}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(r.text)}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">{t(bi("Read Article","Читати статтю"))}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></span>
        </Link>)}
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="glass rounded-2xl border-primary/30 p-8 md:p-12">
          <h2 className="text-2xl font-semibold md:text-3xl" style={F}>{t(bi("Stop Guessing Your Retail Margins. Run a Sovereign Audit.","Припиніть вгадувати маржу. Запустіть суверенний аудит."))}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{t(bi("Connect your 1C / ERP exports and primary invoices inside a 100% air-gapped node. Uncover trapped cash and discrepancies in 48 hours.","Поєднайте вивантаження 1С та первинні накладні в 100% автономному контурі. Знайдіть заморожені гроші та розходження за 48 годин."))}</p>
          <Button onClick={pilot} size="lg" className="mt-8 h-auto min-h-12 whitespace-normal px-5 py-3">{t(bi("Start 14-Day Free Evaluation","Замовити 14-денний безкоштовний тест"))}<ArrowRight/></Button>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
