import type { HtmlTagDescriptor, Plugin } from "vite";

export interface SeoConfig {
  lang: string;
  title: string;
  description: string;
  canonical: string;
  image: string;
}

export function seoPlugin(seo: SeoConfig): Plugin {
  const tags: HtmlTagDescriptor[] = [
    {
      tag: "title",
      children: seo.title,
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        name: "description",
        content: seo.description,
      },
      injectTo: "head",
    },
    {
      tag: "link",
      attrs: {
        rel: "canonical",
        href: seo.canonical,
      },
      injectTo: "head",
    },

    // Open Graph
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
        content: seo.title,
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        property: "og:description",
        content: seo.description,
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        property: "og:url",
        content: seo.canonical,
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        property: "og:image",
        content: seo.image,
      },
      injectTo: "head",
    },

    // Twitter/X
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
        content: seo.title,
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        name: "twitter:description",
        content: seo.description,
      },
      injectTo: "head",
    },
    {
      tag: "meta",
      attrs: {
        name: "twitter:image",
        content: seo.image,
      },
      injectTo: "head",
    },
  ];

  return {
    name: "about-me:seo",

    transformIndexHtml(html) {
      const transformedHtml = html.replace(
        /<html\s+lang=(["']).*?\1/i,
        `<html lang="${seo.lang}"`,
      );

      return {
        html: transformedHtml,
        tags,
      };
    },
  };
}