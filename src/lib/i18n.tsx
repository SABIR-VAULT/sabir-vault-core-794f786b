import { createContext, useContext, type ReactNode } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { languageForPath, switchLanguagePath } from "@/lib/localization";

export type Lang = "en" | "ua";
export type Bi = { en: string; ua: string };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (b: Bi) => string;
};

const LangCtx = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (b) => b.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = languageForPath(location.pathname);
  const setLang = (nextLang: Lang) => {
    const to = switchLanguagePath(location.pathname, nextLang);
    if (!to || nextLang === lang) return;
    void navigate({ to, search: true, hash: location.hash, resetScroll: false });
  };
  return (
    <LangCtx.Provider value={{ lang, setLang, t: (b) => b[lang] }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  return useContext(LangCtx);
}

export const bi = (en: string, ua: string): Bi => ({ en, ua });
