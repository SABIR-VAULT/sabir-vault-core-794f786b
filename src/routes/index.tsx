import { createFileRoute } from "@tanstack/react-router";
import {
  Lock, ShieldCheck, BarChart3, Users, Building2, Link2, Wallet,
  UsersRound, Search, Server, Package, ArrowRight, FileText, ScanLine,
  CheckCircle2, Download, Github, Mail, ShieldAlert, Zap, KeyRound,
  FileSearch, GitBranch, Network, ScrollText, Landmark, Bug, Fingerprint,
  Boxes, Database, Scale, Calculator, Presentation, Bot,
} from "lucide-react";
import { useContactDialog } from "@/components/ContactDialog";
import { useSolutionDialog, type SolutionDef } from "@/components/SolutionDialog";
import { useLang, bi, type Bi } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SABIR VAULT | Enterprise Pre-Audit & Document Intelligence Platform" },
      { name: "description", content: "Turn document chaos into a verified picture of your business. SABIR VAULT automates 3-way financial matching, legal forensics, and pre-audit dossiers. 100% Air-Gapped." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sabirvault.com/" },
      { property: "og:title", content: "SABIR VAULT — See What Is Actually Happening Inside Your Business" },
      { property: "og:description", content: "Enterprise situational intelligence and pre-audit platform. Reconstruct entities, financial flows, and legal evidence from raw document archives in minutes." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SABIR VAULT — See What Is Actually Happening Inside Your Business" },
      { name: "twitter:description", content: "Enterprise situational intelligence and pre-audit platform. Reconstruct entities, financial flows, and legal evidence from raw document archives in minutes." },
    ],
    links: [{ rel: "canonical", href: "https://sabirvault.com/" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden text-foreground">
      <Nav />
      <Hero />
      <Introduction />
      <Pillars />
      <Pipeline />
      <Deliverables />
      <Solutions />
      <Deployment />
      <TrustCenter />
      <Partnership />
      <Disclaimer />
      <Footer />
    </div>
  );
}

/* ============================================================ */
/* NAV + LANGUAGE SWITCHER                                       */
/* ============================================================ */

function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex overflow-hidden rounded-md border border-white/10 text-[11px] font-semibold tracking-widest">
      {(["en", "ua"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`px-2.5 py-1.5 uppercase transition ${
            lang === l ? "bg-[#38bdf8]/15 text-[#38bdf8]" : "text-muted-foreground hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function Nav() {
  const { t } = useLang();
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090d16]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-[#38bdf8] to-[#f59e0b]">
            <div className="h-3 w-3 rounded-sm bg-[#090d16]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-[0.2em] text-white">SABIR VAULT</span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.32em] text-muted-foreground/70">Digital Dossiers</span>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#pillars" className="hover:text-white transition">{t(bi("Platform", "Платформа"))}</a>
          <a href="#pipeline" className="hover:text-white transition">{t(bi("Workflow", "Конвеєр"))}</a>
          <a href="#solutions" className="hover:text-white transition">{t(bi("Solutions", "Рішення"))}</a>
          <a href="#deployment" className="hover:text-white transition">{t(bi("Engagement", "Співпраця"))}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <QuoteButton
            title={undefined}
            model="pilot"
            className="rounded-md bg-[#38bdf8] px-4 py-2 text-xs font-semibold text-[#090d16] hover:bg-[#7dd3fc] transition"
          >
            {t(bi("🔓 Start a Pre-Audit", "🔓 Запустити Пре-аудит"))}
          </QuoteButton>
        </div>
      </div>
    </header>
  );
}

function QuoteButton({
  title, model, className, children,
}: { title?: string; model?: "pilot" | "onprem" | "appliance" | "partner"; className: string; children: React.ReactNode }) {
  const { open } = useContactDialog();
  return (
    <button type="button" onClick={() => open({ title, model })} className={className}>
      {children}
    </button>
  );
}


/* ============================================================ */
/* HERO                                                          */
/* ============================================================ */

function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#38bdf8]/[0.06] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
            <span className="tracking-wide">
              {t(bi("🔐 VERIFIED DIGITAL DOSSIERS", "🔐 ВЕРИФІКОВАНІ ЦИФРОВІ ДОСЬЄ"))}
            </span>
          </div>
          <h1 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-white break-words sm:text-5xl md:text-7xl" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
            {t(bi("Deterministic Financial & Legal", "Детермінована фінансова та юридична"))}
            <br />
            <span className="text-gradient-cyan">
              {t(bi("Intelligence (Pre-Audit)", "розвідка (Pre-Audit)"))}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground break-words md:text-lg">
            {t(bi(
              "Transform the chaos of unstructured documents (PDF, photos, Excel) into a 100% verified graph of relationships and risks. Built for deep due diligence in M&A, corporate fraud investigation, and legal clearance for Real World Assets (RWA). The flexible core replaces weeks of manual review with scalable batch processing, adapting to any industry with zero code.",
              "Перетворіть хаос неструктурованих документів (PDF, фото, Excel) на 100% верифікований граф зв'язків та ризиків. Створено для глибокого due diligence в M&A, розслідування корпоративного шахрайства та юридичного очищення активів (RWA). Гнучке ядро системи замінює тижні ручного аналізу на масштабовану пакетну обробку, адаптуючись під будь-яку індустрію без написання коду."
            ))}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <QuoteButton
                title={undefined}
                model="pilot"
                className="group inline-flex items-center gap-2 rounded-md bg-[#38bdf8] px-6 py-3 text-sm font-semibold text-[#090d16] shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)] hover:bg-[#7dd3fc] transition"
              >
                {t(bi("🔓 Start a Pre-Audit ➔", "🔓 Запустити Пре-аудит ➔"))}
              </QuoteButton>
              <a href="#pipeline" className="glass glass-hover inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white">
                {t(bi("Pipeline Overview", "Огляд конвеєра"))}
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              {t(bi("Give us the archive. Get the situation map.", "Надайте архів. Отримайте ситуаційну карту."))}
            </p>
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-2 text-center text-xs uppercase tracking-widest text-muted-foreground/70 sm:flex-row sm:gap-4">
            <span>{t(bi("Air-Gapped", "Ізольовано"))}</span>
            <span className="hidden sm:inline">•</span>
            <span>{t(bi("Deterministic Verification", "Детермінована верифікація"))}</span>
            <span className="hidden sm:inline">•</span>
            <span>{t(bi("Legal Clearance", "Юридичне очищення"))}</span>
            <span className="hidden sm:inline">•</span>
            <span>{t(bi("Zero-Trust", "Zero-Trust"))}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* INTRODUCTION                                                  */
/* ============================================================ */

const audiences: { icon: any; title: Bi; question: Bi; body: Bi }[] = [
  {
    icon: Scale,
    title: bi("For Legal Counsel & Attorneys", "Юристам та Адвокатам"),
    question: bi(
      "\u201CWho is connected to whom — and what proves it?\u201D",
      "\u201CХто з ким пов'язаний — і чим це підтверджено?\u201D"
    ),
    body: bi(
      "Reconstructs hidden beneficiaries (UBO), family and business networks, conflicting obligations, and documentary evidence with exact quotes from source materials.",
      "Реконструює прихованих бенефіціарів (UBO), родинні та бізнес-мережі, суперечливі зобов'язання та документальні докази з точними цитатами першоджерел."
    ),
  },
  {
    icon: Calculator,
    title: bi("For CFOs & Financial Auditors", "Фінансовим Директорам (CFO) & Аудиторам"),
    question: bi(
      "\u201CWhere is the money actually going?\u201D",
      "\u201CКуди насправді йдуть гроші?\u201D"
    ),
    body: bi(
      "Performs 3-way matching (Invoice ↔ Act ↔ Bank Payment), detects off-balance liabilities, unclosed acts, VAT frauds, and financial discrepancies prior to official audits.",
      "Виконує 3-сторонню звірку (Рахунок ↔ Акт ↔ Банківська виписка), виявляє позабалансові борги, незакриті акти, ПДВ-скрутки та фінансові розбіжності до офіційної перевірки."
    ),
  },
  {
    icon: Building2,
    title: bi("For Business Owners & Board of Directors", "Власникам та Раді Директорів"),
    question: bi(
      "\u201CWhat is actually happening inside the business?\u201D",
      "\u201CЩо насправді відбувається всередині бізнесу?\u201D"
    ),
    body: bi(
      "Delivers a single verified picture of assets, liabilities, people, money, and risks, where every metric is linked to its underlying legal proof with cryptographic SHA-256 integrity.",
      "Створює єдину підтверджену картину активів, боргів, людей, грошей та ризиків, де кожний показник підтверджений юридичним документом із SHA-256 печаткою цілісності."
    ),
  },
];

function Introduction() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        eyebrow={t(bi("Overview", "Огляд"))}
        title={t(bi("What is SABIR VAULT?", "Що таке SABIR VAULT?"))}
      />
      <div className="glass mt-8 rounded-2xl p-8 md:p-10">
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          {t(bi(
            "SABIR VAULT transforms unstructured document archives into a verified picture of a business, deal, or asset. Instead of manually reviewing thousands of pages, leaders and professionals receive organized evidence, 3-way financial reconciliation, D3.js relationship graphs, and ready-to-export digital dossiers. Every conclusion is traceable back to the source document page.",
            "SABIR VAULT перетворює розрізнений документальний архів на перевірену ситуаційну картину бізнесу, справи чи активу. Замість ручного перегляду тисяч сторінок керівники та фахівці отримують впорядковані докази, 3-сторонню звірку грошей, D3.js графи прихованих зв'язків та цифрові досьє, де кожний висновок можна простежити до сторінки оригінального скана."
          ))}
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {audiences.map((a, i) => (
          <div key={i} className="glass glass-hover rounded-2xl p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
              <a.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-sm font-semibold text-white">{t(a.title)}</div>
            <p className="mt-2 text-sm italic leading-relaxed text-[#38bdf8]/90">{t(a.question)}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(a.body)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ */
/* CORE PRINCIPLES                                               */
/* ============================================================ */

const pillars: { icon: any; title: Bi; body: Bi }[] = [
  {
    icon: Lock,
    title: bi("Local Processing", "Локальна обробка"),
    body: bi(
      "All document processing occurs entirely within your own private infrastructure. No mandatory cloud processing.",
      "Уся обробка документів відбувається у вашій приватній інфраструктурі. Обов'язкова хмарна обробка відсутня."
    ),
  },
  {
    icon: BarChart3,
    title: bi("Structured Intelligence", "Структурований аналіз"),
    body: bi(
      "Transforms disconnected documents into structured datasets, entities, relationships, and digital dossiers.",
      "Перетворює розрізнені документи на структуровані датасети, сутності, зв'язки та цифрові досьє."
    ),
  },
  {
    icon: Users,
    title: bi("Dual-Stage Verification Workspace", "Двоетапна верифікація"),
    body: bi(
      "Stateful Split-View workspace with separate verification passes for entity relationship graphs and deep fact matrices, with auto-save audit trail.",
      "Спліт-в'ю робочий простір із роздільними етапами перевірки графа зв'язків та матриць фактів, з автозбереженням аудит-сліду."
    ),
  },
  {
    icon: ShieldCheck,
    title: bi("Security by Design (Zero-Trust)", "Безпека за замовчуванням"),
    body: bi(
      "Zero-Trust file ingestion featuring local ClamAV antivirus sandboxing, encrypted ZIP unpacking, and memory-isolated pipeline execution.",
      "Zero-Trust прийом файлів із локальним антивірусним пісочницьким скануванням ClamAV, розпаковкою зашифрованих ZIP та ізольованим виконанням конвеєра."
    ),
  },
  {
    icon: KeyRound,
    title: bi("Zero-Knowledge Client Intake (AES-256-GCM)", "Zero-Knowledge прийом (AES-256-GCM)"),
    body: bi(
      "Standalone browser-based encryption utility allowing clients and counsel to seal document archives into encrypted .enc containers locally before transmission.",
      "Автономна браузерна утиліта шифрування дозволяє клієнтам і адвокатам локально запечатувати архіви у зашифровані .enc-контейнери перед передачею."
    ),
  },
];

function Pillars() {
  const { t } = useLang();
  return (
    <section id="pillars" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow={t(bi("Core Principles", "Основні принципи"))}
        title={t(bi("Built for uncompromising trust.", "Створено для безкомпромісної довіри."))}
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <div key={i} className="glass glass-hover group relative overflow-hidden rounded-2xl p-6">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-white">{t(p.title)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(p.body)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ */
/* WORKFLOW / PIPELINE                                           */
/* ============================================================ */

const pipelineSteps: { icon: any; label: Bi }[] = [
  { icon: FileText, label: bi("Document Intake", "Прийом документів") },
  { icon: ScanLine, label: bi("Pre-processing", "Попередня обробка") },
  { icon: FileSearch, label: bi("OCR & Extraction", "OCR та екстракція") },
  { icon: CheckCircle2, label: bi("Dual-Stage Verification", "Двоетапна верифікація") },
  { icon: Database, label: bi("Verified Digital Dossier", "Верифіковане досьє") },
  { icon: Download, label: bi("Export", "Експорт") },
];

function Pipeline() {
  const { t } = useLang();
  return (
    <section id="pipeline" className="relative border-y border-white/5 bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow={t(bi("Workflow", "Конвеєр обробки"))}
          title={t(bi("A deterministic pipeline. End to end.", "Детермінований конвеєр від початку до кінця."))}
        />
        <p className="mt-4 max-w-4xl text-sm font-semibold uppercase tracking-[0.1em] text-[#38bdf8]/90 break-words">
          {t(bi(
            "Archive ➔ Facts ➔ Entities & Assets ➔ Relationships ➔ Verification ➔ Situation Map ➔ Decision",
            "Архів ➔ Факти ➔ Суб'єкти та Об'єкти ➔ Зв'язки ➔ Верифікація ➔ Ситуаційна Карта ➔ Рішення"
          ))}
        </p>
        <div className="glass mt-14 rounded-2xl p-8 md:p-12">
          <div className="hidden lg:block">
            <div className="relative">
              <svg className="absolute inset-x-0 top-[36px] -z-0 h-2 w-full" preserveAspectRatio="none" viewBox="0 0 100 2">
                <line x1="4" y1="1" x2="96" y2="1" stroke="url(#g)" strokeWidth="0.4" className="flow-line" />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#38bdf8" />
                    <stop offset="1" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="relative grid grid-cols-6 gap-4">
                {pipelineSteps.map((s, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="pulse-node grid h-[72px] w-[72px] place-items-center rounded-full border border-[#38bdf8]/30 bg-[#0b0f19]">
                      <s.icon className="h-6 w-6 text-[#38bdf8]" />
                    </div>
                    <div className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{t(bi("Step", "Крок"))} {i + 1}</div>
                    <div className="mt-1 text-sm font-semibold text-white">{t(s.label)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-3 lg:hidden">
            {pipelineSteps.map((s, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#38bdf8]/30 bg-[#0b0f19]">
                  <s.icon className="h-5 w-5 text-[#38bdf8]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t(bi("Step", "Крок"))} {i + 1}</div>
                  <div className="text-sm font-semibold text-white">{t(s.label)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* DELIVERABLES                                                  */
/* ============================================================ */

const deliverables: { icon: any; title: Bi }[] = [
  { icon: FileText, title: bi("Verified Digital Dossier (Word .docx + HTML Dashboard)", "Верифіковане цифрове досьє (Word .docx + HTML-дашборд)") },
  { icon: Network, title: bi("D3.js Interactive Relationship Graph (UBO, family & corporate networks)", "Інтерактивний D3.js граф зв'язків (UBO, родинні та бізнес-мережі)") },
  { icon: Landmark, title: bi("Court-Ready Evidence Package with page-accurate quotes", "Доказовий пакет для суду з цитатами та посиланнями на сторінки") },
  { icon: Calculator, title: bi("CFO Financial & Tax Audit Package (3-Way Matching + Off-balance liabilities)", "Фінансово-податковий аудит-пакет CFO (3-Way Matching + позабалансові борги)") },
  { icon: Presentation, title: bi("Board-Ready Presentation Package (Interactive Slides)", "Презентаційний пакет для Ради Директорів (інтерактивні слайди)") },
  { icon: Bot, title: bi("Interactive AI Co-Pilot (Grounded Q&A over verified datasets)", "AI Co-Pilot — живий чат по верифікованій базі фактів") },
  { icon: Fingerprint, title: bi("Cryptographic Proof Certificate (SHA-256 Tamper Seal)", "Криптографічна печатка цілісності (SHA-256 Tamper Seal)") },
];

function Deliverables() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow={t(bi("Deliverables", "Результати"))}
        title={t(bi("Every project produces.", "Результат кожного проєкту."))}
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {deliverables.map((d, i) => (
          <div key={i} className="glass glass-hover flex items-start gap-3 rounded-2xl p-5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
              <d.icon className="h-5 w-5" />
            </div>
            <div className="text-sm font-semibold leading-snug text-white">{t(d.title)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ */
/* INDUSTRIES & USE CASES (interactive)                          */
/* ============================================================ */

const solutions: SolutionDef[] = [
  {
    key: "dd",
    icon: Building2,
    eyebrow: bi("M&A & Cap Tables", "M&A та капітальні структури"),
    title: bi("Corporate Due Diligence & M&A Analysis", "Корпоративний due diligence та M&A-аналіз"),
    body: bi(
      "SABIR VAULT automates the ingestion and cross-verification of massive corporate archives during M&A, restructuring, and investment due diligence.",
      "SABIR VAULT автоматизує прийом та перехресну перевірку масивних корпоративних архівів під час M&A, реструктуризації та інвестиційного due diligence."
    ),
    bullets: [
      bi("Ownership chain and cap table reconstruction.", "Відновлення ланцюжків володіння та cap table."),
      bi("Anti-fraud pattern detection across shareholder registries.", "Виявлення шахрайських патернів у реєстрах акціонерів."),
      bi("Cross-verified financial statements and contracts.", "Крос-верифіковані фінансові звіти та контракти."),
    ],
  },
  {
    key: "rwa",
    icon: Link2,
    eyebrow: bi("RWA Pre-Tokenization", "Підготовка RWA до токенізації"),
    title: bi("Real World Asset (RWA) Legal Clearance", "Юридичне очищення реальних активів (RWA)"),
    body: bi(
      "Designed for institutional platforms, funds, and legal teams preparing physical assets (real estate, infrastructure, debt) for tokenization or institutional sale.",
      "Створено для інституційних платформ, фондів та юридичних команд, що готують фізичні активи (нерухомість, інфраструктура, борг) до токенізації або інституційного продажу."
    ),
    bullets: [
      bi("Deterministic asset provenance and title verification.", "Детермінована перевірка походження активу та титулу."),
      bi("Encumbrance and lien detection across archives.", "Виявлення обтяжень та застав у архівах."),
      bi("Cryptographic proof of dossier integrity.", "Криптографічне підтвердження цілісності досьє."),
    ],
  },
  {
    key: "fin",
    icon: Wallet,
    eyebrow: bi("Financial & Account Audit", "Фінансовий та рахунковий аудит"),
    title: bi("Financial Flow & IBAN Forensic Audit", "Форензик-аудит фінансових потоків та IBAN"),
    body: bi(
      "Transforms thousands of unstructured bank statements, invoices, loan agreements, and financial declarations into a clean, searchable intelligence database.",
      "Перетворює тисячі неструктурованих виписок, інвойсів, кредитних договорів та декларацій на чисту базу з пошуком."
    ),
    bullets: [
      bi("IBAN extraction and counterparty resolution.", "Екстракція IBAN та розпізнавання контрагентів."),
      bi("Cash vs. bank flow reconciliation.", "Звірка готівкових та банківських потоків."),
      bi("Asset protection and hidden-flow indicators.", "Захист активів та індикатори прихованих потоків."),
    ],
  },
  {
    key: "family",
    icon: UsersRound,
    eyebrow: bi("Family Office & Kinship", "Family Office та родинні зв'язки"),
    title: bi("Family Office & Kinship Relationship Analytics", "Аналітика родинних зв'язків Family Office"),
    body: bi(
      "Uncovers complex biological, legal, and financial networks within multi-generational family estates, inheritance disputes, and asset protection cases.",
      "Розкриває складні біологічні, юридичні та фінансові мережі у мультипоколінних маєтках, спадкових спорах та кейсах захисту активів."
    ),
    bullets: [
      bi("Kinship graphs with in-law and proxy detection.", "Графи спорідненості з виявленням родичів по шлюбу та проксі."),
      bi("Marital property and inheritance risk mapping.", "Мапування ризиків спільної власності та спадкування."),
      bi("Biological paradox and consistency checks.", "Перевірка біологічних парадоксів та узгодженості."),
    ],
  },
  {
    key: "gap",
    icon: Search,
    eyebrow: bi("Compliance Gap Analysis", "Аналіз compliance-прогалин"),
    title: bi("Missing Evidence & Compliance Gap Analysis", "Аналіз відсутніх доказів та compliance-прогалин"),
    body: bi(
      "A deterministic compliance auditor that scans raw document folders to instantly identify what mandatory documents are missing from a case.",
      "Детермінований compliance-аудитор, що сканує сирі теки документів та миттєво виявляє, які обов'язкові документи відсутні у справі."
    ),
    bullets: [
      bi("Mandatory document checklists per jurisdiction.", "Обов'язкові чек-листи документів за юрисдикціями."),
      bi("Automated risk scoring per case folder.", "Автоматичний скоринг ризиків для кожної теки."),
      bi("Actionable remediation report.", "Прикладний звіт з рекомендаціями."),
    ],
  },
];

function Solutions() {
  const { t } = useLang();
  const { open } = useSolutionDialog();
  return (
    <section id="solutions" className="relative border-y border-white/5 bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow={t(bi("Industries & Use Cases", "Галузі та варіанти застосування"))}
          title={t(bi("Built for organizations working with complex document collections.", "Створено для організацій, що працюють зі складними масивами документів."))}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <button
              type="button"
              onClick={() => open(s)}
              key={s.key}
              className="glass glass-hover group rounded-2xl p-7 text-left"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-[#38bdf8]/15 to-[#f59e0b]/10 text-[#38bdf8]">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{t(s.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(s.body)}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8]">
                {t(bi("View details", "Детальніше"))} <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* ENGAGEMENT MODELS                                             */
/* ============================================================ */

function Deployment() {
  const { t } = useLang();
  return (
    <section id="deployment" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow={t(bi("Engagement Models", "Моделі співпраці"))}
        title={t(bi("Three ways to engage with SABIR VAULT.", "Три способи співпраці з SABIR VAULT."))}
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DeployCard
          icon={Zap}
          model="pilot"
          tag={t(bi("On-Demand Service", "Послуга на замовлення"))}
          title={t(bi("SABIR VAULT Pre-Audit (POC)", "Пре-аудит SABIR VAULT (POC)"))}
          body={t(bi(
            "Trial forensic processing of your document archive before a major transaction, M&A deal, or dispute. Receive a complete situation map, missing evidence report, and verified digital dossier.",
            "Тестова форензик-обробка вашого архіву перед укладанням угоди, купівлею компанії або судовим процесом. Отримайте ситуаційну карту, звіт про відсутні докази та верифіковане цифрове досьє."
          ))}
          ctaLabel={t(bi("🔓 Start a Pre-Audit ➔", "🔓 Запустити Пре-аудит ➔"))}
        />

        <DeployCard
          icon={Server}
          model="onprem"
          tag={t(bi("Software License", "Ліцензія на ПЗ"))}
          title={t(bi("Managed On-Premise Deployment", "Керована локальна інсталяція (Managed On-Premise)"))}
          body={t(bi(
            "Installation and configuration on your existing private infrastructure with monthly enterprise licensing.",
            "Інсталяція та налаштування на вашій приватній інфраструктурі з щомісячною корпоративною ліцензією."
          ))}
        />
        <DeployCard
          icon={Package}
          model="appliance"
          tag={t(bi("Hardware + Software", "Обладнання + ПЗ"))}
          title={t(bi("Dedicated Hardware Appliance (SABIR VAULT Box)", "Виділений апаратний модуль (SABIR VAULT Box)"))}
          body={t(bi(
            "Pre-configured, air-gapped plug-and-play Mac Mini unit delivered directly to your office for maximum isolation.",
            "Попередньо налаштований ізольований plug-and-play Mac Mini з доставкою у ваш офіс для максимальної ізоляції."
          ))}
          highlight
        />
      </div>
    </section>
  );
}

function DeployCard({ icon: Icon, title, body, tag, highlight, model, ctaLabel }: any) {
  const { t } = useLang();
  return (
    <div className={`glass glass-hover flex flex-col rounded-2xl p-8 ${highlight ? "ring-1 ring-[#f59e0b]/30" : ""}`}>
      <div className="flex items-center justify-between">
        <div className={`grid h-12 w-12 place-items-center rounded-lg ${highlight ? "bg-[#f59e0b]/10 text-[#f59e0b]" : "bg-[#38bdf8]/10 text-[#38bdf8]"}`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{tag}</span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <QuoteButton
        title={model === "pilot" ? undefined : `${title} — ${ctaLabel ?? t(bi("Request Details", "Запит деталей"))}`}
        model={model}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#38bdf8]"
      >
        {ctaLabel ?? (<>{t(bi("Request Details", "Запит деталей"))} <ArrowRight className="h-4 w-4" /></>)}
      </QuoteButton>
    </div>
  );
}


/* ============================================================ */
/* TRUST CENTER                                                  */
/* ============================================================ */

const trustItems: { icon: any; title: Bi }[] = [
  { icon: KeyRound, title: bi("Zero-Knowledge Client Intake (AES-256-GCM WebCrypto Vault)", "Zero-Knowledge прийом (AES-256-GCM WebCrypto)") },
  { icon: Landmark, title: bi("Judicial Court Anonymization Decoder", "Декодер анонімізованих судових рішень") },
  { icon: CheckCircle2, title: bi("360-Degree Quality Control Engine", "Двигун 360° контролю якості") },
  { icon: ScanLine, title: bi("Resilient Unstructured Ingestion", "Стійкий прийом неструктурованих даних") },
  { icon: ShieldCheck, title: bi("Zero-Leak DLP Safety Gate (PII Masking)", "DLP-шлюз без витоків (маскування PII)") },
  { icon: Fingerprint, title: bi("Cryptographic Proof of Existence (Hedera & Sui)", "Криптографічний доказ існування (Hedera та Sui)") },
  { icon: Network, title: bi("D3.js Forensic Graph Simulation Engine", "Форензик-двигун симуляції графа D3.js") },
  { icon: GitBranch, title: bi("Live Legislative Binding (zakon.rada.gov.ua)", "Прив'язка до законодавства (zakon.rada.gov.ua)") },
  { icon: Bug, title: bi("Zero-Trust Ingestion Sandbox (ClamAV)", "Zero-Trust пісочниця прийому (ClamAV)") },
  { icon: Boxes, title: bi("CRM & Case Management Integration Ready", "Готовність до інтеграції з CRM та Case Management") },
];

function TrustCenter() {
  const { t } = useLang();
  return (
    <section className="relative border-y border-white/5 bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow={t(bi("Trust Center", "Центр довіри"))}
          title={t(bi("Technology highlights & partner network.", "Ключові технології та мережа партнерів."))}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {trustItems.map((it, i) => (
            <div key={i} className="glass flex items-start gap-3 rounded-xl p-4">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[#38bdf8]/10 text-[#38bdf8]">
                <it.icon className="h-4 w-4" />
              </div>
              <div className="text-sm leading-snug text-white/90">{t(it.title)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* PARTNERSHIP                                                   */
/* ============================================================ */

function Partnership() {
  const { t } = useLang();
  return (
    <section id="quote" className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-16">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#f59e0b]/10 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#38bdf8]">
              {t(bi("Partnership Program", "Партнерська програма"))}
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {t(bi("For Legal, Audit & Advisory Partners", "Для юридичних, аудиторських та консалтингових партнерів"))}
            </h3>
            <p className="mt-4 max-w-lg text-muted-foreground">
              {t(bi(
                "Deploy SABIR VAULT as your internal engine or offer white-label pre-audit services to your clients.",
                "Розгорніть SABIR VAULT як внутрішній двигун або пропонуйте клієнтам послуги пре-аудиту під власним брендом."
              ))}
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <QuoteButton
              title={t(bi("Become a Partner", "Стати партнером"))}
              model="partner"
              className="inline-flex items-center gap-2 rounded-md bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#090d16] hover:bg-[#fbbf24] transition"
            >
              {t(bi("🤝 Become a Partner ➔", "🤝 Стати партнером ➔"))}
            </QuoteButton>

            <a href="mailto:contact@sabirvault.com" className="text-sm text-muted-foreground hover:text-white transition">
              contact@sabirvault.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Disclaimer() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 text-xs leading-relaxed text-muted-foreground">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]" />
        <div>
          <span className="font-semibold text-white">{t(bi("Important Notice: ", "Важливо: "))}</span>
          {t(bi(
            "SABIR VAULT is an enterprise document intelligence platform. It prepares structured digital dossiers for professional review. Professional conclusions remain the responsibility of qualified specialists.",
            "SABIR VAULT — корпоративна платформа документного аналізу. Вона готує структуровані цифрові досьє для професійного перегляду. Професійні висновки залишаються відповідальністю кваліфікованих фахівців."
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-white/5 bg-[#0b0f19]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#38bdf8] to-[#f59e0b]">
            <div className="h-2.5 w-2.5 rounded-sm bg-[#090d16]" />
          </div>
          <span className="text-xs font-semibold tracking-[0.2em] text-white">SABIR VAULT</span>
          <span className="ml-3 text-xs text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          {/* Email */}
          <a href="mailto:contact@sabirvault.com" className="inline-flex items-center gap-1.5 hover:text-white transition">
            <Mail className="h-3.5 w-3.5" /> contact@sabirvault.com
          </a>
          
          {/* GitHub Docs */}
          <a href="https://github.com/SABIR-VAULT/sabirvault-docs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition">
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          
          {/* Privacy Policy */}
          <a href="/privacy" className="hover:text-white transition">
            {t(bi("Privacy Policy", "Політика конфіденційності"))}
          </a>
          
          {/* 🔒 Security Statement (прямая ссылка на файл безопасности!) */}
          <a href="https://github.com/SABIR-VAULT/sabirvault-docs/blob/main/SECURITY.md" target="_blank" rel="noreferrer" className="hover:text-white transition">
            {t(bi("Security Statement", "Заява про безпеку"))}
          </a>
          
          {/* Workflow */}
          <a href="#pipeline" className="hover:text-white transition">
            {t(bi("Workflow", "Конвеєр"))}
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#38bdf8]">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>{title}</h2>
    </div>
  );
}
