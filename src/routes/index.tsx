import { createFileRoute } from "@tanstack/react-router";
import {
  Lock, ShieldCheck, BarChart3, Users, Building2, Link2, Wallet,
  UsersRound, Search, Server, Package, ArrowRight, FileText, ScanLine,
  Boxes, CheckCircle2, Database, Download, Github, Mail, ShieldAlert, Zap,
} from "lucide-react";
import { useContactDialog } from "@/components/ContactDialog";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <Pillars />
      <Pipeline />
      <Solutions />
      <Deployment />
      <Partnership />
      <Disclaimer />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090d16]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-[#38bdf8] to-[#f59e0b]">
            <div className="h-3 w-3 rounded-sm bg-[#090d16]" />
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] text-white">SABIR VAULT</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#pillars" className="hover:text-white transition">Platform</a>
          <a href="#pipeline" className="hover:text-white transition">Architecture</a>
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#deployment" className="hover:text-white transition">Deployment</a>
        </nav>
        <QuoteButton label="Request Quote" title="Request Quote" className="rounded-md bg-[#38bdf8] px-4 py-2 text-xs font-semibold text-[#090d16] hover:bg-[#7dd3fc] transition" />
      </div>
    </header>
  );
}

function QuoteButton({ label, title, model, className, children }: { label?: string; title: string; model?: "express" | "onprem" | "appliance"; className: string; children?: React.ReactNode }) {
  const { open } = useContactDialog();
  return (
    <button type="button" onClick={() => open({ title, model })} className={className}>
      {children ?? label}
    </button>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#38bdf8]/[0.06] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span>🏛️</span>
            <span className="tracking-wide">Enterprise Asset Intelligence & Forensic Verification</span>
          </div>
          <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
            Structured Documents.<br />
            <span className="text-gradient-cyan">Trusted Decisions.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Transform thousands of unstructured document scans, PDFs, and legal archives into verified digital dossiers in minutes.
            <span className="text-white/90"> 100% On-Premise. Zero Cloud Leaks.</span>
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <QuoteButton title="Request Enterprise Quote" className="group inline-flex items-center gap-2 rounded-md bg-[#38bdf8] px-6 py-3 text-sm font-semibold text-[#090d16] shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)] hover:bg-[#7dd3fc] transition">
              Request Enterprise Quote
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </QuoteButton>
            <a href="#pipeline" className="glass glass-hover inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white">
              Explore Architecture
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground/70">
            <span>Air-Gapped</span><span>•</span>
            <span>Deterministic Verification</span><span>•</span>
            <span>Local Intelligence</span><span>•</span>
            <span>Zero-Trust Ingestion</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  { icon: Lock, title: "Local First (On-Premise)", body: "All document processing, OCR, entity extraction, and graph resolution occur entirely within your local hardware. Zero data leaves your perimeter." },
  { icon: ShieldCheck, title: "Security by Design", body: "Zero-Trust file ingestion featuring automated local antivirus scanning (ClamAV) and memory-isolated pipeline execution." },
  { icon: BarChart3, title: "Structured Intelligence", body: "Automatically converts messy document chaos into unified JSON schemas, financial audit tables, and relational graphs." },
  { icon: Users, title: "Human-in-the-Loop", body: "Integrated with an interactive Verification Layer (Organizer) for expert review, duplicate merging, and 100% facts confirmation." },
];

function Pillars() {
  return (
    <section id="pillars" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader eyebrow="Core Pillars" title="Built for uncompromising trust." />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <div key={i} className="glass glass-hover group relative overflow-hidden rounded-2xl p-6">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const pipelineSteps = [
  { icon: FileText, label: "Document Intake", sub: "landing/" },
  { icon: ScanLine, label: "Pre-processing & OCR", sub: "normalize" },
  { icon: Boxes, label: "Entity Extraction", sub: "parse" },
  { icon: CheckCircle2, label: "Verification Layer", sub: "Organizer" },
  { icon: Database, label: "Verified Dossier", sub: "Kernel" },
  { icon: Download, label: "Export & Decision", sub: "deliver" },
];

function Pipeline() {
  return (
    <section id="pipeline" className="relative border-y border-white/5 bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Architecture" title="A deterministic pipeline. End to end." />
        <div className="glass mt-14 rounded-2xl p-8 md:p-12">
          <div className="hidden lg:block">
            <div className="relative">
              <svg className="absolute inset-x-0 top-1/2 -z-0 h-2 w-full -translate-y-1/2" preserveAspectRatio="none" viewBox="0 0 100 2">
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
                    <div className="pulse-node grid h-14 w-14 place-items-center rounded-full border border-[#38bdf8]/30 bg-[#0b0f19]">
                      <s.icon className="h-6 w-6 text-[#38bdf8]" />
                    </div>
                    <div className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Step {i+1}</div>
                    <div className="mt-1 text-sm font-semibold text-white">{s.label}</div>
                    <div className="text-xs text-muted-foreground/80">{s.sub}</div>
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
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Step {i+1}</div>
                  <div className="text-sm font-semibold text-white">{s.label}</div>
                  <div className="text-xs text-muted-foreground/80">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const solutions = [
  { icon: Building2, title: "Corporate Due Diligence", body: "M&A, Cap Tables, Ownership Chains, Anti-Fraud Patterns." },
  { icon: Link2, title: "RWA Pre-Tokenization Clearance", body: "Real World Asset Preparation, Hash Proofs, Legal Cleanliness." },
  { icon: Wallet, title: "Financial & Account Audit", body: "IBAN Extraction, Cash vs. Bank Flow, Asset Protection." },
  { icon: UsersRound, title: "Family Office & Kinship Analytics", body: "Complex Kinship Graphs, In-Law Proxies, Marital Property Risks." },
  { icon: Search, title: "Automated Gap Analysis", body: "Missing Evidence Detection, Compliance Checklists, Risk Scoring." },
];

function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader eyebrow="Solutions" title="Purpose-built for high-stakes decisions." />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <div key={i} className="glass glass-hover group rounded-2xl p-7">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-[#38bdf8]/15 to-[#f59e0b]/10 text-[#38bdf8]">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8] opacity-0 transition group-hover:opacity-100">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Deployment() {
  return (
    <section id="deployment" className="relative border-y border-white/5 bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Deployment Models" title="Two ways to bring SABIR VAULT inside." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <DeployCard
            icon={Server}
            emoji="💻"
            title="Managed On-Premise Deployment"
            body="Remote installation and configuration on your existing private Mac/Server infrastructure with monthly enterprise licensing."
            tag="Software License"
          />
          <DeployCard
            icon={Package}
            emoji="📦"
            title="Dedicated Hardware Appliance"
            body="Pre-configured, air-gapped plug-and-play Mac Mini unit (SABIR VAULT Box) delivered directly to your office."
            tag="Hardware + Software"
            highlight
          />
        </div>
      </div>
    </section>
  );
}

function DeployCard({ icon: Icon, emoji, title, body, tag, highlight }: any) {
  return (
    <div className={`glass glass-hover rounded-2xl p-8 ${highlight ? "ring-1 ring-[#f59e0b]/30" : ""}`}>
      <div className="flex items-center justify-between">
        <div className={`grid h-12 w-12 place-items-center rounded-lg ${highlight ? "bg-[#f59e0b]/10 text-[#f59e0b]" : "bg-[#38bdf8]/10 text-[#38bdf8]"}`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{tag}</span>
      </div>
      <h3 className="mt-6 flex items-center gap-2 text-xl font-semibold text-white">
        <span>{emoji}</span> {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <QuoteButton title={`${title} — Request Details`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#38bdf8]">
        Request details <ArrowRight className="h-4 w-4" />
      </QuoteButton>
    </div>
  );
}

function Partnership() {
  return (
    <section id="quote" className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-16">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#f59e0b]/10 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#38bdf8]">Partnership Program</div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              For Legal, Audit &<br />Advisory Partners
            </h3>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Deploy SABIR VAULT as your internal tech engine or offer white-label pre-audit services to your clients.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <QuoteButton title="Become a Partner" className="inline-flex items-center gap-2 rounded-md bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#090d16] hover:bg-[#fbbf24] transition">
              Become a Partner <ArrowRight className="h-4 w-4" />
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
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 text-xs leading-relaxed text-muted-foreground">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]" />
        <div>
          <span className="font-semibold text-white">Important Notice: </span>
          SABIR VAULT is an IT analytical software platform and does not render legal advice.
          The platform prepares structured digital dossiers for professional analysis and decision-making by qualified experts.
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
          <a href="mailto:contact@sabirvault.com" className="inline-flex items-center gap-1.5 hover:text-white transition">
            <Mail className="h-3.5 w-3.5" /> contact@sabirvault.com
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 hover:text-white transition">
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <a href="#" className="hover:text-white transition">Security Statement</a>
          <a href="#pipeline" className="hover:text-white transition">Architecture</a>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#38bdf8]">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
    </div>
  );
}
