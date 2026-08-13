import type { SeoConfig } from "./vite.seo.plugin.ts"

export interface UserManifest {
  name: string,
  summary: string,
  description: string,
  resume: string,
  github: string,
  image: string
}

export const userManifest: UserManifest = {
  name: 'Россохин Павел',
  summary: 'Fullstack Typescript / Python Разработчик',
  description: 'Описание',
  resume: 'ссылка на резюме',
  github: 'Ссылка на гитхаб',
  image: "string"
}

export const userSeoConfig: SeoConfig = {
  lang: 'ru',
  title: `${userManifest.name} ${userManifest.summary}`,
  description: userManifest.description,
  canonical: 'https://rossohinpavel.github.io/AboutMe',
  image: userManifest.image
}