import type { SeoConfig } from "../../plugins/seo.ts";
import type { StaticProfileConfig } from "../../plugins/static-profile.ts";
import { userManifest } from "./manifest.ts";

export const userSeo = (): SeoConfig => ({
  lang: "ru",
  title: `${userManifest.name} ${userManifest.summary}`,
  description: userManifest.description,
  canonical: userManifest.github.appPage,
  image: userManifest.github.appPage + userManifest.image,
});

export const userStatic = (base: string): StaticProfileConfig => ({
  avatar: {
    url: base + userManifest.image,
    alt: userManifest.name,
  },
  name: userManifest.name,
  role: userManifest.summary,
  location: userManifest.location,
  description: userManifest.description,
  links: [
    {
      icon: "github",
      label: "GitHub",
      url: userManifest.github.main,
    },
    {
      icon: "file-text",
      label: "Резюме",
      url: userManifest.resume,
    },
    {
      icon: "mail",
      label: userManifest.contacts.email,
      url: `mailto:${userManifest.contacts.email}`,
    },
    {
      icon: "send",
      label: "Telegram",
      url: userManifest.contacts.telegram,
    },
  ],
});
