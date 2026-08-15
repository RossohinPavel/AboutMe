import type { HtmlTagDescriptor, Plugin } from "vite";


export interface SeoConfig {
  lang: string;
  title: string;
  description: string;
  canonical: string;
  image: string;
}

/** Creates a Vite plugin that adds page metadata for search engines and link previews. */
export const seo = (config: SeoConfig): Plugin => {
  const tags: HtmlTagDescriptor[] = [
    {
      tag: "title",
      children: config.title,
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        name: "description",
        content: config.description,
      },
      injectTo: "head",
    },
    {
      tag: "link",
      attrs: {
        rel: "canonical",
        href: config.canonical,
      },
      injectTo: "head",
    },

    // Adds metadata for Open Graph link previews.
    {
      tag: "meta",
      attrs: {
        property: "og:type",
        content: "profile",
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        property: "og:title",
        content: config.title,
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        property: "og:description",
        content: config.description,
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        property: "og:url",
        content: config.canonical,
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        property: "og:image",
        content: config.image,
      },
      injectTo: "head",
    },

    // Adds metadata for X link previews.
    {
      tag: "meta",
      attrs: {
        name: "twitter:card",
        content: "summary_large_image",
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        name: "twitter:title",
        content: config.title,
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        name: "twitter:description",
        content: config.description,
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        name: "twitter:image",
        content: config.image,
      },
      injectTo: "head",
    },
  ];

  return {
    name: "about-me:seo",

    transformIndexHtml: (html) => {
      const transformedHtml = html.replace(
        /<html\s+lang=(["']).*?\1/i,
        `<html lang="${config.lang}"`,
      );

      return {
        html: transformedHtml,
        tags,
      };
    },
  };
};
