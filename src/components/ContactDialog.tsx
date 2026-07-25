import { useState, createContext, useContext, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowRight, Zap, Server, Package, CheckCircle2 } from "lucide-react";
import { useLang, bi } from "@/lib/i18n";

// ============================================================
// Web3Forms integration
// PASTE YOUR WEB3FORMS ACCESS KEY BELOW (get one at https://web3forms.com):
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
// ============================================================

type ModelKey = "express" | "onprem" | "appliance";

type OpenOpts = { title?: string; model?: ModelKey };
type Ctx = { open: (opts?: OpenOpts | string) => void };
const ContactCtx = createContext<Ctx | null>(null);

export function useContactDialog() {
  const ctx = useContext(ContactCtx);
  if (!ctx) throw new Error("useContactDialog must be used inside ContactDialogProvider");
  return ctx;
}

type ModelDef = {
  key: ModelKey;
  badge: Bi;
  tab: Bi;
  title: Bi;
  icon: any;
  accent: string;
  concept: Bi;
  points: { label: Bi; body: Bi }[];
};
type Bi = { en: string; ua: string };

const MODELS: Record<ModelKey, ModelDef> = {
  express: {
    key: "express",
    badge: bi("On-Demand Service", "Послуга на замовлення"),
    tab: bi("On-Demand Service", "Послуга на замовлення"),
    title: bi("Express Forensic Pre-Audit", "Експрес форензик пре-аудит"),
    icon: Zap,
    accent: "#38bdf8",
    concept: bi(
      "Pay-per-case audit without buying hardware or software. Zero IT friction.",
      "Аудит з оплатою за кейс без придбання обладнання чи ліцензій. Без навантаження на ІТ."
    ),
    points: [
      {
        label: bi("Phase 1 — Recon Triage", "Фаза 1 — Розвідувальне сортування"),
        body: bi(
          "Fast entity & role identification (~1 min/page), verified by a human operator.",
          "Швидке визначення сутностей та ролей (~1 хв/сторінку), верифіковане оператором."
        ),
      },
      {
        label: bi("Phase 2 — Deep Kernel Synthesis", "Фаза 2 — Глибокий синтез"),
        body: bi(
          "Full page-by-page forensic extraction, risk check, and relation graph generation.",
          "Постранична форензик-екстракція, перевірка ризиків та побудова графа зв'язків."
        ),
      },
      {
        label: bi("Deliverables", "Результати"),
        body: bi(
          "Verified Digital Dossier (35-section PDF/MD/DOCX), Interactive Relation Graph, Forensic Risk Report.",
          "Верифіковане цифрове досьє (35 розділів PDF/MD/DOCX), інтерактивний граф зв'язків, звіт про ризики."
        ),
      },
    ],
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
  },
};

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [titleOverride, setTitleOverride] = useState<string | null>(null);
  const [model, setModel] = useState<ModelKey>("express");
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
  const heading = titleOverride ?? t(bi("Request Enterprise Details", "Запит корпоративних деталей"));

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
                  {t(bi(
                    "Share a few details and our enterprise team will get back within one business day.",
                    "Залиште контакти — наша корпоративна команда зв'яжеться з вами протягом одного робочого дня."
                  ))}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={onSubmit} className="mt-4 space-y-3.5">
                <Field id="name" label={t(bi("Full Name", "Повне ім'я"))} value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Doe" />
                <Field id="company" label={t(bi("Company Name", "Назва компанії"))} value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Acme Capital" />
                <Field id="email" label={t(bi("Work Email", "Робоча пошта"))} type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="jane@acme.com" />
                <Field id="phone" label={t(bi("Phone", "Телефон"))} type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+1 555 000 0000" />
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
                    placeholder={t(bi("Briefly describe your use case, document volume, or timeline.", "Коротко опишіть кейс, обсяг документів або строки."))}
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
                    : t(bi("Submit Request", "Надіслати запит"))}
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
