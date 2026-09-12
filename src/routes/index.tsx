import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Lock, ShieldCheck, BarChart3, Users, Building2, Link2, Wallet,
  UsersRound, Search, Server, Package, ArrowRight, FileText, ScanLine,
  CheckCircle2, Download, Github, Mail, ShieldAlert, Zap, KeyRound,
  FileSearch, GitBranch, Network, ScrollText, Landmark, Bug, Fingerprint,
  Boxes, Database, Scale, Calculator, Presentation, Bot, Globe, Puzzle, Truck,
  Camera, Brain, EyeOff, Building, Handshake, X, Check,
} from "lucide-react";
import { useContactDialog } from "@/components/ContactDialog";
import { useSolutionDialog, type SolutionDef } from "@/components/SolutionDialog";
import { useLang, bi, type Bi } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SABIR VAULT — Corporate Forensics. It Just Works." },
      { name: "description", content: "Air-gapped corporate forensics platform: 26 deterministic risk transistors, OrgRecon HR engine, multimodal evidence, and zero-leak DLP anonymizer. The archive goes in. The truth comes out." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sabirvault.com/" },
      { property: "og:title", content: "SABIR VAULT — Air-Gapped Corporate Forensics Platform" },
      { property: "og:description", content: "Transform unstructured archives into mathematically verified graphs of legal risks, financial flows, org structures, supply chains, and multimodal evidence in 48 hours." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SABIR VAULT — Air-Gapped Corporate Forensics Platform" },
      { name: "twitter:description", content: "Transform unstructured archives into mathematically verified graphs of legal risks, financial flows, org structures, supply chains, and multimodal evidence in 48 hours." },
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
      <TwoWays />
      <PeriodicTable />
      <WhatsNew />
      <Introduction />
      <ForensicPillars />
      <LiveCaseStudy />
      <UniversalCore />
      <Pillars />
      <Roi />
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
          <Link to="/security-service" className="hover:text-white transition">{t(bi("For Security Service", "Для СБ"))}</Link>
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
              {t(bi(
                "🔐 AIR-GAPPED PLATFORM · PLUG-AND-PLAY · ZERO CLOUD LEAKS",
                "🔐 АВТОНОМНА ПЛАТФОРМА · PLUG-AND-PLAY · 0 ВИТОКІВ У ХМАРУ"
              ))}
            </span>
          </div>
          <h1 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-white break-words sm:text-5xl md:text-7xl" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
            {t(bi("Corporate Forensics.", "Корпоративний форензік,"))}
            <br />
            <span className="text-gradient-cyan">
              {t(bi("It Just Works.", "який просто працює"))}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-white/90 md:text-xl">
            {t(bi(
              "The archive goes in. The truth comes out. In 48 hours.",
              "Архів всередину. Правда назовні. За 48 годин."
            ))}
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground break-words md:text-lg">
            {t(bi(
              "No consulting army. No cloud exposure. No months of onboarding. An air-gapped box, a cable, and your document archive — our deterministic engine decomposes any corporate fraud scheme into its fundamental risk atoms.",
              "Без армії консультантів. Без хмари. Без місяців впровадження. Автономна коробка, кабель і ваш архів — детерміноване ядро розкладає будь-яку схему шахрайства на фундаментальні атоми ризику."
            ))}
          </p>

          <ul className="mx-auto mt-8 max-w-3xl space-y-2.5 text-left">
            {[
              bi(
                "26 behavioral transistors: each catches its own fraud atom — AML carousels, phantom carriers, ghost employees, and shadow influencers.",
                "26 транзисторів поведінки: кожен ловить свій атом шахрайства — AML-каруселі, фантомних перевізників, «мертвих душ» та тіньовий вплив."
              ),
              bi(
                "6 coverage vectors: Legal, Financial, HR (OrgRecon), Supply Chain, Security, and Multimodal Evidence — zero blind spots.",
                "6 векторів покриття: юридичний, фінансовий, кадровий (OrgRecon), логістичний, безпековий та мультимодальний — жодної сліпої зони."
              ),
              bi(
                "100% on-premise with zero leakage: 274 potential PII leaks on a real-world 56-document dossier ➔ 0 after anonymization.",
                "100% локально з нульовим витоком: 274 потенційні PII-витоки на реальному досьє з 56 документів ➔ 0 після анонімізації."
              ),
            ].map((b, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                <span>{t(b)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <QuoteButton
                title={undefined}
                model="pilot"
                className="group inline-flex items-center gap-2 rounded-md bg-[#38bdf8] px-6 py-3 text-sm font-semibold text-[#090d16] shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)] hover:bg-[#7dd3fc] transition"
              >
                {t(bi("🔓 Start a Pre-Audit ➔", "🔓 Запустити Пре-аудит ➔"))}
              </QuoteButton>
              <Link to="/security-service" className="glass glass-hover inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white">
                {t(bi("🛡️ For Security Service", "🛡️ Для служби безпеки"))}
              </Link>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-2 text-center text-xs uppercase tracking-widest text-muted-foreground/70 sm:flex-row sm:gap-4">
            <span>{t(bi("Plug-and-Play", "Plug-and-Play"))}</span>
            <span className="hidden sm:inline">•</span>
            <span>{t(bi("26 Behavioral Transistors", "26 транзисторів поведінки"))}</span>
            <span className="hidden sm:inline">•</span>
            <span>{t(bi("6 Vectors", "6 векторів"))}</span>
            <span className="hidden sm:inline">•</span>
            <span>{t(bi("0 Leaks", "0 витоків"))}</span>
            <span className="hidden sm:inline">•</span>
            <span>{t(bi("48 Hours", "48 годин"))}</span>
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
    icon: Landmark,
    title: bi("FinTech, Neobanks & Credit Conveyors (KYB & Risk Automation)", "FinTech, Необанки та Кредитні конвеєри (KYB та автоматизація ризиків)"),
    question: bi(
      "\u201CHow do we instantly verify corporate borrowers without risk of fraud?\u201D",
      "\u201CЯк миттєво перевіряти корпоративних позичальників без ризику шахрайства?\u201D"
    ),
    body: bi(
      "Automates Know-Your-Business (KYB) checks for corporate lending. Cross-examines charters, financial statements, and bank records to detect payment structuring below thresholds, nominee directors, and AML carousels before loan approval.",
      "Автоматизує Know-Your-Business (KYB) перевірки для корпоративного кредитування. Звіряє статути, фінансову звітність та банківські виписки для виявлення дроблення платежів, номінальних директорів та AML-каруселей до видачі кредиту."
    ),
  },
  {
    icon: Truck,
    title: bi("Supply Chain, Trading & Logistics (TTN / CMR & Cargo Verification)", "Логістика та торгівля (ТТН / CMR і верифікація вантажів)"),
    question: bi(
      "\u201CAre these shipments, acts, and invoices real or air-money?\u201D",
      "\u201CЧи ці поставки, акти та рахунки реальні, чи це \u2018повітряні\u2019 гроші?\u201D"
    ),
    body: bi(
      "Performs deep 3-way cross-matching between Contracts, Invoices, Bank Statements, and TTN/CMR waybills. Automatically flags impossible delivery speeds, phantom carriers, duplicate waybills, and VAT fraud schemes.",
      "Проводить глибокий 3-Way Matching між Договорами, Рахунками, Виписками та ТТН/CMR. Автоматично підсвічує неможливу швидкість доставки, фантомних перевізників, дубльовані ТТН та схеми з ПДВ."
    ),
  },
  {
    icon: Calculator,
    title: bi("CFOs & Financial Auditors (AML & Corporate Fraud)", "CFO та Фінансові аудитори (AML та корпоративний фрод)"),
    question: bi(
      "\u201CWhere is the money actually going?\u201D",
      "\u201CКуди насправді ідуть гроші?\u201D"
    ),
    body: bi(
      "Uncovers off-balance promissory notes, delta leaks, asset stripping before insolvency, fictitious debts, and circular money transfers (A \u2192 B \u2192 C \u2192 A) hidden across thousands of primary receipts.",
      "Виявляє векселі поза балансом, витік маржі (Delta Leak), виведення активів перед банкрутством, фіктивні борги та кругові транзакції (A \u2192 B \u2192 C \u2192 A), заховані серед тисяч первинних документів."
    ),
  },
  {
    icon: Scale,
    title: bi("Legal Counsel, M&A & Security Officers", "Юристи, M&A та Служба безпеки"),
    question: bi(
      "\u201CWho is connected to whom, and what proves it?\u201D",
      "\u201CХто з ким пов'язаний і чим це доводиться?\u201D"
    ),
    body: bi(
      "Automatically constructs interactive relationship networks of relatives, affiliates, and proxy companies. Identifies \u201Cproxy hops\u201D, time inversion anomalies, forged signatures, and post-resignation unauthorized approvals.",
      "Автоматично будує інтерактивні мережі зв'язків родичів, афілійованих осіб та прокси-компаній. Знаходить \u201Cпрокси-стрибки\u201D, часові аномалії, підроблені підписи та затвердження документів після звільнення."
    ),
  },
  {
    icon: Link2,
    title: bi("RWA Platforms & Investment Funds (Legal Clearance)", "RWA-платформи та Інвестфонди (Legal Clearance)"),
    question: bi(
      "\u201CIs it safe to tokenize or acquire this asset?\u201D",
      "\u201CЧи безпечно токенізувати або купувати цей актив?\u201D"
    ),
    body: bi(
      "Analyzes the entire chain of title and encumbrances. Detects hidden arrests, unclosed mortgages, marital dispute risks, and asset stripping. Generates a cryptographic Proof-of-Clearance.",
      "Аналізує весь ланцюг прав власності та обтяжень. Виявляє приховані арешти, незакриті застави, ризики позовів від колишнього подружжя та виведення активів. Генерує криптографічний Proof-of-Clearance."
    ),
  },
];

const comparisonRows: { legacy: Bi; sabir: Bi }[] = [
  {
    legacy: bi("6 months of implementation", "6 місяців впровадження та очікування"),
    sabir: bi("48 hours to first verified verdict", "48 годин до першого верифікованого вердикту"),
  },
  {
    legacy: bi("Team of on-site consultants in your office", "Команда зовнішніх консультантів у вашому офісі"),
    sabir: bi("Plug-and-play appliance, zero external personnel", "Plug-and-play модуль, жодного стороннього персоналу"),
  },
  {
    legacy: bi("Confidential archives uploaded to third-party cloud", "Конфіденційні архіви передаються у сторонню хмару"),
    sabir: bi("100% air-gapped, data never leaves your perimeter", "100% локально, дані ніколи не залишають ваш периметр"),
  },
  {
    legacy: bi("Weeks of manual, fatigue-prone spreadsheet reviews", "Тижні ручного вичитування паперів із людським фактором"),
    sabir: bi("26 behavioral transistors verify cross-document math instantly", "26 транзисторів миттєво перевіряють математику між документами"),
  },
  {
    legacy: bi("Final deliverable = a subjective consultant's opinion", "Результат = суб'єктивна «думка консультанта»"),
    sabir: bi("Deterministic truth: every single anomaly linked to document & page", "Детермінована правда: кожен факт прив'язаний до документа і сторінки"),
  },
  {
    legacy: bi("Bloated annual consulting billables", "Нескінченні погодинні рахунки консалтингових фірм"),
    sabir: bi("Fixed appliance deployment + modular schema updates", "Фіксоване апаратне рішення + модульні оновлення схем"),
  },
];

function TwoWays() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeader
        eyebrow={t(bi("Comparison", "Порівняння"))}
        title={t(bi("Two Ways to the Truth. One Is Ours.", "Два шляхи до правди. Один — наш."))}
      />
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {t(bi(
          "Why enterprise security teams and boards replace legacy consulting retainers with deterministic hardware.",
          "Чому служба безпеки та топ-менеджмент обирають детермінований комплекс замість місяців консалтингу."
        ))}
      </p>
      <div className="glass mt-10 overflow-hidden rounded-2xl">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2">
          <div className="bg-[#0b0f19] px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t(bi("Traditional Forensic Consulting", "Традиційний консалтинговий аудит"))}
          </div>
          <div className="bg-[#38bdf8]/[0.07] px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#38bdf8]">
            {t(bi("SABIR VAULT Air-Gapped Engine", "Апаратний комплекс SABIR VAULT"))}
          </div>
          {comparisonRows.map((r, i) => (
            <div key={i} className="contents">
              <div className="flex gap-3 bg-[#0b0f19] px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-white/25" />
                <span className="break-words">{t(r.legacy)}</span>
              </div>
              <div className="flex gap-3 bg-[#38bdf8]/[0.04] px-5 py-4 text-sm font-medium leading-relaxed text-white">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span className="break-words">{t(r.sabir)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PeriodicTable() {
  const { t } = useLang();
  const lines: { n: string; text: Bi }[] = [
    { n: "3", text: bi("primary colors → generate billions of digital images.", "базові кольори → створюють мільярди цифрових зображень.") },
    { n: "7", text: bi("musical notes → compose every symphony in human history.", "музичних нот → складають усі симфонії світу.") },
    { n: "118", text: bi("chemical elements → build all matter in the known universe.", "хімічних елементів → утворюють усю матерію Всесвіту.") },
    { n: "22", text: bi("risk transistors → detect any corporate fraud scheme.", "транзистори ризику → виявляють будь-яку схему шахрайства.") },
  ];
  return (
    <section className="relative border-y border-white/5 bg-[#0b0f19]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeader
          eyebrow={t(bi("Mental Model", "Ментальна модель"))}
          title={t(bi("The Periodic Table of Corporate Fraud", "Періодична таблиця корпоративного шахрайства"))}
        />
        <div className="mt-12 divide-y divide-white/5 border-y border-white/5">
          {lines.map((l, i) => (
            <div key={i} className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-8">
              <div
                className={`w-24 shrink-0 text-4xl font-semibold tabular-nums md:text-5xl ${i === lines.length - 1 ? "text-gradient-cyan" : "text-white/30"}`}
                style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}
              >
                {l.n}
              </div>
              <div className={`text-sm leading-relaxed md:text-base ${i === lines.length - 1 ? "text-white" : "text-muted-foreground"}`}>
                {t(l.text)}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {t(bi(
            "Fraudsters cannot invent a new color. They can only remix the same behavioral atoms: kinship proxies, threshold structuring, post-resignation signatures, and date inversions. SABIR VAULT does not write fragile custom code for every industry scenario. Our engine decomposes any \u201Cunique\u201D corporate crime into its fundamental atomic spectrum. That is why the platform never becomes obsolete.",
            "Шахраї не здатні вигадати новий колір. Вони можуть лише перемішувати ті самі атоми поведінки: підставних родичів, дроблення сум під порогом, підписи після звільнення та інверсію дат. SABIR VAULT не дописує крихкий код під кожну галузь. Наше ядро розкладає будь-яку «унікальну схему» на фундаментальний атомний спектр. Саме тому система не застаріває."
          ))}
        </p>
      </div>
    </section>
  );
}

const whatsNew: { icon: any; title: Bi; body: Bi }[] = [
  {
    icon: EyeOff,
    title: bi("\uD83D\uDD76\uFE0F Zero-Leak DLP Anonymizer", "\uD83D\uDD76\uFE0F Zero-Leak DLP Анонімізатор"),
    body: bi(
      "274 → 0 PII leaks mathematically verified on a real-world 56-document dossier with reversible key restoration.",
      "274 → 0 витоків PII математично верифіковано на реальному досьє з 56 документів з ключем відновлення."
    ),
  },
  {
    icon: Building,
    title: bi("\uD83C\uDFE2 SABIR OrgRecon Engine", "\uD83C\uDFE2 Двигун SABIR OrgRecon"),
    body: bi(
      "10 HR risk transistors (6 structural + 4 court-grade): ghost employees, dual reporting, span-of-control, shadow influencers, plus alibi contradiction (50V), pressure campaign (35V), reward anomaly (30V), protocol quorum gap (20V).",
      "10 HR-транзисторів ризику (6 структурних + 4 судового рівня): «мертві душі», подвійне підпорядкування, перевантаження керівників, тіньовий вплив, а також протиріччя алібі (50V), кампанія тиску (35V), аномалія винагороди (30V), розрив кворуму протоколу (20V)."
    ),
  },
  {
    icon: Camera,
    title: bi("\uD83D\uDCF8\uD83C\uDF99\uFE0F Multimodal Forensics", "\uD83D\uDCF8\uD83C\uDF99\uFE0F Мультимодальний форензік"),
    body: bi(
      "Direct triangulation across ATM surveillance frames, primary accounting papers, and audio transcripts.",
      "Пряме перехресне зіставлення фотофіксацій банкоматів (ATM), первинних документів та аудіостенограм."
    ),
  },
  {
    icon: Brain,
    title: bi("\uD83E\uDDE0 Human-Gated Silent Learning", "\uD83E\uDDE0 Human-Gated Тихе Навчання"),
    body: bi(
      "Dual-contour self-healing engine with strict human operator approval gates and a cryptographic audit trail.",
      "Двоконтурне самонавчання системи з обов'язковим ручним затвердженням оператора та журналом аудиту."
    ),
  },
];

function WhatsNew() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/[0.07] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
        {t(bi("v7.5 Platform Release (September 2026)", "Реліз платформи v7.5 (вересень 2026)"))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whatsNew.map((c, i) => (
          <div key={i} className="glass glass-hover rounded-2xl p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
              <c.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-sm font-semibold text-white">{t(c.title)}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(c.body)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const forensicPillars: { icon: any; title: Bi; body: Bi }[] = [
  {
    icon: Scale,
    title: bi("\u2696\uFE0F Legal Core", "\u2696\uFE0F Юридичний контур"),
    body: bi(
      "Power conflicts, date inversion, invalid proxies, unclosed encumbrances, and post-resignation signatures.",
      "Конфлікти повноважень, інверсія дат, недійсні довіреності, приховані обтяження та підписи після звільнення."
    ),
  },
  {
    icon: Wallet,
    title: bi("\uD83D\uDCB0 Financial Contour", "\uD83D\uDCB0 Фінансовий контур"),
    body: bi(
      "AML carousels, VAT frauds, off-balance promissory notes, threshold structuring, and delta discrepancies.",
      "AML-каруселі, скрутки ПДВ, повекселі поза балансом, дроблення сум під порогом моніторингу та платіжні дельта-розриви."
    ),
  },
  {
    icon: UsersRound,
    title: bi("\uD83D\uDC65 HR & OrgRecon", "\uD83D\uDC65 Кадри та OrgRecon"),
    body: bi(
      "Evidence-based org reconstruction, ghost employees, dual reporting lines, functional duplication, and span-of-control bottlenecks — plus 4 court-grade detectors: alibi contradiction, pressure campaign, reward anomaly, protocol quorum gap.",
      "Документальна реконструкція оргструктури, «мертві душі», подвійне підпорядкування, дублювання функцій та перевантаження менеджерів — плюс 4 детектори судового рівня: протиріччя алібі, кампанія тиску, аномалія винагороди, розрив кворуму протоколу."
    ),
  },
  {
    icon: Truck,
    title: bi("\uD83D\uDE9B Supply Chain & Logistics", "\uD83D\uDE9B Логістика та товарний облік"),
    body: bi(
      "Phantom carriers, impossible transit speeds (240+ km/h), recycled waybills (TTN/CMR), and \u201Cair-money\u201D deliveries.",
      "Фантомні перевізники, неможлива швидкість за ТТН (240+ км/год), повторно використані накладні (TTN/CMR) та «повітряні» рейси."
    ),
  },
  {
    icon: ShieldAlert,
    title: bi("\uD83D\uDEE1\uFE0F Corporate Security", "\uD83D\uDEE1\uFE0F Служба безпеки"),
    body: bi(
      "Cascade risk calculations, asset stripping prior to bankruptcy, proxy networks, and offshore sanction links.",
      "Каскадний розрахунок ризиків, виведення активів перед банкрутством, проксі-мережі та офшорні санкційні зв'язки."
    ),
  },
  {
    icon: Camera,
    title: bi("\uD83D\uDCF8\uD83C\uDF99\uFE0F Multimodal Evidence", "\uD83D\uDCF8\uD83C\uDF99\uFE0F Мультимодальні докази"),
    body: bi(
      "Triangulation between physical primary invoices, ATM surveillance captures, and audio interrogation transcripts.",
      "Зіставлення первинних документів, фотофіксацій банкоматів (ATM) та стенограм аудіозаписів."
    ),
  },
];

function ForensicPillars() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeader
        eyebrow={t(bi("Corporate Forensics", "Корпоративний форензік"))}
        title={t(bi("The 6 Pillars of Corporate Forensics", "6 Напрямків Корпоративного Форензіка"))}
      />
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {t(bi(
          "Eliminating blind spots between corporate departments by fusing 6 risk dimensions into one deterministic engine.",
          "Усунення сліпих зон між відділами завдяки поєднанню 6 векторів ризику в єдиному детермінованому ядрі."
        ))}
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {forensicPillars.map((p, i) => (
          <div key={i} className="glass glass-hover rounded-2xl p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
              <p.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-sm font-semibold text-white">{t(p.title)}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(p.body)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LiveCaseStudy() {
  const { t } = useLang();
  const chips = [
    bi("⚡ 150V+ risk voltage", "⚡ 150V+ напруга ризику"),
    bi("🧩 8+ fraud atoms detected", "🧩 8+ виявлених атомів шахрайства"),
    bi("🕸️ 6 vectors fused in one verdict", "🕸️ 6 векторів в одному вердикті"),
    bi("👥 20 persons auto-linked", "👥 20 осіб автозв'язано"),
    bi('🚛 240 km/h “truck”', "🚛 240 км/год «фура»"),
    bi("💰 6M UAH 3-way matching gap", "💰 розрив 3-Way Matching 6 млн грн"),
    bi("🔒 274 ➔ 0 PII leaks after anonymization", "🔒 274 ➔ 0 витоків PII після анонімізації"),
    bi("🏛️ Court-grade findings: alibi contradiction + pressure campaign + reward anomaly", "🏛️ Висновки судового рівня: протиріччя алібі + кампанія тиску + аномалія винагороди"),
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        eyebrow={t(bi("Live Case Study", "ЖИВИЙ КЕЙС"))}
        title={t(bi(
          "The Kovalenko Empire — 36 documents, 5 countries, one engine.",
          "Імперія Коваленка — 36 документів, 5 країн, один движок."
        ))}
      />
      <div className="glass mt-8 rounded-2xl p-8 md:p-10">
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          {t(bi(
            "A synthetic end-to-end demo: a family holding across UA/PL/DE/KZ/US with phantom carriers, impossible transit speeds (240–480 km/h), recycled TTN/CMR waybills, a round-trip carousel, ghost employees on the payroll, and assets stripped to a mother-in-law during litigation. The engine fused all 6 vectors — including ATM photo captures and audio transcripts — into a single verdict.",
            "Синтетичне end-to-end демо: сімейний холдинг у UA/PL/DE/KZ/US із фантомними перевізниками, неможливою швидкістю рейсів (240–480 км/год), повторно використаними ТТН/CMR, каруселлю платежів, «мертвими душами» у штаті та виведенням активів на тещу під час судового процесу. Система звела всі 6 векторів — разом із фотофіксаціями банкоматів і стенограмами аудіо — в єдиний вердикт."
          ))}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {chips.map((chip, i) => (
            <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm font-semibold text-white">
              {t(chip)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


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
            "An air-gapped hardware-and-software appliance for corporate forensics. You plug it in, load the archive, and get a reality map in 48 hours. Inside, 26 deterministic behavioral risk transistors decompose any scheme into its fundamental fraud atoms across six vectors — legal, financial, HR, supply chain, security, and multimodal evidence. No cloud, no consulting army, no onboarding marathon.",
            "Автономний програмно-апаратний комплекс для корпоративного форензіка. Ви підключаєте його, завантажуєте архів і за 48 годин отримуєте карту реальності. Усередині — 26 детермінованих поведінкових транзисторів ризику, що розкладають будь-яку схему на фундаментальні атоми шахрайства за шістьма векторами: юридичним, фінансовим, кадровим, логістичним, безпековим і мультимодальним. Без хмари, без армії консультантів, без місяців впровадження."
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
/* UNIVERSAL CORE                                                */
/* ============================================================ */

const universalCore: { icon: any; title: Bi; body: Bi }[] = [
  {
    icon: Globe,
    title: bi("Multi-Jurisdictional", "Мульти-юрисдикційність"),
    body: bi(
      "5 jurisdictions shipped out of the box (UA / DE / PL / US / KZ). A new country is added in ~2 hours by loading a single JSON profile — zero Python code changes.",
      "5 юрисдикцій з коробки (UA / DE / PL / US / KZ). Нова країна додається за ~2 години завантаженням одного JSON-профілю — без жодної зміни Python-коду."
    ),
  },
  {
    icon: Puzzle,
    title: bi("Plugin Architecture", "Плагінна Архітектура"),
    body: bi(
      "Today you look for VAT frauds, tomorrow you analyze medical certificates. Add new \u201CShields\u201D and risk \u201CTransistors\u201D as plugins just by updating config files.",
      "Сьогодні ви шукаєте ПДВ-скрутки, а завтра аналізуєте тендери. Додавайте нові \"Щити\" та \"Транзистори\" (радари ризиків) як плагіни."
    ),
  },
  {
    icon: Building,
    title: bi("47 MinJust Corporate Schemas", "47 корпоративних схем МінЮсту"),
    body: bi(
      "SABIR OrgRecon reconstructs the real org structure from 47 official Ministry of Justice corporate registry schemas — evidence-based, not interview-based.",
      "SABIR OrgRecon відновлює реальну оргструктуру на основі 47 офіційних корпоративних схем реєстру МінЮсту — за документами, а не за опитуваннями."
    ),
  },
];

function UniversalCore() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        eyebrow={t(bi("Universal Core", "Універсальне Ядро"))}
        title={t(bi("Universal Core (Zero-Code Scalability)", "Універсальне Ядро (Zero-Code Scalability)"))}
      />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {universalCore.map((c, i) => (
          <div key={i} className="glass glass-hover rounded-2xl p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
              <c.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-sm font-semibold text-white">{t(c.title)}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(c.body)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ */
/* ROI                                                           */
/* ============================================================ */

const roi: { metric: Bi; title: Bi; body: Bi }[] = [
  {
    metric: bi("20-50x", "20-50x"),
    title: bi("Time Savings", "Економія часу"),
    body: bi(
      "Weeks of manual reconciliation replaced by scalable batch processing.",
      "Тижні ручної звірки замінюються на пакетну машинну обробку."
    ),
  },
  {
    metric: bi("100%", "100%"),
    title: bi("100% Deterministic Verification", "100% детермінована верифікація"),
    body: bi(
      "Mathematical verification of dates, amounts & cross-document gaps — human error eliminated.",
      "Математична перевірка дат, сум і міждокументних розривів — людську помилку виключено."
    ),
  },
  {
    metric: bi("$0", "$0"),
    title: bi("Data Leakage Losses", "Втрат через витік даних"),
    body: bi(
      "Fully autonomous local execution with zero Cloud API usage.",
      "Повністю автономна локальна робота без Cloud API."
    ),
  },
];

function Roi() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <div className="grid gap-4 md:grid-cols-3">
        {roi.map((r, i) => (
          <div key={i} className="glass glass-hover rounded-2xl p-6 text-center">
            <div className="text-3xl font-semibold text-gradient-cyan" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>{t(r.metric)}</div>
            <div className="mt-2 text-sm font-semibold text-white">{t(r.title)}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(r.body)}</p>
          </div>
        ))}
      </div>
      <div className="glass mt-4 rounded-2xl p-5 text-center text-sm font-semibold leading-relaxed text-white">
        {t(bi(
          "214 automated regression tests · 26 risk transistors (16 FCE + 10 OrgRecon) · 7 fraud archetypes · 40+ forensic modules",
          "214 автоматизованих регрес-тестів · 26 транзисторів ризику (16 FCE + 10 OrgRecon) · 7 архетипів шахрайства · 40+ форензик-модулів"
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
  { icon: Calculator, title: bi("CFO Financial, Tax & Logistics Audit Package (3-Way Matching + TTN/CMR Validation)", "Аудиторський пакет для CFO та логістики (3-Way Matching + валідація ТТН/CMR)") },
  { icon: Presentation, title: bi("Board-Ready Presentation Package (Interactive Slides)", "Презентаційний пакет для Ради Директорів (інтерактивні слайди)") },
  { icon: Bot, title: bi("Interactive AI Co-Pilot (Grounded Q&A over verified datasets)", "AI Co-Pilot — живий чат по верифікованій базі фактів") },
  { icon: Fingerprint, title: bi("Cryptographic Proof Certificate (SHA-256 Tamper Seal)", "Криптографічна печатка цілісності (SHA-256 Tamper Seal)") },
  { icon: UsersRound, title: bi("OrgRecon HR Evidence Report (reconstructed org chart, ghost employees, duplicated functions)", "HR-звіт OrgRecon (відновлена оргструктура, «мертві душі», дублювання функцій)") },
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
  {
    key: "fintech",
    icon: Landmark,
    eyebrow: bi("FinTech & KYB", "FinTech та KYB"),
    title: bi("FinTech & KYB Automated Lending", "FinTech та автоматизоване KYB-кредитування"),
    body: bi(
      "Accelerates corporate borrower vetting, detecting hidden fraud schemes, nominee structures, and AML carousels in minutes.",
      "Прискорює перевірку корпоративних позичальників, виявляючи приховані шахрайські схеми, номінальні структури та AML-каруселі за хвилини."
    ),
    bullets: [
      bi("Automated KYB checks on charters and financial statements.", "Автоматизовані KYB-перевірки статутів та фінансової звітності."),
      bi("Detection of payment structuring below monitoring thresholds.", "Виявлення дроблення платежів під поріг фінмоніторингу."),
      bi("Nominee director and AML carousel signals before approval.", "Сигнали про номінальних директорів та AML-каруселі до видачі кредиту."),
    ],
  },
  {
    key: "supply",
    icon: Truck,
    eyebrow: bi("Supply Chain & Trade Finance", "Ланцюг постачання та Trade Finance"),
    title: bi("Supply Chain, Waybill & Trade Finance Audit", "Аудит логістики, ТТН та Trade Finance"),
    body: bi(
      "Scans waybills (TTN/CMR), invoices, and delivery acts to eliminate fake shipments, phantom carriers, and inventory fraud.",
      "Сканує ТТН/CMR, рахунки та акти, усуваючи \u201Cповітряні\u201D поставки, фантомних перевізників та махінації з залишками."
    ),
    bullets: [
      bi("3-way matching between contracts, invoices, statements and TTN/CMR waybills.", "3-Way Matching між договорами, рахунками, виписками та ТТН/CMR."),
      bi("Impossible transit speed and duplicate waybill detection.", "Виявлення неможливої швидкості доставки та дубльованих ТТН."),
      bi("Phantom carrier and VAT scheme flags.", "Позначки фантомних перевізників та схем із ПДВ."),
    ],
  },
  {
    key: "orgrecon",
    icon: Building,
    eyebrow: bi("HR Forensics & Org Design", "HR-форензік та оргдизайн"),
    title: bi("SABIR OrgRecon — Evidence-Based Org Reconstruction", "SABIR OrgRecon — документальна реконструкція оргструктури"),
    body: bi(
      "Rebuilds the real organizational structure from orders, payroll records, proxies and 47 MinJust corporate schemas — then runs 10 HR risk transistors over it, including 4 court-grade detectors that produce admissible evidence.",
      "Відновлює реальну оргструктуру з наказів, зарплатних відомостей, довіреностей та 47 корпоративних схем МінЮсту — і проганяє її через 10 HR-транзисторів ризику, зокрема 4 детектори судового рівня, що дають прийнятні докази."
    ),
    bullets: [
      bi("Ghost employees and payroll anomalies detected against documentary evidence.", "«Мертві душі» та аномалії фонду оплати праці, підтверджені документами."),
      bi("Dual reporting lines, functional duplication and span-of-control bottlenecks.", "Подвійне підпорядкування, дублювання функцій та перевантаження керівників."),
      bi("Shadow influencers: informal decision power that never appears on the official chart.", "Тіньові впливи: неформальна влада, якої немає в офіційній схемі."),
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
        title={t(bi("Four ways to engage with SABIR VAULT.", "Чотири способи співпраці з SABIR VAULT."))}
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
        <DeployCard
          icon={Handshake}
          model="partner"
          tag={t(bi("Retainer", "Ретейнер"))}
          title={t(bi("HR & Advisory Partnership", "HR та консалтингове партнерство"))}
          body={t(bi(
            "An ongoing retainer for HR, legal and advisory teams: recurring OrgRecon reconstructions, quarterly risk re-scans, and white-label pre-audit delivery to your own clients.",
            "Постійний ретейнер для HR, юридичних та консалтингових команд: регулярні реконструкції OrgRecon, щоквартальні пересканування ризиків і пре-аудит під вашим брендом для ваших клієнтів."
          ))}
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
  { icon: EyeOff, title: bi("Zero-Leak DLP Anonymizer — 274 ➔ 0 PII leaks on a real 56-document dossier", "Анонімізатор Zero-Leak DLP — 274 ➔ 0 витоків PII на реальному досьє з 56 документів") },
  { icon: Brain, title: bi("Human-Gated Silent Learning (no model update without operator approval)", "Тихе самонавчання з людським контролем (без затвердження оператора модель не оновлюється)") },
  { icon: Building, title: bi("SABIR OrgRecon on 47 MinJust corporate schemas", "SABIR OrgRecon на 47 корпоративних схемах МінЮсту") },
  { icon: Camera, title: bi("Multimodal Evidence: ATM photo captures + audio interrogation transcripts", "Мультимодальні докази: фотофіксації банкоматів та стенограми аудіозаписів") },
  { icon: Zap, title: bi("26 Behavioral Risk Transistors (16 FCE + 10 OrgRecon)", "26 поведінкових транзисторів ризику (16 FCE + 10 OrgRecon)") },
  { icon: Server, title: bi("100% air-gapped on-premise execution on a dedicated hardware appliance", "100% автономне локальне виконання на виділеному апаратному модулі") },
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
        <div className="glass mt-4 rounded-2xl p-5 text-center text-sm font-semibold leading-relaxed text-white">
          {t(bi(
            "26 risk transistors · 6 coverage vectors · 47 MinJust schemas · 274 ➔ 0 PII leaks · 48-hour reality map · 0 cloud calls",
            "26 транзисторів ризику · 6 векторів покриття · 47 схем МінЮсту · 274 ➔ 0 витоків PII · карта реальності за 48 годин · 0 звернень до хмари"
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
          <span className="ml-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-muted-foreground">v7.5-hybrid</span>
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
