import { createContext, useContext, useState } from "react";
import { translations, type Lang } from "./translations";

interface LangContext {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
  tArr: (path: string) => string[];
}

const LanguageContext = createContext<LangContext>(null!);

function getAtPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>(
    (node, key) =>
      node != null && typeof node === "object"
        ? (node as Record<string, unknown>)[key]
        : undefined,
    obj
  );
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("portfolio-lang");
    return stored === "fr" ? "fr" : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("portfolio-lang", l);
  };

  const t = (path: string): string => {
    const node = getAtPath(translations[lang], path);
    return typeof node === "string" ? node : path;
  };

  const tArr = (path: string): string[] => {
    const node = getAtPath(translations[lang], path);
    return Array.isArray(node) ? (node as string[]) : [];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tArr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
