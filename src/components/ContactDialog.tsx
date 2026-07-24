import { useState, createContext, useContext, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

type Ctx = { open: (title?: string) => void };
const ContactCtx = createContext<Ctx | null>(null);

export function useContactDialog() {
  const ctx = useContext(ContactCtx);
  if (!ctx) throw new Error("useContactDialog must be used inside ContactDialogProvider");
  return ctx;
}

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Request Enterprise Quote");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  const open = (t?: string) => {
    if (t) setTitle(t);
    setIsOpen(true);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill out all fields.");
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
    setForm({ name: "", company: "", email: "", phone: "" });
    toast.success("Request received. Our team will reach out shortly.");
  };

  return (
    <ContactCtx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="border-white/10 bg-[#0b0f19] text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold tracking-tight text-white">{title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Share a few details and our enterprise team will get back within one business day.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="mt-2 space-y-4">
            <Field id="name" label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Doe" />
            <Field id="company" label="Company Name" value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Acme Capital" />
            <Field id="email" label="Work Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="jane@acme.com" />
            <Field id="phone" label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+1 555 000 0000" />
            <button
              type="submit"
              disabled={submitting}
              className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#38bdf8] px-6 py-3 text-sm font-semibold text-[#090d16] shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)] transition hover:bg-[#7dd3fc] disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit Request"}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </form>
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
