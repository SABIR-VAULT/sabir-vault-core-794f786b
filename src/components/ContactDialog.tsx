import { useState, createContext, useContext, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowRight, Zap, Server, Package, CheckCircle2 } from "lucide-react";

type ModelKey = "express" | "onprem" | "appliance";

type OpenOpts = { title?: string; model?: ModelKey };
type Ctx = { open: (opts?: OpenOpts | string) => void };
const ContactCtx = createContext<Ctx | null>(null);

export function useContactDialog() {
  const ctx = useContext(ContactCtx);
  if (!ctx) throw new Error("useContactDialog must be used inside ContactDialogProvider");
  return ctx;
}

const MODELS: Record<ModelKey, {
  badge: string;
  title: string;
  icon: any;
  accent: string;
  concept: string;
  points: { label: string; body: string }[];
}> = {
  express: {
    badge: "On-Demand Service",
    title: "Express Forensic Pre-Audit",
    icon: Zap,
    accent: "#38bdf8",
    concept: "Pay-per-case audit without buying hardware or software. Zero IT friction.",
    points: [
      { label: "Phase 1 — Recon Triage", body: "Fast entity & role identification (~1 min/page), verified by a human operator (up to 100 pages/hour approval rate)." },
      { label: "Phase 2 — Deep Kernel Synthesis", body: "Full page-by-page forensic extraction, risk check, and graph generation (~3 min/page automated process benchmarked on Mac Mini M2)." },
      { label: "Deliverables", body: "Verified Digital Dossier (35-section PDF/MD), Interactive HTML Relation Graph, and Forensic Risk Report — within hours." },
    ],
  },
  onprem: {
    badge: "Software License",
    title: "Managed On-Premise Deployment",
    icon: Server,
    accent: "#38bdf8",
    concept: "Ideal for companies with existing IT infrastructure (Mac Studio / Server).",
    points: [
      { label: "Private Perimeter", body: "Full software pipeline installation inside your private perimeter." },
      { label: "Zero Cloud Leaks", body: "100% data isolation with monthly enterprise licensing." },
      { label: "Continuous Updates", body: "Regular legal ontology updates and pipeline improvements." },
    ],
  },
  appliance: {
    badge: "Hardware + Software",
    title: "Dedicated Hardware Appliance (SABIR VAULT Box)",
    icon: Package,
    accent: "#f59e0b",
    concept: "Pre-configured, air-gapped plug-and-play Mac Mini M-series server delivered directly to your office.",
    points: [
      { label: "100% Offline", body: "Operates without external internet connection." },
      { label: "Plug-and-Play", body: "Setup in 5 minutes — zero configuration required." },
      { label: "Optimized Silicon", body: "Hardware-optimized local AI acceleration on Apple M-series." },
    ],
  },
};

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Request Enterprise Quote");
  const [model, setModel] = useState<ModelKey>("express");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const open = (opts?: OpenOpts | string) => {
    if (typeof opts === "string") setTitle(opts);
    else if (opts) {
      if (opts.title) setTitle(opts.title);
      if (opts.model) setModel(opts.model);
    }
    setIsOpen(true);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill out all required fields.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      toast.error("Please enter a valid work email.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setIsOpen(false);
    setForm({ name: "", company: "", email: "", phone: "", message: "" });
    toast.success("Request received. Our team will reach out shortly.");
  };

  const active = MODELS[model];
  const Icon = active.icon;

  return (
    <ContactCtx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[92vh] overflow-y-auto border-white/10 bg-[#0b0f19] p-0 text-white sm:max-w-3xl">
          <div className="grid gap-0 md:grid-cols-[1.05fr_1fr]">
            {/* LEFT: Model detail */}
            <div className="border-b border-white/5 bg-[#0a0e18] p-6 md:border-b-0 md:border-r">
              <div className="mb-5 flex flex-wrap gap-2">
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
                    {MODELS[k].badge}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="grid h-11 w-11 place-items-center rounded-lg"
                  style={{ background: `${active.accent}1a`, color: active.accent }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    {active.badge}
                  </div>
                  <div className="text-base font-semibold text-white">{active.title}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.concept}</p>
              <ul className="mt-5 space-y-3">
                {active.points.map((p) => (
                  <li key={p.label} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-white/90">{p.label}</div>
                      <div className="text-sm text-muted-foreground">{p.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Contact form */}
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold tracking-tight text-white">{title}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Share a few details and our enterprise team will get back within one business day.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={onSubmit} className="mt-4 space-y-3.5">
                <Field id="name" label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Doe" />
                <Field id="company" label="Company Name" value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Acme Capital" />
                <Field id="email" label="Work Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="jane@acme.com" />
                <Field id="phone" label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+1 555 000 0000" />
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Model of Interest</Label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value as ModelKey)}
                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
                  >
                    {(Object.keys(MODELS) as ModelKey[]).map((k) => (
                      <option key={k} value={k} className="bg-[#0b0f19]">
                        {MODELS[k].title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Message</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe your use case, document volume, or timeline."
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
                  {submitting ? "Sending…" : "Submit Request"}
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
