import type { SeoConfig } from "../../plugins/seo.ts";
import type { StaticProfileConfig } from "../../plugins/static-profile.ts";
import { userManifest } from "./manifest.ts";


/** Возвращает имя пользователя из URL профиля GitHub. */
export const extractGitHubUsername = () => {
  return new URL(userManifest.github.main).pathname.replaceAll("/", "");
};

/** Возвращает URL профиля из манифеста пользователя для обращения к API GitHub. */
export const buildGitHubProfileApiUrl = () => {
  return `https://api.github.com/users/${extractGitHubUsername()}`;
};

/** Возвращает URL репозиториев пользователя для обращения к API GitHub. */
export const buildGitHubReposApiUrl = () => {
  return `https://api.github.com/users/${extractGitHubUsername()}/repos`;
};

/** Создаёт SEO-конфигурацию из манифеста пользователя. */
export const createSeoConfig = (): SeoConfig => ({
  lang: "ru",
  title: `${userManifest.name} ${userManifest.summary}`,
  description: userManifest.description,
  canonical: userManifest.github.appPage,
  image: userManifest.github.appPage + userManifest.image,
});

/** Создаёт конфигурацию статического профиля с указанным базовым путём к ресурсам. */
export const createStaticProfileConfig = (base: string): StaticProfileConfig => ({
  avatar: {
    url: base + userManifest.image,
    alt: "Фото профиля",
  },
  name: userManifest.name,
  role: userManifest.summary,
  location: userManifest.location,
  description: userManifest.description,
  links: [
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
    {
      icon: "file-text",
      label: "Резюме",
      url: userManifest.resume,
    },
  ],
});
