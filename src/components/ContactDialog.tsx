import { useState, createContext, useContext, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowRight, Zap, Server, Package, CheckCircle2, Handshake } from "lucide-react";
import { useLang, bi } from "@/lib/i18n";

// ============================================================
// Web3Forms integration
// PASTE YOUR WEB3FORMS ACCESS KEY BELOW (get one at https://web3forms.com):
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
// ============================================================

type ModelKey = "pilot" | "onprem" | "appliance" | "partner";

type OpenOpts = { title?: string; model?: ModelKey };
type Ctx = { open: (opts?: OpenOpts | string) => void };
const ContactCtx = createContext<Ctx | null>(null);

export function useContactDialog() {
  const ctx = useContext(ContactCtx);
  if (!ctx) throw new Error("useContactDialog must be used inside ContactDialogProvider");
  return ctx;
}

type Bi = { en: string; ua: string };
type ModelDef = {
  key: ModelKey;
  badge: Bi;
  tab: Bi;
  title: Bi;
  icon: any;
  accent: string;
  concept: Bi;
  points: { label: Bi; body: Bi }[];
  formTitle: Bi;
  formSubtitle: Bi;
  messagePlaceholder: Bi;
  submitLabel: Bi;
};

const MODELS: Record<ModelKey, ModelDef> = {
  pilot: {
    key: "pilot",
    badge: bi("Pilot Project (POC)", "Пілотний проєкт (POC)"),
    tab: bi("Service on Demand / Pilot", "Послуга на замовлення / Пілот"),
    title: bi("Pilot Project & Pre-audit", "Пілотний проєкт та пре-аудит"),
    icon: Zap,
    accent: "#38bdf8",
    concept: bi(
      "Trial forensic processing of your first archive or case with zero upfront license commitments. Evaluate accuracy, speed, and format compatibility.",
      "Тестова форензик-обробка вашого першого архіву або кейсу без придбання ліцензій. Оцінка точності, швидкості та сумісності з вашими документами."
    ),
    points: [
      {
        label: bi("Phase 1 — Ingestion & Triage", "Фаза 1 — Прийом та сортування"),
        body: bi(
          "Fast archive ingestion (ZIP/PDF/scans), handwritten OCR, and PII masking.",
          "Швидке розпакування (ZIP/PDF/скани), OCR рукописного тексту та маскування PII."
        ),
      },
      {
        label: bi("Phase 2 — Deep Forensic Analysis", "Фаза 2 — Глибокий форензік-аналіз"),
        body: bi(
          "Cross-verification of dates and entities, risk flagging, and D3.js knowledge graph construction.",
          "Перехресна верифікація дат, атрибутів, перевірка ризиків та побудова графа зв'язків."
        ),
      },
      {
        label: bi("Pilot Deliverables", "Результати пілоту"),
        body: bi(
          "Verified digital dossier, structured JSON/CRM export, interactive relationship graph, and risk report.",
          "Верифіковане цифрове досьє, структуровані JSON/CRM-дані, інтерактивний граф зв'язків та звіт про ризики."
        ),
      },
    ],
    formTitle: bi("Launch Pilot Project", "Запустити пілотний проєкт"),
    formSubtitle: bi(
      "Submit your case details — our team will reach out within 1 business day to set up your trial parameters.",
      "Залиште деталі кейсу — наша команда зв'яжеться з вами протягом робочого дня для узгодження параметрів обробки."
    ),
    messagePlaceholder: bi(
      "Describe estimated archive size (page count/doc types) and key verification requirements...",
      "Вкажіть орієнтовний обсяг архіву (к-сть сторінок/типи документів) та ключові задачі перевірки..."
    ),
    submitLabel: bi("Launch Pilot", "Запустити пілот"),
  },
  onprem: {
    key: "onprem",
    badge: bi("Software License", "Ліцензія на ПЗ"),
    tab: bi("Software License", "Ліцензія на ПЗ"),
    title: bi("Managed On-Premise Deployment", "Керована локальна інсталяція"),
    icon: Server,
    accent: "#38bdf8",
    concept: bi(
      "Ideal for companies with existing IT infrastructure (Mac Studio / Server).",
      "Оптимально для компаній із власною ІТ-інфраструктурою (Mac Studio / сервер)."
    ),
    points: [
      {
        label: bi("Private Perimeter", "Приватний периметр"),
        body: bi(
          "Full software pipeline installation inside your private perimeter.",
          "Повна інсталяція програмного конвеєра всередині вашого приватного периметра."
        ),
      },
      {
        label: bi("Zero Cloud Leaks", "Без витоків у хмару"),
        body: bi(
          "100% data isolation with monthly enterprise licensing.",
          "100% ізоляція даних з щомісячною корпоративною ліцензією."
        ),
      },
      {
        label: bi("Continuous Updates", "Постійні оновлення"),
        body: bi(
          "Regular legal ontology updates and pipeline improvements.",
          "Регулярні оновлення правової онтології та покращення конвеєра."
        ),
      },
    ],
    formTitle: bi("Request Enterprise Details", "Запит корпоративних деталей"),
    formSubtitle: bi(
      "Share a few details and our enterprise team will get back within one business day.",
      "Залиште контакти — наша корпоративна команда зв'яжеться з вами протягом одного робочого дня."
    ),
    messagePlaceholder: bi(
      "Briefly describe your use case, document volume, or timeline.",
      "Коротко опишіть кейс, обсяг документів або строки."
    ),
    submitLabel: bi("Submit Request", "Надіслати запит"),
  },
  appliance: {
    key: "appliance",
    badge: bi("Hardware + Software", "Обладнання + ПЗ"),
    tab: bi("Hardware + Software", "Обладнання + ПЗ"),
    title: bi("Dedicated Hardware Appliance (SABIR VAULT Box)", "Виділений апаратний модуль (SABIR VAULT Box)"),
    icon: Package,
    accent: "#f59e0b",
    concept: bi(
      "Pre-configured, air-gapped plug-and-play Mac Mini unit delivered directly to your office.",
      "Попередньо налаштований, ізольований plug-and-play Mac Mini, доставлений у ваш офіс."
    ),
    points: [
      {
        label: bi("Air-Gapped Security", "Ізольована безпека"),
        body: bi(
          "Operates 100% offline without external internet connection.",
          "Працює на 100% офлайн без зовнішнього інтернет-з'єднання."
        ),
      },
      {
        label: bi("Plug-and-Play", "Plug-and-Play"),
        body: bi(
          "Ready to process legal cases within 5 minutes of unboxing.",
          "Готовий до обробки справ за 5 хвилин після розпакування."
        ),
      },
      {
        label: bi("Optimized Silicon", "Оптимізоване залізо"),
        body: bi(
          "Hardware-optimized local acceleration on Apple M-series.",
          "Апаратно оптимізоване локальне прискорення на Apple M-series."
        ),
      },
    ],
    formTitle: bi("Request Enterprise Details", "Запит корпоративних деталей"),
    formSubtitle: bi(
      "Share a few details and our enterprise team will get back within one business day.",
      "Залиште контакти — наша корпоративна команда зв'яжеться з вами протягом одного робочого дня."
    ),
    messagePlaceholder: bi(
      "Briefly describe your use case, document volume, or timeline.",
      "Коротко опишіть кейс, обсяг документів або строки."
    ),
    submitLabel: bi("Submit Request", "Надіслати запит"),
  },
  partner: {
    key: "partner",
    badge: bi("Partner Program", "Партнерська програма"),
    tab: bi("Partnership", "Партнерство"),
    title: bi("Partnership & White-Label", "Партнерство та White-Label"),
    icon: Handshake,
    accent: "#f59e0b",
    concept: bi(
      "Deploy SABIR VAULT as an internal engine for your audit cases or offer pre-audit services under your own brand.",
      "Розгортайте SABIR VAULT як внутрішній двигун для ваших аудиторських кейсів або пропонуйте послуги пре-аудиту під власним брендом."
    ),
    points: [
      {
        label: bi("White-Label & Branding", "White-Label та брендування"),
        body: bi(
          "Generate digital dossiers and risk reports under your company branding.",
          "Формування цифрових досьє та звітів із вашим корпоративним брендингом."
        ),
      },
      {
        label: bi("Revenue Share & Margin", "Процент та маржа"),
        body: bi(
          "Flexible referral fees or wholesale usage pricing for maximum margin.",
          "Гнучкі реферальні комісії або оптова ціна за обсяг для максимальної маржинальності."
        ),
      },
      {
        label: bi("Data Privacy", "Приватність даних"),
        body: bi(
          "Isolated infrastructure execution with zero third-party data exposure.",
          "Обробка в ізольованій інфраструктурі без передачі даних третім особам."
        ),
      },
    ],
    formTitle: bi("Apply for Partnership", "Заявка на партнерство"),
    formSubtitle: bi(
      "Submit details — our team will reach out within 1 business day.",
      "Залиште контакти — наша команда зв'яжеться з вами для узгодження формату співпраці."
    ),
    messagePlaceholder: bi(
      "Describe your organization (law firm, audit, consulting) and intended partnership model...",
      "Вкажіть напрямок діяльності вашої компанії (юридична, аудиторська, консалтинг) та бажаний формат співпраці..."
    ),
    submitLabel: bi("Submit Application", "Надіслати заявку"),
  },
};

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const { t, lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [titleOverride, setTitleOverride] = useState<string | null>(null);
  const [model, setModel] = useState<ModelKey>("pilot");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const open = (opts?: OpenOpts | string) => {
    if (typeof opts === "string") setTitleOverride(opts);
    else if (opts) {
      if (opts.title) setTitleOverride(opts.title);
      else setTitleOverride(null);
      if (opts.model) setModel(opts.model);
    } else {
      setTitleOverride(null);
    }
    setIsOpen(true);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error(t(bi("Please fill out all required fields.", "Заповніть усі обов'язкові поля.")));
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      toast.error(t(bi("Please enter a valid work email.", "Введіть коректну робочу електронну пошту.")));
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `SABIR VAULT — ${MODELS[model].title.en} inquiry`,
          from_name: "SABIR VAULT Website",
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          model_of_interest: MODELS[model].title.en,
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) throw new Error(data.message || "Submission failed");
      setIsOpen(false);
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
      toast.success(
        t(
          bi(
            "Thank you! Your request has been submitted. Our enterprise team will reach out within one business day.",
            "Дякуємо! Ваш запит надіслано. Наша корпоративна команда зв'яжеться протягом одного робочого дня."
          )
        )
      );
    } catch (err: any) {
      toast.error(
        t(bi("Submission failed. Please try again or email contact@sabirvault.com.", "Не вдалося надіслати. Спробуйте ще раз або напишіть на contact@sabirvault.com."))
      );
    } finally {
      setSubmitting(false);
    }
  };

  const active = MODELS[model];
  const Icon = active.icon;
  const heading = titleOverride ?? (model === "pilot" ? "Pilot Project (POC) & Pre-audit\u00a0" : t(active.formTitle));

  const namePh = lang === "ua" ? "Олександр Іваненко" : "Jane Doe";
  const companyPh = lang === "ua" ? "Юридична компанія / Фонд" : "Acme Capital";
  const emailPh = lang === "ua" ? "alex@company.ua" : "jane@company.com";
  const phonePh = lang === "ua" ? "+380..." : "+1...";

  return (
    <ContactCtx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[92vh] overflow-y-auto border-white/10 bg-[#0b0f19] p-0 text-white sm:max-w-3xl">
          {/* Tabs across the top */}
          <div className="flex flex-wrap gap-2 border-b border-white/5 bg-[#0a0e18] px-6 py-4">
            {(Object.keys(MODELS) as ModelKey[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setModel(k)}
                className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest transition ${
                  model === k
                    ? "border-[#38bdf8]/50 bg-[#38bdf8]/10 text-[#38bdf8]"
                    : "border-white/10 text-muted-foreground hover:text-white"
                }`}
              >
                {t(MODELS[k].tab)}
              </button>
            ))}
          </div>

          <div className="grid gap-0 md:grid-cols-[1.05fr_1fr]">
            {/* LEFT: Model detail */}
            <div className="border-b border-white/5 bg-[#0a0e18] p-6 md:border-b-0 md:border-r">
              <div className="flex items-center gap-3">
                <div
                  className="grid h-11 w-11 place-items-center rounded-lg"
                  style={{ background: `${active.accent}1a`, color: active.accent }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    {t(active.badge)}
                  </div>
                  <div className="text-base font-semibold text-white">{t(active.title)}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(active.concept)}</p>
              <ul className="mt-5 space-y-3">
                {active.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-white/90">{t(p.label)}</div>
                      <div className="text-sm text-muted-foreground">{t(p.body)}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Contact form */}
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold tracking-tight text-white">{heading}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {t(active.formSubtitle)}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={onSubmit} className="mt-4 space-y-3.5">
                <Field id="name" label={t(bi("Full Name", "Повне ім'я"))} value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder={namePh} />
                <Field id="company" label={t(bi("Company Name", "Назва компанії"))} value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder={companyPh} />
                <Field id="email" label={t(bi("Work Email", "Робоча пошта"))} type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder={emailPh} />
                <Field id="phone" label={t(bi("Phone", "Телефон"))} type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder={phonePh} />
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {t(bi("Model of Interest", "Обрана модель"))}
                  </Label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value as ModelKey)}
                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
                  >
                    {(Object.keys(MODELS) as ModelKey[]).map((k) => (
                      <option key={k} value={k} className="bg-[#0b0f19]">
                        {t(MODELS[k].title)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {t(bi("Message", "Повідомлення"))}
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t(active.messagePlaceholder)}
                    maxLength={1000}
                    rows={3}
                    className="border-white/10 bg-white/[0.03] text-white placeholder:text-muted-foreground/50 focus-visible:ring-[#38bdf8]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#38bdf8] px-6 py-3 text-sm font-semibold text-[#090d16] shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)] transition hover:bg-[#7dd3fc] disabled:opacity-60"
                >
                  {submitting
                    ? t(bi("Sending…", "Надсилання…"))
                    : t(active.submitLabel)}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </ContactCtx.Provider>
  );
}

function Field({ id, label, value, onChange, type = "text", placeholder }: { id: string; label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={200}
        className="border-white/10 bg-white/[0.03] text-white placeholder:text-muted-foreground/50 focus-visible:ring-[#38bdf8]"
      />
    </div>
  );
}
