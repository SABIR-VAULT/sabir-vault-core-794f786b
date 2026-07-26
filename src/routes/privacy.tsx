import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Database, Lock, Users, Scale, FileText, ArrowLeft } from "lucide-react";
import { useLang, bi, type Bi } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — SABIR VAULT" },
      { name: "description", content: "How SABIR VAULT collects, processes, and protects personal data submitted through enterprise inquiry forms." },
      { property: "og:title", content: "Privacy Policy — SABIR VAULT" },
      { property: "og:description", content: "Enterprise-grade privacy commitments: local processing, GDPR rights, and zero data commercialization." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

type Section = { icon: any; title: Bi; body: Bi };

const SECTIONS: Section[] = [
  {
    icon: ShieldCheck,
    title: bi("1. Overview & Data Controller", "1. Огляд та контролер даних"),
    body: bi(
      "SABIR VAULT (\"we\", \"us\") operates this website and enterprise inquiry channel. The data controller responsible for personal data collected through this site is SABIR VAULT, reachable at contact@sabirvault.com. This policy explains what we collect, why, and the rights you retain over your information.",
      "SABIR VAULT (\"ми\") керує цим вебсайтом та каналом корпоративних запитів. Контролером персональних даних, зібраних через цей сайт, є SABIR VAULT (contact@sabirvault.com). Ця політика пояснює, які дані ми збираємо, з якою метою, та які права ви зберігаєте щодо своєї інформації."
    ),
  },
  {
    icon: Database,
    title: bi("2. Information We Collect", "2. Які дані ми збираємо"),
    body: bi(
      "Through our contact and pilot request forms we collect: Full Name, Company Name, Work Email, Phone Number, selected engagement model, and any free-text message you choose to send. We do not use tracking cookies or third-party advertising pixels on this website.",
      "Через форми контакту та запиту пілоту ми збираємо: Повне ім'я, Назву компанії, Робочу пошту, Номер телефону, обрану модель співпраці та будь-яке повідомлення, надіслане у вільній формі. Ми не використовуємо трекінгові cookie або сторонні рекламні пікселі."
    ),
  },
  {
    icon: FileText,
    title: bi("3. Purpose of Processing", "3. Мета обробки"),
    body: bi(
      "Personal data is processed exclusively to (a) respond to your inquiry, (b) coordinate pilot projects and enterprise consulting engagements, (c) send contract or onboarding materials once you request them, and (d) satisfy legal and regulatory obligations. Legal basis: your consent and legitimate business interest under GDPR Art. 6(1)(a) and (f).",
      "Персональні дані обробляються виключно для: (a) відповіді на ваш запит, (b) координації пілотних проєктів і корпоративного консалтингу, (c) надсилання договірних або онбординг-матеріалів на ваш запит, (d) виконання правових та регуляторних зобов'язань. Правова підстава: ваша згода та законний інтерес бізнесу згідно з ст. 6(1)(a) та (f) GDPR."
    ),
  },
  {
    icon: Lock,
    title: bi("4. Data Security & Encryption Standards", "4. Безпека даних та шифрування"),
    body: bi(
      "All form submissions are transmitted over TLS 1.2+. Stored inquiry data is encrypted at rest with AES-256, access is limited to authorized personnel under least-privilege controls, and audit logs are retained for accountability. Client document archives processed under a pilot or engagement remain within your chosen deployment perimeter (on-premise or air-gapped appliance) and are never uploaded to public cloud services.",
      "Усі надіслані форми передаються через TLS 1.2+. Дані запитів зберігаються з шифруванням AES-256, доступ обмежений уповноваженим персоналом за принципом мінімальних привілеїв, а журнали аудиту зберігаються для підзвітності. Клієнтські архіви документів, оброблені під час пілоту, залишаються в межах обраного вами периметра (on-premise чи ізольований апаратний модуль) і ніколи не передаються у публічні хмари."
    ),
  },
  {
    icon: Users,
    title: bi("5. Third-Party Sharing", "5. Передача третім сторонам"),
    body: bi(
      "We do NOT sell, rent, or otherwise commercialize personal data. Limited processors (email delivery, inquiry form intake via Web3Forms) act strictly on our behalf under data-processing agreements. Data may be disclosed only when required by binding law, regulatory order, or to protect the rights and safety of SABIR VAULT and its clients.",
      "Ми НЕ продаємо, не здаємо в оренду та не комерціалізуємо персональні дані. Обмежене коло процесорів (доставка email, прийом форм через Web3Forms) діє виключно від нашого імені за угодами про обробку даних. Розкриття можливе лише на вимогу закону, регуляторного припису або для захисту прав і безпеки SABIR VAULT та його клієнтів."
    ),
  },
  {
    icon: Scale,
    title: bi("6. GDPR & User Rights", "6. GDPR та ваші права"),
    body: bi(
      "You have the right to request access to your personal data, correction of inaccuracies, deletion (\"right to be forgotten\"), restriction or objection to processing, and data portability. Requests are honored within 30 days. To exercise any right, email contact@sabirvault.com. You may also lodge a complaint with your local supervisory authority.",
      "Ви маєте право запитати доступ до своїх персональних даних, виправлення неточностей, видалення (\"право бути забутим\"), обмеження або заперечення обробки та перенесення даних. Запити виконуються протягом 30 днів. Для реалізації прав напишіть на contact@sabirvault.com. Ви також можете подати скаргу до наглядового органу."
    ),
  },
  {
    icon: Mail,
    title: bi("7. Contact Information", "7. Контактна інформація"),
    body: bi(
      "Questions about this policy or requests to exercise your rights should be directed to contact@sabirvault.com. We aim to acknowledge every request within 2 business days.",
      "Питання щодо цієї політики або запити на реалізацію прав надсилайте на contact@sabirvault.com. Ми прагнемо відповісти на кожен запит протягом 2 робочих днів."
    ),
  },
];

function PrivacyPage() {
  const { t, lang } = useLang();

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#38bdf8]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full bg-[#f59e0b]/5 blur-3xl" />
      </div>

      <header className="border-b border-white/5 bg-[#0a0e18]/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#38bdf8] to-[#f59e0b]">
              <div className="h-2.5 w-2.5 rounded-sm bg-[#090d16]" />
            </div>
            <span className="text-xs font-semibold tracking-[0.25em] text-white">SABIR VAULT</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-white transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t(bi("Back to Home", "На головну"))}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#38bdf8]">
          {t(bi("Legal", "Юридична інформація"))}
        </div>
        <h1
          className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl"
          style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}
        >
          {t(bi("Privacy Policy", "Політика конфіденційності"))}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {t(
            bi(
              "This policy describes how SABIR VAULT handles personal data submitted through our enterprise inquiry and pilot request forms.",
              "Ця політика описує, як SABIR VAULT обробляє персональні дані, надіслані через корпоративні форми запитів та заявки на пілот."
            )
          )}
        </p>
        <div className="mt-2 text-xs text-muted-foreground/70">
          {t(bi("Last updated:", "Останнє оновлення:"))}{" "}
          {new Date().toLocaleDateString(lang === "ua" ? "uk-UA" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <div className="mt-12 space-y-4">
          {SECTIONS.map((s, i) => {
            const Icon = s.icon;
            return (
              <section
                key={i}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-[#38bdf8]/30 hover:bg-white/[0.03] md:p-8"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#38bdf8]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#38bdf8]/20 bg-[#38bdf8]/10 text-[#38bdf8]"
                    style={{ boxShadow: "0 0 30px -10px rgba(56,189,248,0.5)" }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                      {t(s.title)}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t(s.body)}
                    </p>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-12 rounded-xl border border-[#38bdf8]/20 bg-gradient-to-br from-[#38bdf8]/[0.06] to-transparent p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#38bdf8]">
                {t(bi("Privacy Requests", "Запити щодо конфіденційності"))}
              </div>
              <div className="mt-2 text-base font-semibold text-white">
                {t(bi("Contact our data team", "Зв'яжіться з нашою командою"))}
              </div>
            </div>
            <a
              href="mailto:contact@sabirvault.com"
              className="inline-flex items-center gap-2 rounded-md bg-[#38bdf8] px-5 py-2.5 text-sm font-semibold text-[#090d16] shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)] transition hover:bg-[#7dd3fc]"
            >
              <Mail className="h-4 w-4" />
              contact@sabirvault.com
            </a>
          </div>
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
