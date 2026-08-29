import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang, bi, type Bi } from "@/lib/i18n";
import { useContactDialog } from "@/components/ContactDialog";
import {
  Users, Network, Wallet, FileText, Scale, Clock, FolderOpen, Brain,
  Lock, Key, UserCheck, ShieldCheck, Zap, Calculator, Play,
} from "lucide-react";

export const Route = createFileRoute("/security-service")({
  head: () => ({
    meta: [
      { title: "SABIR VAULT for Security Service | Internal Control & Fraud Signals" },
      { name: "description", content: "SABIR VAULT helps Security Service officers detect hidden related parties, shell chains, asset stripping, and fictitious liabilities — with deterministic, air-gapped forensics." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sabirvault.com/security-service" },
      { property: "og:title", content: "SABIR VAULT for Security Service & Internal Control" },
      { property: "og:description", content: "Detect fraud signals and hidden connections in document archives. Human-in-the-loop, 100% air-gapped, deterministic evidence." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SABIR VAULT for Security Service & Internal Control" },
      { name: "twitter:description", content: "Detect fraud signals and hidden connections in document archives. Human-in-the-loop, 100% air-gapped, deterministic evidence." },
    ],
    links: [{ rel: "canonical", href: "https://sabirvault.com/security-service" }],
  }),
  component: SecurityServicePage,
});

/* ---------------- data ---------------- */

const detectionCards: {
  icon: any;
  badge: Bi;
  title: Bi;
  pain: Bi;
  detection: Bi;
  proof: Bi;
}[] = [
  {
    icon: Users,
    badge: bi("Related Persons Graph", "Граф зв'язків"),
    title: bi("Related Persons Without Formal Ties", "Пов'язані особи без формальних зв'язків"),
    pain: bi(
      "Relatives and acquaintances own assets — but this doesn't appear in registries.",
      "Родичі та знайомі володіють активами — але в реєстрах цього немає."
    ),
    detection: bi(
      "Reveals family chains through certificates, marriages, passports; hidden beneficiaries through spouses' relatives (proxy hop).",
      "Виявляє родинні ланцюги через свідоцтва, шлюби, паспорти; прихованих бенефіціарів через родичів подружжя."
    ),
    proof: bi(
      "who_is_who_recon_engine + \"Mother-in-law millionaire\" model • 5 satellite tests",
      "who_is_who_recon_engine + модель «Теща-мільйонер» • 5 сателіт-тестів"
    ),
  },
  {
    icon: Network,
    badge: bi("Scheme Archetype", "Архетип схеми"),
    title: bi("Shell Company Chains", "Ланцюги компаній-прокладок"),
    pain: bi(
      "Money circulates through five LLCs and disappears.",
      "Гроші ходять колом через п'ять ТОВ і зникають."
    ),
    detection: bi(
      "Identifies transit chains, circular transactions, networks of shell companies as a single scheme archetype.",
      "Виявляє транзитні ланцюги, кругові транзакції, мережі фіктивних компаній як єдиний архетип схеми."
    ),
    proof: bi(
      "Forensic Circuit Engine • Shell Company Network archetype • Voltage ≥60V = BLOCKED",
      "Forensic Circuit Engine • архетип Shell Company Network • напруга ≥60V = BLOCKED"
    ),
  },
  {
    icon: Wallet,
    badge: bi("Formally Proven", "Доведено формально"),
    title: bi("Asset Stripping Before Default", "Вивід активів перед дефолтом"),
    pain: bi(
      "On the eve of bankruptcy, assets were sold for pennies.",
      "Напередодні банкрутства майно розпродано за копійки."
    ),
    detection: bi(
      "Identifies sales below 30% market value within 90 days of default — direct basis under Art. 42 of the Bankruptcy Code.",
      "Виявляє продаж нижче 30% ринкової вартості за <90 днів до дефолту — пряма підстава ст. 42 КУзПБ."
    ),
    proof: bi(
      "exhaustive_asset_model • 12 states proven by complete enumeration",
      "exhaustive_asset_model • 12 станів доведено повним перебором"
    ),
  },
  {
    icon: FileText,
    badge: bi("Formally Proven", "Доведено формально"),
    title: bi("Fictitious Liabilities & Promissory Notes", "Фіктивні зобов'язання та векселі"),
    pain: bi(
      "A debt suddenly appeared on a promissory note nobody had seen.",
      "Раптом з'явився борг за векселем, якого ніхто не бачив."
    ),
    detection: bi(
      "Air money — debts without bank trace, multiple promissory notes before bankruptcy.",
      "Повітряні гроші — борги без банківського сліду, множинні векселі перед банкрутством."
    ),
    proof: bi(
      "exhaustive_airmoney_model • 15 states • 3 flags + timing + multiplicity",
      "exhaustive_airmoney_model • 15 станів • 3 прапори + таймінг + кратність"
    ),
  },
  {
    icon: Scale,
    badge: bi("Delta Monitoring", "Дельта-моніторинг"),
    title: bi("Conflict of Interest & Change of Control", "Конфлікт інтересів та зміна контролю"),
    pain: bi(
      "The director was changed a month before default — coincidence?",
      "Директора змінили за місяць до дефолту — і це випадковість?"
    ),
    detection: bi(
      "Events of director changes, new related parties, new counterparties between audits — automatic delta.",
      "Події зміни директорів, нові пов'язані особи, нові контрагенти між аудитами — автоматична дельта."
    ),
    proof: bi(
      "delta_reporter • 4 change types • mutation tests 5/5",
      "delta_reporter • 4 типи змін • мутаційні тести 5/5"
    ),
  },
  {
    icon: Clock,
    badge: bi("Formally Proven", "Доведено формально"),
    title: bi("Anomalous Date Sequences", "Аномальні послідовності дат"),
    pain: bi(
      "The signature was placed after the signatory's death.",
      "Підпис поставили після смерті підписанта."
    ),
    detection: bi(
      "Signatures after death/dismissal, control changes outside M&A window — timeline is never violated.",
      "Підписи після смерті/звільнення, зміни контролю поза вікном M&A — стріла часу не порушується."
    ),
    proof: bi(
      "exhaustive_time_model T1/T2 • 16 states • constitutional invariant",
      "exhaustive_time_model T1/T2 • 16 станів • конституційний інваріант"
    ),
  },
  {
    icon: FolderOpen,
    badge: bi("Gap Analysis", "Gap-аналіз"),
    title: bi("Missing Mandatory Documents", "Відсутність обов'язкових документів"),
    pain: bi(
      "The dossier lacks work completion certificates — but payments were made.",
      "У досьє немає актів виконаних робіт — але платежі йшли."
    ),
    detection: bi(
      "Gap \"payment without act\", missing documents from mandatory checklist.",
      "Розрив «платіж без акта», відсутні документи з обов'язкового переліку."
    ),
    proof: bi(
      "kernel_aggregator Gap Analysis • cash gap example: 13.5M UAH",
      "kernel_aggregator Gap Analysis • касовий розрив: 13.5M грн"
    ),
  },
  {
    icon: Brain,
    badge: bi("Human-in-the-Loop", "Human-in-the-Loop"),
    title: bi("Hallucination & Data Poisoning Protection", "Захист від галюцинацій та отруєння бази"),
    pain: bi(
      "What if your AI hallucinates and blocks a legitimate deal?",
      "А якщо ваш ШІ сам щось вигадає і заблокує легальну угоду?"
    ),
    detection: bi(
      "The system learns from your documents (Self-Healing), but NO rule is applied without your officer's click. Core runs in Read-Only mode.",
      "Система навчається на ваших документах (Self-Healing), але ЖОДНЕ правило не застосовується без кліка вашого офіцера. Core-ядро працює в режимі Read-Only."
    ),
    proof: bi(
      "Self-Healing GUI • Assisted Learning • EU AI Act compliance",
      "Self-Healing GUI • Assisted Learning • Відповідність EU AI Act"
    ),
  },
];

const securityPoints: { icon: any; text: Bi }[] = [
  {
    icon: Lock,
    text: bi(
      "100% air-gapped. No cloud API, no data leaves the perimeter.",
      "100% air-gapped. Жодного хмарного API, жодного виходу даних за периметр."
    ),
  },
  {
    icon: Key,
    text: bi(
      "Demo Mode. Pilot runs on synthetic twins — real dossiers never leave the vault.",
      "Demo Mode. Пілот запускається на синтетичних двійниках — реальні досьє не покидають сейф."
    ),
  },
  {
    icon: UserCheck,
    text: bi(
      "Human-in-the-loop. The system prepares the scenario; the decision remains with the SB officer.",
      "Human-in-the-loop. Система готує сюжет і докази; рішення лишається за офіцером СБ."
    ),
  },
  {
    icon: Scale,
    text: bi(
      "Compliance by design. Deterministic core + immutable audit trail = EU AI Act compliance.",
      "Compliance by design. Детерміноване ядро + незмінний audit trail = відповідність EU AI Act."
    ),
  },
];

const roiCards: { value: Bi; label: Bi; icon: any }[] = [
  {
    value: bi("20-50x", "20-50x"),
    label: bi(
      "Time savings per investigation (2 weeks → 30 min)",
      "Економія часу на розслідування (2 тижні → 30 хв)"
    ),
    icon: Zap,
  },
  {
    value: bi("100%", "100%"),
    label: bi(
      "Mathematical elimination of human error in date and amount reconciliation",
      "Математичне виключення людського фактору при звірці дат і сум"
    ),
    icon: Calculator,
  },
  {
    value: bi("$0", "$0"),
    label: bi(
      "Data leakage losses (no Cloud API usage)",
      "Втрат через витік даних (Cloud API не використовується)"
    ),
    icon: ShieldCheck,
  },
];

/* ---------------- helpers ---------------- */

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

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#38bdf8]">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>{title}</h2>
    </div>
  );
}

/* ---------------- page ---------------- */

function SecurityServicePage() {
  const { t } = useLang();
  const { open } = useContactDialog();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090d16] text-foreground">
      <Header />
      <main>
        <Hero />
        <DetectionGrid />
        <SecurityBlock />
        <RoiSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const { t } = useLang();
  const { open } = useContactDialog();
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090d16]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-[#38bdf8] to-[#f59e0b]">
            <div className="h-3 w-3 rounded-sm bg-[#090d16]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-[0.2em] text-white">SABIR VAULT</span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.32em] text-muted-foreground/70">Digital Dossiers</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="/#pillars" className="hover:text-white transition">{t(bi("Platform", "Платформа"))}</a>
          <a href="/#pipeline" className="hover:text-white transition">{t(bi("Workflow", "Конвеєр"))}</a>
          <a href="/#solutions" className="hover:text-white transition">{t(bi("Solutions", "Рішення"))}</a>
          <a href="/#deployment" className="hover:text-white transition">{t(bi("Engagement", "Співпраця"))}</a>
          <Link to="/security-service" className="text-white transition">{t(bi("For Security Service", "Для СБ"))}</Link>
          <Link to="/whitepaper" className="hover:text-white transition">{t(bi("White Paper", "Верифікація"))}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <button
            type="button"
            onClick={() => open({ model: "pilot" })}
            className="rounded-md bg-[#38bdf8] px-4 py-2 text-xs font-semibold text-[#090d16] hover:bg-[#7dd3fc] transition"
          >
            {t(bi("🔓 Start a Pre-Audit", "🔓 Запустити Пре-аудит"))}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#38bdf8]/[0.06] to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
            <span className="tracking-wide">{t(bi("Internal Control & Fraud Signals", "Внутрішній контроль та сигнали шахрайства"))}</span>
          </div>
          <h1 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-white break-words sm:text-5xl md:text-6xl" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
            {t(bi("🛡️ SABIR VAULT for Security Service & Internal Control", "🛡️ SABIR VAULT для СБ та внутрішнього контролю"))}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground break-words md:text-lg">
            {t(bi(
              "The system does not render verdicts — it identifies signs and connections that require mandatory verification, presenting them to the Security Officer as ready-made investigation scenarios with primary evidence.",
              "Система не виносить вердиктів — вона виявляє ознаки та зв'язки, які потребують обов'язкової перевірки, і подає їх офіцеру СБ готовим сюжетом розслідування з первинними доказами."
            ))}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => open({ title: t(bi("Request Demo", "Запитати демо")), model: "pilot" })}
              className="group inline-flex items-center gap-2 rounded-md bg-[#38bdf8] px-6 py-3 text-sm font-semibold text-[#090d16] shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)] hover:bg-[#7dd3fc] transition"
            >
              <Play className="h-4 w-4" />
              {t(bi("🎬 Request Demo", "🎬 Запитати демо"))}
            </button>
            <button
              type="button"
              onClick={() => open({ model: "pilot" })}
              className="glass glass-hover inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white"
            >
              {t(bi("🔓 Start a Pre-Audit ➔", "🔓 Розпочати Пре-Аудит ➔"))}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetectionGrid() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <SectionHeader
        eyebrow={t(bi("Detection Scenarios", "Сценарії виявлення"))}
        title={t(bi("8 Signal Types the System Flags Automatically", "8 типів сигналів, які система виявляє автоматично"))}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {detectionCards.map((card, i) => (
          <div key={i} className="glass glass-hover flex flex-col rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
                <card.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#38bdf8]">
                  {t(card.badge)}
                </div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-white md:text-xl">{t(card.title)}</h3>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm leading-relaxed">
              <div>
                <span className="font-semibold text-[#f59e0b]">{t(bi("Pain:", "Проблема:"))}</span>{" "}
                <span className="text-muted-foreground italic">{t(card.pain)}</span>
              </div>
              <div>
                <span className="font-semibold text-[#38bdf8]">{t(bi("Detection:", "Виявлення:"))}</span>{" "}
                <span className="text-muted-foreground">{t(card.detection)}</span>
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span className="text-white/90">{t(card.proof)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SecurityBlock() {
  const { t } = useLang();
  return (
    <section className="relative border-y border-white/5 bg-[#0b0f19]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeader
          eyebrow={t(bi("Security & Compliance", "Безпека та відповідність"))}
          title={t(bi("Built for Sensitive Perimeters", "Побудовано для чутливих периметрів"))}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {securityPoints.map((p, i) => (
            <div key={i} className="glass flex items-start gap-4 rounded-xl p-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#f59e0b]/10 text-[#f59e0b]">
                <p.icon className="h-5 w-5" />
              </div>
              <p className="text-sm leading-relaxed text-white/90">{t(p.text)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoiSection() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        eyebrow={t(bi("Impact", "Ефективність"))}
        title={t(bi("Operational ROI for Security Units", "Операційна ефективність для підрозділів СБ"))}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {roiCards.map((r, i) => (
          <div key={i} className="glass glass-hover rounded-2xl p-6 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#38bdf8]/10 text-[#38bdf8]">
              <r.icon className="h-6 w-6" />
            </div>
            <div className="mt-4 text-3xl font-bold tracking-tight text-white">{t(r.value)}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(r.label)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  const { t } = useLang();
  const { open } = useContactDialog();
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div className="glass relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#f59e0b]/10 blur-3xl" />
        <div className="relative">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
            {t(bi("See the system live — without risk to your data", "Побачте систему наживо — без ризику для ваших даних"))}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t(bi(
              "Demo on synthetic dossier: 295 documents, hidden debt of 3,000,000 UAH found, delta between two audits — in 2 minutes.",
              "Демо на синтетичному досьє: 295 документів, знайдена прихована заборгованість 3 000 000 грн, дельта змін між двома аудитами — за 2 хвилини."
            ))}
          </p>
          <button
            type="button"
            onClick={() => open({ title: t(bi("Request Demo", "Запитати демо")), model: "pilot" })}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#090d16] hover:bg-[#fbbf24] transition"
          >
            <Play className="h-4 w-4" />
            {t(bi("🎬 Request Demo", "🎬 Запитати демо"))}
          </button>
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
          <a href="mailto:contact@sabirvault.com" className="hover:text-white transition">contact@sabirvault.com</a>
          <Link to="/privacy" className="hover:text-white transition">{t(bi("Privacy Policy", "Політика конфіденційності"))}</Link>
          <Link to="/whitepaper" className="hover:text-white transition">{t(bi("White Paper", "Верифікація"))}</Link>
          <Link to="/security-service" className="hover:text-white transition">{t(bi("For Security Service", "Для СБ"))}</Link>
        </div>
      </div>
    </footer>
  );
}
