import type { SeoConfig } from "./vite.seo.plugin.ts"

export interface UserManifest {
  name: string,
  summary: string,
  description: string,
  resume: string,
  github: string,
  githubPage: string,
  image: string
}

export const userManifest: UserManifest = {
  name: 'Россохин Павел',
  summary: 'Fullstack Typescript / Python Разработчик',
  description: 'Описание',
  resume: 'https://kirov.hh.ru/resume/b870fc5bff0d9b018b0039ed1f4d57516d4554',
  github: 'https://github.com/RossohinPavel/',
  githubPage: 'https://rossohinpavel.github.io/AboutMe',
  image: "/photo.jpeg"
}

export const userSeoConfig: SeoConfig = {
  lang: 'ru',
  title: `${userManifest.name} ${userManifest.summary}`,
  description: userManifest.description,
  canonical: userManifest.githubPage,
  image: userManifest.githubPage + userManifest.image
}