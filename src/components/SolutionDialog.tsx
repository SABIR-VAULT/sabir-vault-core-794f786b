import { createContext, useContext, useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLang, bi, type Bi } from "@/lib/i18n";
import { useContactDialog } from "@/components/ContactDialog";

export type SolutionDef = {
  key: string;
  icon: any;
  accent?: string;
  eyebrow: Bi;
  title: Bi;
  body: Bi;
  bullets: Bi[];
};

type Ctx = { open: (s: SolutionDef) => void };
const SolCtx = createContext<Ctx | null>(null);

export function useSolutionDialog() {
  const c = useContext(SolCtx);
  if (!c) throw new Error("useSolutionDialog must be inside SolutionDialogProvider");
  return c;
}

export function SolutionDialogProvider({ children }: { children: ReactNode }) {
  const { t } = useLang();
  const { open: openContact } = useContactDialog();
  const [active, setActive] = useState<SolutionDef | null>(null);
  const isOpen = !!active;

  const open = (s: SolutionDef) => setActive(s);
  const Icon = active?.icon;

  return (
    <SolCtx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[92vh] overflow-y-auto border-white/10 bg-[#0b0f19] p-0 text-white sm:max-w-2xl">
          {active && (
            <div className="p-7">
              <div className="flex items-center gap-3">
                <div
                  className="grid h-11 w-11 place-items-center rounded-lg"
                  style={{ background: `${active.accent ?? "#38bdf8"}1a`, color: active.accent ?? "#38bdf8" }}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    {t(active.eyebrow)}
                  </div>
                  <DialogTitle className="text-lg font-semibold text-white">{t(active.title)}</DialogTitle>
                </div>
              </div>
              <DialogHeader className="mt-4">
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                  {t(active.body)}
                </DialogDescription>
              </DialogHeader>
              <ul className="mt-5 space-y-3">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                    <div className="text-sm text-muted-foreground">{t(b)}</div>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActive(null);
                    openContact({ title: t(bi("Request Details", "Запит деталей")) });
                  }}
                  className="group inline-flex items-center gap-2 rounded-md bg-[#38bdf8] px-5 py-2.5 text-sm font-semibold text-[#090d16] hover:bg-[#7dd3fc] transition"
                >
                  {t(bi("Request Details", "Запит деталей"))}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/[0.04] transition"
                >
                  {t(bi("Close", "Закрити"))}
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SolCtx.Provider>
  );
}
