export const SITE_ORIGIN = "https://sabirvault.com";

export const PAGE_PATHS = [
  "/", "/insights", "/insights/frankenstein-syndrome", "/insights/taming-local-ai",
  "/insights/claude-erp-retail-illusion", "/solutions/executive-copilot",
  "/cfo", "/logistics", "/agro", "/memory", "/security-service", "/whitepaper", "/privacy",
] as const;

export type PagePath = (typeof PAGE_PATHS)[number];
export type UkrainianPath = "/ua" | `/ua${Exclude<PagePath, "/">}`;
export type LocalizedPath = PagePath | UkrainianPath;
export type Lang = "en" | "ua";

const mirrors = {
  "/": "/ua",
  "/insights": "/ua/insights",
  "/insights/frankenstein-syndrome": "/ua/insights/frankenstein-syndrome",
  "/insights/taming-local-ai": "/ua/insights/taming-local-ai",
  "/insights/claude-erp-retail-illusion": "/ua/insights/claude-erp-retail-illusion",
  "/solutions/executive-copilot": "/ua/solutions/executive-copilot",
  "/cfo": "/ua/cfo", "/logistics": "/ua/logistics", "/agro": "/ua/agro",
  "/memory": "/ua/memory", "/security-service": "/ua/security-service",
  "/whitepaper": "/ua/whitepaper", "/privacy": "/ua/privacy",
} as const satisfies Record<PagePath, UkrainianPath>;

export function languageForPath(pathname: string): Lang {
  return pathname === "/ua" || pathname.startsWith("/ua/") ? "ua" : "en";
}

export function englishPath(pathname: string): string {
  const path = pathname.replace(/\/$/, "") || "/";
  return path === "/ua" ? "/" : path.startsWith("/ua/") ? path.slice(3) : path;
}

export function isPagePath(path: string): path is PagePath {
  return PAGE_PATHS.some(candidate => candidate === path);
}

export function localizedPath(path: LocalizedPath, lang: Lang): LocalizedPath {
  const base = englishPath(path);
  if (!isPagePath(base)) return path;
  return lang === "ua" ? mirrors[base] : base;
}

export function switchLanguagePath(pathname: string, lang: Lang): LocalizedPath | null {
  const base = englishPath(pathname);
  return isPagePath(base) ? localizedPath(base, lang) : null;
}