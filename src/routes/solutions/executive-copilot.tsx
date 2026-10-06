import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AlertCircle, ArrowRight, Briefcase, CalendarClock, Eye, FileCheck, FileText, Gavel, Landmark, Lock, MessageSquareText, Network, Radar, RefreshCw, Search, Server, TrendingDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactDialog } from "@/components/ContactDialog";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { bi, useLang, type Bi } from "@/lib/i18n";

const URL = "https://sabirvault.com/solutions/executive-copilot";
const META = {
  title: bi("Executive Pre-Audit Copilot | SABIR VAULT", "Виконавчий Pre-Audit Копілот | SABIR VAULT"),
  desc: bi(
    "Run your company on facts, not reports. 100% deterministic executive X-ray. Deployed locally in 15 minutes. Verified threat map within 48 hours. Zero cloud leaks.",
    "Керуйте компанією за фактами, а не за звітами. 100% детермінований рентген бізнесу. Розгортання за 15 хвилин. Карта загроз за 48 годин. Нуль хмар.",
  ),
};

export const Route = createFileRoute("/solutions/executive-copilot")({
  head: () => ({
    meta: [
      { title: META.title.en },
      { name: "description", content: META.desc.en },
      { property: "og:title", content: META.title.en },
      { property: "og:description", content: META.desc.en },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: META.title.en, description: META.desc.en, inLanguage: ["en", "uk"], isPartOf: { "@id": "https://sabirvault.com/#website" }, publisher: { "@id": "https://sabirvault.com/#organization" }, breadcrumb: { "@id": `${URL}#breadcrumb` } },
          { "@type": "BreadcrumbList", "@id": `${URL}#breadcrumb`, itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://sabirvault.com/" },
            { "@type": "ListItem", position: 2, name: "Solutions", item: "https://sabirvault.com/#solutions" },
            { "@type": "ListItem", position: 3, name: "Executive Pre-Audit Copilot", item: URL },
          ] },
        ],
      }),
    }],
  }),
  component: ExecPage,
});

const blind = [
  { icon: TrendingDown, title: bi("The Margin Fog (Unexplained Variance)", "Туман маржі (Непояснена різниця)"), text: bi("The strategic plan says 22% margin, but the bank account reflects 14%. The difference lives between departments: lost handoffs, unlogged rework, silent discounts. The engine reconciles deals ➔ acts ➔ payments and pins every unit of variance to a document and a page.", "План показує 22% маржі, але банківський рахунок відображає лише 14%. Різниця ховається між відділами: втрачені передачі, необліковані знижки, тихі переробки. Система звіряє угоди ➔ акти ➔ оплати і прив'язує кожну втрачену гривню до сторінки договору.") },
  { icon: Landmark, title: bi("Invisible Liabilities (Off-Books Commitments)", "Невидимі зобов'язання (Поза балансом)"), text: bi("Promissory notes, unclosed prepayments, signed-but-unregistered contracts, verbal guarantees. Before an external audit or bank credit check uncovers them, the engine surfaces them directly from historical primary documents.", "Необліковані векселі, завислі аванси, підписані незареєстровані договори, усні гарантії. Перш ніж зовнішній аудит або банк знайде їх під час перевірки, система піднімає їх на поверхню з первинних паперів.") },
  { icon: Users, title: bi("The Inner Circle (Undeclared Conflicts)", "Ближнє коло (Неоголошені конфлікти)"), text: bi("Contractors owned by relatives of regional managers. Proxy entities skimming procurement. The kinship-and-payment graph links persons, companies, and cash flows — exposing who actually benefits.", "Підрядники, оформлені на родичів регіональних директорів. Кишенькові фірми в закупівлях. Граф зв'язків зшиває людей, компанії та гроші, показуючи реального кінцевого вигодонабувача.") },
];

const metrics = [
  { v: "14.2%", l: bi("Margin variance explained", "Різниці маржі пояснено"), c: "border-destructive/60" },
  { v: "3", l: bi("Undeclared related parties", "Неоголошені пов'язані особи"), c: "border-gold/60" },
  { v: "41", l: bi("Missing compliance documents", "Відсутні обов'язкові документи"), c: "border-destructive" },
];

const instruments = [
  { icon: MessageSquareText, title: bi("Grounded Q&A Copilot", "Копілот із доказовими відповідями"), text: bi("Ask in plain language: \"Who received prepayments without delivery acts?\" The answer lists entities, amounts, and page-accurate citations. If evidence is absent, it states \"no data\" — zero hallucinations.", "Запитуйте людською мовою: «Хто отримав аванси без закриваючих актів?» Відповідь містить перелік компаній, суми та точні сторінки. Якщо доказів немає, система чесно пише «дані відсутні» замість вигадок.") },
  { icon: Radar, title: bi("Pre-Audit Radar", "Радар попереднього аудиту"), text: bi("Simulates an external institutional audit before auditors arrive: missing documents, broken chains, date inversions, unauthorized approvals.", "Симулює перевірку аудиторів до їхнього приходу: відсутні обов'язкові акти, розриви ланцюжків, дати заднім числом, недійсні довіреності.") },
  { icon: Network, title: bi("Related-Party Graph", "Граф пов'язаних осіб"), text: bi("Kinship, corporate ownership, and payment layers fused into one graph. One click from a suspicious invoice to the ultimate beneficiary.", "Родинні зв'язки, власність компаній та банківські проводки в єдиному графі. Один клік від підозрілого платежу до витягу бенефіціара.") },
  { icon: FileText, title: bi("Board-Ready Report", "Звіт для ради директорів"), text: bi("Structured PDF/HTML dossier with risk voltage, blast radius, and an evidence appendix. Your leadership signature backed by deterministic math.", "Структуроване досьє з напругою ризику, вогнищем ураження та додатком доказів. Ваш підпис, підкріплений математикою.") },
];

const deep = [
  { to: "/cfo" as const, label: bi("Financial Forensics", "Фінансова криміналістика") },
  { to: "/logistics" as const, label: bi("Supply Chain Audit", "Аудит ланцюгів постачання") },
  { to: "/memory" as const, label: bi("HR & Corporate Memory", "HR та пам'ять компанії") },
  { to: "/agro" as const, label: bi("Agro & Land Holdings", "Агро та земельні активи") },
];

const airgap = [
  { icon: Server, title: bi("Direct Local Installation", "Пряма локальна інсталяція"), text: bi("Deploys natively on your internal servers or Apple Silicon Mac. Zero network footprints.", "Нативне розгортання на внутрішніх серверах чи Apple Silicon Mac. Нуль витоків у мережу.") },
  { icon: Lock, title: bi("Your Data, Your Perimeter", "Ваші дані, ваш периметр"), text: bi("Contracts, payroll, bank statements never leave the building. Not even metadata.", "Договори, зарплати, банківські виписки ніколи не залишають будівлю. Навіть метадані.") },
  { icon: RefreshCw, title: bi("Reproducible Truth", "Відтворювана правда"), text: bi("Every finding re-runs identically. Reproducible benchmark ships with the system.", "Кожен висновок повторюється ідентично. Верифікований бенчмарк постачається з комплексом: перевірте все самі.") },
];

const cases = [
  { icon: Briefcase, title: bi("Pre-M&A / Pre-Investment", "Перед M&A / інвестицією"), text: bi("\"What am I actually buying?\" Full chain of title, hidden liabilities, and related-party leakage before you sign.", "«Що я купую насправді?» Перевірка прав власності, прихованих боргів та витоку маржі до підписання угоди.") },
  { icon: FileCheck, title: bi("Pre-Bank-Credit / Pre-Audit", "Перед кредитом / аудитом"), text: bi("\"What will the auditor find?\" Fix the top-5 findings before the external review starts.", "«Що знайде зовнішній аудитор чи банк?» Виправте топ-5 критичних розривів до початку офіційної перевірки.") },
  { icon: Eye, title: bi("Quarterly Board Meeting", "Квартальна рада директорів"), text: bi("\"Show me the reality map.\" Voltage, blast radius, evidence appendix — instead of 40 defensive slides.", "«Покажіть реальну карту бізнесу». Вольтаж, вогнище ураження, додаток первинки — замість 40 нудних слайдів менеджерів.") },
  { icon: Gavel, title: bi("Internal Investigation", "Внутрішнє розслідування"), text: bi("\"Who, and how?\" From anomaly to person to document in one chain, with an audit trail admissible in court.", "«Хто і як це зробив?» Від аномалії до персони і скану в одному ланцюжку, з доказовою базою для суду.") },
  { icon: CalendarClock, title: bi("First 90 Days of a New CEO", "Перші 90 днів нового CEO"), text: bi("\"Where are the skeletons buried?\" An unbiased X-ray of inherited archives, without relying on anyone's narrative.", "«Де закопані скелети?» Об'єктивний рентген спадщини без сліпої довіри до розповідей старих заступників.") },
];

const font = { fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' };
function Heading({ eyebrow, title }: { eyebrow: Bi; title: Bi }) {
  const { t } = useLang();
  return <div><p className="text-xs font-semibold uppercase tracking-widest text-primary">{t(eyebrow)}</p><h2 className="mt-4 max-w-4xl text-3xl font-semibold text-foreground md:text-4xl" style={font}>{t(title)}</h2></div>;
}

function ExecPage() {
  const { lang, t } = useLang();
  const { open } = useContactDialog();
  const [inspected, setInspected] = useState(false);
  const pilot = () => open({ model: "pilot", title: t(bi("14-Day Free On-Premise Evaluation — Executive Pre-Audit Copilot", "14-денний безкоштовний локальний тест — Виконавчий Pre-Audit Копілот")) });

  useEffect(() => {
    document.title = META.title[lang];
    document.querySelector('meta[name="description"]')?.setAttribute("content", META.desc[lang]);
  }, [lang]);

  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <SiteHeader onPilot={pilot} />
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-28">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">{t(bi("Executive Pre-Audit Copilot", "Виконавчий Pre-Audit Копілот"))}</span>
        <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl" style={font}>
          {t(bi("Run Your Company on Facts, Not Reports.", "Керуйте компанією за фактами, а не за звітами."))}{" "}
          <span className="text-primary">{t(bi("100% Deterministic Executive X-Ray.", "100% детермінований рентген бізнесу."))}</span>
        </h1>
        <h2 className="mt-6 max-w-3xl text-xl text-foreground/90 md:text-2xl" style={font}>{t(bi("Your managers report what they want you to see. SABIR VAULT reads what actually happened.", "Ваші менеджери звітують те, що хочуть показати. SABIR VAULT читає те, що відбулося насправді."))}</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">{t(bi("Contracts, acceptance acts, bank statements, and HR orders cross-matched into one deterministic picture of margin, liabilities, and hidden counterparties. Deployed locally in 15 minutes. Verified threat map within 48 hours (up to 5,000 documents). Zero cloud exposure.", "Договори, акти, банківські виписки та накази, зведені в одну детерміновану картину маржі, зобов'язань і прихованих контрагентів. Розгортання за 15 хвилин. Верифікована карта загроз за 48 годин (до 5 000 документів). Нуль хмар."))}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" onClick={pilot}>{t(bi("Start 14-Day On-Premise Pilot", "Замовити 14-денний локальний тест"))}<ArrowRight size={16} /></Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById("instruments")?.scrollIntoView({ behavior: "smooth" })}>{t(bi("Explore Executive Instruments", "Дослідити інструменти керівника"))}</Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Heading eyebrow={bi("Three Blind Spots", "Три сліпі зони")} title={bi("Find what your reporting hierarchy hides.", "Знайдіть те, що приховує ієрархія звітів.")} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{blind.map(({ icon: I, title, text }) => <article key={title.en} className="glass glass-hover rounded-2xl p-7"><I size={24} strokeWidth={1.5} className="text-primary" /><h3 className="mt-5 text-lg font-semibold">{t(title)}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(text)}</p></article>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Heading eyebrow={bi("Live Executive Radar", "Живий радар керівника")} title={bi("Monday Morning Briefing: Agroholding, 4 Regions (Synthetic Case)", "Ранковий брифінг: Агрохолдинг, 4 регіони (Синтетичний кейс)")} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">{metrics.map(m => <div key={m.v} className={`glass rounded-2xl border-2 p-6 ${m.c}`}><p className="text-4xl font-semibold" style={font}>{m.v}</p><p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t(m.l)}</p></div>)}</div>
        <button type="button" onClick={() => setInspected(v => !v)} aria-expanded={inspected} className="glass glass-hover mt-5 w-full rounded-2xl border border-destructive/50 p-6 text-left">
          <div className="flex items-start gap-3"><AlertCircle size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-destructive" /><div className="min-w-0"><p className="font-semibold text-foreground">{t(bi("Regional Director, Cluster South · Lease #LS-2025-114 · Rate 42% Below Median", "Регіональний директор, кластер «Південь» · Оренда #LS-2025-114 · Ставка на 42% нижча за медіану"))}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><span className="font-mono text-destructive">{t(bi("CRITICAL ALERT:", "КРИТИЧНА ТРИВОГА:"))}</span> T_related_party_chain + T_undervalued_sale {t(bi("triggered. Counterparty registered 11 days before tender; director's spouse is a co-founder.", "спрацювали. Контрагента зареєстровано за 11 днів до тендеру; дружина директора — співзасновниця."))}</p>
            {inspected && <p className="mt-3 text-sm text-primary">{t(bi("Board-ready evidence pack: 6 pages, 14 citations, 0 assumptions.", "Пакет доказів для ради: 6 сторінок, 14 посилань, 0 припущень."))}</p>}
            {!inspected && <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{t(bi("Click to open evidence pack", "Натисніть, щоб відкрити пакет доказів"))}</p>}
          </div></div>
        </button>
      </section>

      <section id="instruments" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
        <Heading eyebrow={bi("Four Executive Instruments", "Чотири інструменти керівника")} title={bi("A grounded copilot. Every answer cites a document.", "Суверенний штурман. Кожна відповідь посилається на документ.")} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">{instruments.map(({ icon: I, title, text }) => <article key={title.en} className="glass glass-hover rounded-2xl p-7"><I size={24} strokeWidth={1.5} className="text-primary" /><h3 className="mt-5 text-lg font-semibold">{t(title)}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(text)}</p></article>)}</div>
        <div className="mt-8"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t(bi("Related deep-dive solutions", "Пов'язані поглиблені рішення"))}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{deep.map(d => <Link key={d.to} to={d.to} className="glass glass-hover flex items-center justify-between rounded-xl px-5 py-4 text-sm font-medium text-foreground"><span className="flex items-center gap-2"><Search size={16} strokeWidth={1.5} className="text-primary" />{t(d.label)}</span><ArrowRight size={16} className="text-primary" /></Link>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Heading eyebrow={bi("100% Private Air-Gap Deployment", "100% приватне розгортання Air-Gap")} title={bi("Nothing leaves your building.", "Ніщо не залишає вашу будівлю.")} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{airgap.map(({ icon: I, title, text }) => <article key={title.en} className="glass glass-hover rounded-2xl p-7"><I size={24} strokeWidth={1.5} className="text-primary" /><h3 className="mt-5 text-lg font-semibold">{t(title)}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(text)}</p></article>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Heading eyebrow={bi("5 Executive Use Cases", "5 сценаріїв для керівника")} title={bi("Moments when facts matter most.", "Моменти, коли факти важать найбільше.")} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{cases.map(({ icon: I, title, text }) => <article key={title.en} className="glass glass-hover rounded-2xl p-7"><I size={24} strokeWidth={1.5} className="text-primary" /><h3 className="mt-5 text-lg font-semibold">{t(title)}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(text)}</p></article>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10">
        <div className="glass rounded-3xl border border-primary/30 p-10 text-center md:p-16">
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">{t(bi("14-Day Executive Evaluation", "14-денна оцінка для керівника"))}</span>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold md:text-4xl" style={font}>{t(bi("See Your Company Without the Fog. Before Your Auditor Does.", "Побачте компанію без туману. Раніше, ніж це зробить аудитор."))}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{t(bi("Deploy a 14-day fully featured evaluation on your local machine. Ingest up to 5,000 documents and receive the executive reality map within 48 hours under your complete physical control.", "Розгорніть 14-денний тестовий контур на власному комп'ютері. Завантажте до 5 000 документів та отримайте карту реальності за 48 годин під вашим повним фізичним контролем."))}</p>
          <Button size="lg" className="mt-8" onClick={pilot}>{t(bi("Start 14-Day Free Evaluation", "Розпочати 14-денний безкоштовний тест"))}<ArrowRight size={16} /></Button>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
