import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft, Target, Microscope, Eye, ShieldAlert, Link2, Route as RouteIcon,
  Globe, UserCheck, Zap, BarChart3, Cpu, Calculator,
} from "lucide-react";
import { useLang, bi, type Bi } from "@/lib/i18n";
import { useContactDialog } from "@/components/ContactDialog";

export const Route = createFileRoute("/whitepaper")({
  head: () => ({
    meta: [
      { title: "Verification White Paper v2.7 — SABIR VAULT" },
      { name: "description", content: "How SABIR VAULT proves its deterministic forensic engine is mathematically correct: 5-tier verification architecture, 376+ automated checks, zero hallucinations." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://sabirvault.com/whitepaper" },
      { property: "og:title", content: "Verification White Paper v2.7 — SABIR VAULT" },
      { property: "og:description", content: "5-tier verification architecture, 376+ automated checks in under 2 seconds, 100% air-gapped deterministic forensic kernel." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Verification White Paper v2.7 — SABIR VAULT" },
      { name: "twitter:description", content: "5-tier verification architecture, 376+ automated checks, zero hallucinations." },
    ],
    links: [{ rel: "canonical", href: "https://sabirvault.com/whitepaper" }],
  }),
  component: WhitePaperPage,
});

/* ---------------- data ---------------- */

const tiers: { title: Bi; body: Bi }[] = [
  { title: bi("🧮 Exhaustive Models", "🧮 Exhaustive Models"), body: bi("141 states (<0.1s) — Mathematical Proof", "141 стан (<0.1 с) — Математичний доказ") },
  { title: bi("🛰️ Satellite Suite", "🛰️ Satellite Suite"), body: bi("32 mini-dossiers (<0.2s) — Behavioral Scenarios", "32 міні-досьє (<0.2 с) — Поведінкові сценарії") },
  { title: bi("🧪 Core Test Suite", "🧪 Core Test Suite"), body: bi("199 unit tests in 0.84s — Algorithmic Integrity", "199 юніт-тестів за 0.84 с — Цілісність алгоритмів") },
  { title: bi("🏛️ Constitutional Guards", "🏛️ Constitutional Guards"), body: bi("4 invariants — Regression Shields", "4 інваріанти — Захисні щити") },
  { title: bi("📊 Macro Benchmarks", "📊 Macro Benchmarks"), body: bi("2 cases / 800 documents — End-to-End Validation", "2 кейси / 800 документів — Наскрізна валідація") },
];

const comparison: { dim: Bi; conv: Bi; sv: Bi }[] = [
  { dim: bi("Role of AI", "Роль ШІ"), conv: bi("Generates opinions (hallucinations)", "Генерує суб'єктивні думки (галюцинує)"), sv: bi("Strictly OCR/Perception (reading only)", "Виключно OCR-сенсор (лише зчитування)") },
  { dim: bi("AI Model", "Модель ШІ"), conv: bi("Cloud-based, opaque", "Хмарна, непрозора, неконтрольована"), sv: bi("9B local Vision-LLM (transparent)", "Локальна 9B Vision-LLM (прозора, on-prem)") },
  { dim: bi("Decision Engine", "Рушій рішень"), conv: bi("Probabilistic black box", "Ймовірнісний чорний ящик"), sv: bi("100% Deterministic Discrete Math", "100% детермінована дискретна математика") },
  { dim: bi("Verification", "Верифікація"), conv: bi("Empirical / Sample-based", "Емпірична / на вибіркових прикладах"), sv: bi("Formal Proof by Exhaustion (141 states)", "Формальний доказ вичерпністю (141 стан)") },
  { dim: bi("Evidence Trace", "Доказова база"), conv: bi("Unverifiable narrative", "Неперевірюваний текст"), sv: bi("SHA-256 + Blockchain-anchored logs", "Криптографічні логи SHA-256 + блокчейн") },
  { dim: bi("Privacy", "Конфіденційність"), conv: bi("Cloud API (data leaks)", "Хмарні API (ризик витоку банківської таємниці)"), sv: bi("100% Air-Gapped / Zero-Cloud", "100% Air-Gapped / Zero-Cloud (15 Ват заліза)") },
  { dim: bi("Security", "Безпека файлів"), conv: bi("None", "Відсутня"), sv: bi("Sandbox + ClamAV Antivirus protection", "Ізольований пісочничний ClamAV-карантин") },
  { dim: bi("Automated Checks", "Автоперевірки"), conv: bi("None / Ad-hoc", "Відсутні / ручні"), sv: bi("376+ tests in <2 seconds", "376+ тестів менш ніж за 2 секунди") },
];

const vision: Bi[] = [
  bi("**Adaptive Autofocus:** Dynamic sharpness & contrast enhancement (0.005 sec)", "**Адаптивний автофокус:** Динамічне підсилення чіткості та контрасту (0.005 с)"),
  bi("**Smart Document Crop:** Auto-detect and crop A4 documents (0.003 sec)", "**Розумний кропер А4:** Автовирізання полів та шаблонів (0.003 с)"),
  bi("**Handwriting OCR:** 9B Vision-LLM fine-tuned for legal docs (<1 sec)", "**Розпізнавання почерку:** Локальна 9B Vision-LLM для складних заяв (<1 с)"),
  bi("**Stamp Detection:** pHash + visual feature matching (0.02 sec)", "**Детекція печаток:** pHash + зіставлення візуальних дескрипторів (0.02 с)"),
  bi("**Native Excel Parser:** Direct table extraction without OCR (0.1 sec)", "**Нативний Excel-парсер:** Пряме зчитування таблиць без OCR (0.1 с)"),
];

const ingestion: Bi[] = [
  bi("🔒 Isolated Sandbox — Zero system access during unpacking", "🔒 Ізольований карантин — нульовий доступ до системи під час розпаковки"),
  bi("🦠 Antivirus Scanning — ClamAV + macro exploit detection", "🦠 Антивірусний скан — ClamAV-перевірка кожного файлу на льоту"),
  bi("📦 Secure Archive Support — ZIP, RAR, 7z, TAR, GZ, BZ2 with Zip-Bomb & Zip-Slip protection", "📦 Підтримка архівів — безпечний прийом ZIP, RAR, 7z, TAR, GZ, BZ2 із захистом від Zip-Bomb та Zip-Slip"),
  bi("🚫 Executable Block — Auto-block PE/Mach-O/ELF files", "🚫 Блокування загроз — автоматичне відсікання виконуваних файлів (EXE/Mach-O/ELF)"),
];

const anchoring: Bi[] = [
  bi("🔐 SHA-256 Hashing — Cryptographic proof of evidence", "🔐 Хешування SHA-256 — цифровий доказ незмінності документа"),
  bi("⛓️ Public Verification — Immutable proof of existence", "⛓️ Публічна перевірка — фіксація незмінного аудит-сліду"),
  bi("📜 Audit Trail — Every decision linked to source file + line number", "📜 Аудит-слід — кожне рішення пов'язане з номером сторінки та цитатою з першоджерела"),
  bi("⚖️ Court Admissible — Legal-grade evidence preservation", "⚖️ Судова допустимість — відповідність стандартам електронних доказів"),
];

const routes: Bi[] = [
  bi("**Financial Mismatch** — Payment vs Invoice vs Act reconciliation (gap detection)", "**Грошовий розрив (Financial Mismatch)** — тристороння звірка: Платіж ↔ Інвойс ↔ Акт"),
  bi("**Ownership Change** — Control shifts within 120 days before deal", "**Зміна контролю (Ownership Change)** — зміна директора або часток за ≤ 120 днів до угоди"),
  bi("**Related Party Chain** — Multi-hop entity relationship graphs", "**Пов'язані особи (Related Party Chain)** — багатоланцюжкові графи через родину та номіналів"),
  bi("**Signature Conflict** — Documents signed after dismissal or death", "**Парадокс підписанта (Signature Conflict)** — документи, підписані після звільнення або смерті"),
  bi("**Debt Concealment** — Fictitious promissory notes before bankruptcy", "**Фіктивні борги (Debt Concealment)** — беззаставні векселі напередодні банкрутства"),
  bi("**Asset Stripping** — Below-market asset sales before default", "**Скид активів (Asset Stripping)** — продаж майна з дисконтом >70% перед дефолтом"),
];

const jurisdictions: Bi[] = [
  bi("🇺🇦 Ukraine (UA) — EDR, RNOKPP, Family Code (Art. 260)", "🇺🇦 Україна (UA) — ЄДР, РНОКПП, Сімейний кодекс (ст. 260)"),
  bi("🇺🇸 USA — IRS, UCC, Delaware LLC", "🇺🇸 США (US) — IRS, UCC, Delaware LLC"),
  bi("🇩🇪 Germany — Handelsregister, BGB (§ 873, § 1565)", "🇩🇪 Німеччина (DE) — Handelsregister, BGB (§ 873, § 1565)"),
  bi("🇵🇱 Poland — KRS, NIP/PESEL, Sp. z o.o.", "🇵🇱 Польща (PL) — KRS, NIP/PESEL, Sp. z o.o."),
  bi("🇰🇿 Kazakhstan — BIN/IIN, register", "🇰🇿 Казахстан (KZ) — БІН/ІІН, ТОО, реєстри юстиції"),
];

const hitl: Bi[] = [
  bi("**Scout Recon:** Auto-deduplicate, extract all entities (Automated)", "**Автономний скан (Scout Recon):** Дедуплікація, вилучення всіх сутностей та графів (Автоматично)"),
  bi("**Review Workbench:** Confirm Anchor, Spouse, Director, Signals (2–3 min)", "**Органайзер (Review Workbench):** Підтвердження Якоря, подружжя, директорів та схем (2–3 хв)"),
  bi("**Evidence Export:** Generate HTML dashboard + Court Dossier (3 sec)", "**Експорт досьє:** Генерація інтерактивного HTML-дашборду та судового звіту (3 сек)"),
];

const airgap: Bi[] = [
  bi("🔒 Zero-Cloud Security: No client data ever leaves the office", "🔒 100% Air-Gapped: Працює повністю локально, дані клієнта не залишають офіс"),
  bi("⚡ 15W Power Consumption: Runs on compact enterprise hardware (Apple Mac mini M2)", "⚡ 15 Ват споживання: Працює на компактному Apple Mac mini M2 (16 GB)"),
  bi("🔋 17 hours autonomy during blackouts via portable power station", "🔋 17 годин автономії під час блекаутів від невеликої зарядної станції"),
  bi("💰 500 documents processed for $0.31 electricity vs $30–50 in cloud APIs", "💰 500 документів за 31 копійку електрики замість $30–50 у хмарі"),
];

const benchmarks: Bi[] = [
  bi("**Industrial M&A Fraud (500 docs / 7 traps):** ✅ 7/7 signals + 6/6 routes", "**M&A аудит заводу (500 файлів / 7 пасток):** ✅ 7/7 сигналів + 6/6 сюжетів"),
  bi("**Corporate Bankruptcy (300 docs / 7 schemes):** ✅ 6/6 routes + 5M note detection", "**Банкрутство підприємства (300 файлів / 7 схем):** ✅ 6/6 сюжетів + вексель 5М"),
];

/* ---------------- helpers ---------------- */

function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-white">{p}</strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

function Card({
  icon: Icon, title, children,
}: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <section className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-[#38bdf8]/30 hover:bg-white/[0.03] md:p-8">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#38bdf8]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <div
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#38bdf8]/20 bg-[#38bdf8]/10 text-[#38bdf8]"
          style={{ boxShadow: "0 0 30px -10px rgba(56,189,248,0.5)" }}
        >
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold tracking-tight text-white md:text-xl">{title}</h2>
          <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
        </div>
      </div>
    </section>
  );
}

function List({ items }: { items: Bi[] }) {
  const { t } = useLang();
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5 break-words">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#38bdf8]" />
          <span><Rich text={t(it)} /></span>
        </li>
      ))}
    </ul>
  );
}

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

/* ---------------- page ---------------- */

function WhitePaperPage() {
  const { t } = useLang();
  const { open } = useContactDialog();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090d16] text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0e18]/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#38bdf8] to-[#f59e0b]">
              <div className="h-2.5 w-2.5 rounded-sm bg-[#090d16]" />
            </div>
            <span className="text-xs font-semibold tracking-[0.25em] text-white">SABIR VAULT</span>
          </Link>
          <div className="flex items-center gap-3">
            <LangSwitcher />
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-white transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t(bi("Back to Home", "На головну"))}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#38bdf8]">
          {t(bi("Verification White Paper", "Маніфест верифікації"))}
        </div>
        <h1
          className="mt-4 text-3xl font-semibold tracking-tight text-white break-words sm:text-4xl md:text-5xl"
          style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}
        >
          {t(bi("🏛️ SABIR VAULT — Verification White Paper", "🏛️ SABIR VAULT — Публічний маніфест верифікації"))}
        </h1>
        <blockquote className="mt-6 border-l-2 border-[#38bdf8]/50 pl-4 text-sm leading-relaxed text-white/80 md:text-base">
          {t(bi(
            "How we prove our Deterministic Forensic Engine is mathematically correct — not just empirically tested",
            "Як ми доводимо математичну коректність нашого форензик-рушія — замість звичайних ймовірнісних тестів"
          ))}
        </blockquote>
        <div className="mt-3 text-xs italic text-muted-foreground/70">
          {t(bi("Version 2.7-PUBLIC | August 2026", "Версія 2.7-PUBLIC | Серпень 2026"))}
        </div>

        <div className="mt-12 space-y-4">
          <Card icon={Target} title={t(bi("🎯 Executive Summary", "🎯 Головне резюме"))}>
            <p className="break-words">
              <Rich text={t(bi(
                "SABIR VAULT is a **deterministic neuro-symbolic forensic engine** for corporate due diligence, M&A audit, and financial fraud investigation.",
                "SABIR VAULT — це **детермінований нейро-символічний форензик-рушій** для корпоративного Due Diligence, M&A-аудиту та розслідування фінансових схем."
              ))} />
            </p>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#38bdf8]">
              {t(bi(
                "💡 Core Architectural Principle: AI Reads, Deterministic Code Decides",
                "💡 Базовий архітектурний принцип: ШІ читає, детермінований код вирішує"
              ))}
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white">
                  <Eye className="h-3.5 w-3.5 text-[#38bdf8]" />
                  {t(bi("Perception Layer", "Шар сприйняття"))}
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  <Rich text={t(bi(
                    "Powered by a **9-billion-parameter Vision-LLM** running 100% locally on-device. Strictly confined to OCR, handwriting recognition, stamp detection, and table extraction. **AI never makes legal or financial decisions.**",
                    "Локальна **мультимодальна Vision-LLM на 9 мільярдів параметрів**, що працює на 100% автономно на залізі клієнта. Вона виключно зчитує рукописи, печатки, таблиці та складні скани. **ШІ ніколи не ухвалює правових чи фінансових рішень.**"
                  ))} />
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white">
                  <Calculator className="h-3.5 w-3.5 text-[#f59e0b]" />
                  {t(bi("Deterministic Forensic Kernel", "Детерміноване ядро"))}
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  <Rich text={t(bi(
                    "100% of entity resolution, graph topologies, financial reconciliations, and fraud detections are executed by formal mathematical algorithms with **zero probabilistic hallucinations**.",
                    "100% розпізнавання сутностей, побудови графів, перевірки біологічних інваріантів, фінансових розривів та виявлення шахрайства виконуються дискретними алгоритмами з **нульовою ймовірністю галюцинацій**."
                  ))} />
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm">
              {t(bi("Our testing stack has 5 layers of guarantee:", "Стек перевірки має 5 рівнів гарантії:"))}
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {tiers.map((tier, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-sm font-semibold text-white">{t(tier.title)}</div>
                  <div className="mt-1 text-xs leading-relaxed">{t(tier.body)}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-[#f59e0b]/25 bg-[#f59e0b]/[0.06] p-4 text-sm font-semibold text-white">
              {t(bi(
                "Result: 376+ automated checks on every commit. Total execution <2 seconds. Zero known regression in production.",
                "Результат: 376+ автоматичних перевірок на кожному коміті. Час перевірки <2 секунд. Нуль регресій у продакшені."
              ))}
            </div>
          </Card>

          <Card
            icon={Microscope}
            title={t(bi("🔬 Deterministic Architecture vs. Conventional AI", "🔬 Детермінована архітектура проти звичайного ШІ"))}
          >
            <div className="-mx-2 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-[#38bdf8]">
                    <th className="px-2 py-3 font-semibold">{t(bi("Dimension", "Критерій"))}</th>
                    <th className="px-2 py-3 font-semibold">{t(bi("Conventional AI", "Звичайний \"AI Wrapper\""))}</th>
                    <th className="px-2 py-3 font-semibold">SABIR VAULT</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 align-top">
                      <td className="px-2 py-3 font-semibold text-white">{t(row.dim)}</td>
                      <td className="px-2 py-3 text-muted-foreground">{t(row.conv)}</td>
                      <td className="px-2 py-3 font-medium text-white/90">{t(row.sv)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card icon={Cpu} title={t(bi("👁️ Computer Vision Pipeline", "👁️ Конвеєр комп'ютерного зору"))}>
            <List items={vision} />
            <p className="mt-4 text-xs italic text-muted-foreground/80">
              {t(bi("Supported formats:", "Підтримувані формати:"))} PDF, DOCX, JPG, PNG, WEBP, BMP, HEIC, XLSX, XLS, TXT.
            </p>
          </Card>

          <Card icon={ShieldAlert} title={t(bi("🛡️ Secure Document Ingestion (Zero-Trust)", "🛡️ Безпечний прийом документів (Zero-Trust)"))}>
            <List items={ingestion} />
          </Card>

          <Card icon={Link2} title={t(bi("🔗 Blockchain Evidence Anchoring", "🔗 Криптографічна фіксація доказів"))}>
            <List items={anchoring} />
          </Card>

          <Card icon={RouteIcon} title={t(bi("🛣️ Six Universal Investigation Routes", "🛣️ Шість універсальних сюжетів розслідування"))}>
            <ol className="space-y-2.5">
              {routes.map((r, i) => (
                <li key={i} className="flex gap-2.5 break-words">
                  <span className="text-xs font-semibold text-[#38bdf8]">{i + 1}.</span>
                  <span><Rich text={t(r)} /></span>
                </li>
              ))}
            </ol>
          </Card>

          <Card icon={Globe} title={t(bi("🌍 Multi-Jurisdictional Core", "🌍 Мульти-юрисдикційне ядро"))}>
            <p>{t(bi("Declarative JSON configurations for:", "Декларативні JSON-конфігурації для:"))}</p>
            <div className="mt-3"><List items={jurisdictions} /></div>
            <p className="mt-4 text-xs italic text-muted-foreground/80">
              {t(bi(
                "New jurisdiction added in 15 minutes via simple JSON config — no code changes.",
                "Нова юрисдикція додається за 15 хвилин через простий JSON-конфіг без зміни коду."
              ))}
            </p>
          </Card>

          <Card icon={UserCheck} title={t(bi("👤 Human-in-the-Loop Organizer", "👤 Робоче місце юриста (Human-in-the-Loop)"))}>
            <List items={hitl} />
          </Card>

          <Card icon={Zap} title={t(bi("⚡ Air-Gapped & Energy Efficient", "⚡ Енергоефективність та автономність"))}>
            <List items={airgap} />
          </Card>

          <Card icon={BarChart3} title={t(bi("📊 Benchmark Results", "📊 Результати бойових бенчмарків"))}>
            <List items={benchmarks} />
            <p className="mt-4 text-xs italic text-muted-foreground/80">
              {t(bi("100% deterministic reproducibility.", "100% детермінована повторюваність."))}
            </p>
          </Card>
        </div>

        <div className="mt-12 rounded-xl border border-[#38bdf8]/20 bg-gradient-to-br from-[#38bdf8]/[0.06] to-transparent p-6 text-center md:p-10">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#38bdf8]">
            {t(bi("Next Step", "Наступний крок"))}
          </div>
          <div className="mx-auto mt-3 max-w-xl text-base font-semibold text-white break-words">
            {t(bi(
              "Validate the engine on your own document archive.",
              "Перевірте рушій на власному архіві документів."
            ))}
          </div>
          <button
            type="button"
            onClick={() => open({ model: "pilot" })}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#38bdf8] px-6 py-3 text-sm font-semibold text-[#090d16] shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)] transition hover:bg-[#7dd3fc]"
          >
            {t(bi("🔓 Start a Pre-Audit", "🔓 Запустити Пре-аудит"))}
          </button>
        </div>
      </main>

      <footer className="border-t border-white/5 bg-[#0b0f19]">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} SABIR VAULT — {t(bi("All rights reserved.", "Усі права захищені."))}
        </div>
      </footer>
    </div>
  );
}
