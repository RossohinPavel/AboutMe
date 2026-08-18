import type { HtmlTagDescriptor, Plugin } from "vite";


interface BrowserEnvironment {
  document: {
    documentElement: {
      dataset: Record<string, string | undefined>;
    };
  };
  localStorage?: {
    getItem: (key: string) => string | null;
  };
}

const createApplyStoredTheme = (storageKey: string) => {
  const applyStoredTheme = (key: string) => {
    const browser = globalThis as unknown as BrowserEnvironment;
    const theme = browser.localStorage?.getItem(key) ?? "light";
    browser.document.documentElement.dataset.theme = theme;
  };
  return `(${applyStoredTheme.toString()})("${storageKey}")`;
};

/** Creates a Vite plugin that applies the saved theme before the first page render. */
export const theme = (storageKey: string): Plugin => {
  const tags: HtmlTagDescriptor[] = [
    {
      tag: "script",
      children: createApplyStoredTheme(storageKey),
      injectTo: "head-prepend",
    },
  ];
  return {
    name: "about-me:theme",
    transformIndexHtml: () => tags,
  };
};
