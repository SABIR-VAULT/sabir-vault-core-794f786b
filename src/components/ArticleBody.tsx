import { Fragment, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

// Internal pages an article may link to with [text](/path).
const LINKABLE = ["/memory", "/logistics", "/cfo", "/agro", "/insights", "/insights/frankenstein-syndrome", "/insights/taming-local-ai"] as const;
type Linkable = (typeof LINKABLE)[number];
const isLinkable = (p: string): p is Linkable => (LINKABLE as readonly string[]).includes(p);

function inline(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean).map((p, i) => {
    const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link && isLinkable(link[2])) return <Link key={i} to={link[2]} className="text-primary underline-offset-4 hover:underline">{link[1]}</Link>;
    return p.startsWith("**") ? <strong key={i} className="font-semibold text-foreground">{p.slice(2, -2)}</strong>
    : p.startsWith("*") ? <em key={i} className="text-foreground/90">{p.slice(1, -1)}</em>
    : <Fragment key={i}>{p}</Fragment>;
  });
}

/** Renders the lightweight markdown used for Insights articles. */
export function ArticleBody({ source }: { source: string }) {
  const blocks: ReactNode[] = [];
  const lines = source.split("\n").map((l) => l.trimEnd());
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (line.startsWith("#### ")) {
      blocks.push(<h3 key={i} className="mt-8 text-lg font-semibold text-foreground">{inline(line.slice(5))}</h3>);
      i++; continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(<h2 key={i} className="mt-12 text-2xl font-semibold text-foreground" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>{line.slice(4)}</h2>);
      i++; continue;
    }
    const isUl = /^- /.test(line), isOl = /^\d+\. /.test(line);
    if (isUl || isOl) {
      const items: string[] = [];
      while (i < lines.length && (isUl ? /^- /.test(lines[i].trim()) : /^\d+\. /.test(lines[i].trim()))) {
        items.push(lines[i].trim().replace(isUl ? /^- / : /^\d+\. /, "")); i++;
      }
      const cls = "mt-5 space-y-3 pl-6 text-base leading-relaxed text-muted-foreground marker:text-primary";
      blocks.push(isUl
        ? <ul key={i} className={`${cls} list-disc`}>{items.map((x, k) => <li key={k}>{inline(x)}</li>)}</ul>
        : <ol key={i} className={`${cls} list-decimal`}>{items.map((x, k) => <li key={k}>{inline(x)}</li>)}</ol>);
      continue;
    }
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{3,4} |- |\d+\. )/.test(lines[i].trim())) { para.push(lines[i].trim()); i++; }
    blocks.push(<p key={i} className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{inline(para.join(" "))}</p>);
  }
  return <>{blocks}</>;
}
