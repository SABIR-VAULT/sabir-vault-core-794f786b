import { createContext, useContext, useState, ReactNode } from "react";

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
  const [lang, setLang] = useState<Lang>("en");
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
