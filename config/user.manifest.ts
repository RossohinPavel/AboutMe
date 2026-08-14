import type { SeoConfig } from "./vite.seo.plugin.ts"


export interface UserManifest {
  name: string,
  summary: string,
  description: string,
  resume: string,
  image: string,
  github: {
    main: string,
    appPage: string,
  },
  contacts: {
    email: string,
    telegram: string
  }
}

export const userManifest: UserManifest = {
  name: 'Россохин Павел',
  summary: 'Fullstack Typescript / Python Разработчик',
  //eslint-disable-next-line
  description: 'Разрабатываю веб-приложения и сервисы: от интерфейсов на React до высокопроизводительных API. Здесь — коротко обо мне, контакты и основные направления работы.',
  resume: 'https://kirov.hh.ru/resume/b870fc5bff0d9b018b0039ed1f4d57516d4554',
  image: "/photo.jpeg",
  github: {
    main: 'https://github.com/RossohinPavel/',
    appPage: 'https://rossohinpavel.github.io/AboutMe',
  },
  contacts: {
    email: "rossohinpavel@yandex.ru",
    telegram: "https://t.me/pashalun"
  }
}

export const userSeoConfig: SeoConfig = {
  lang: 'ru',
  title: `${userManifest.name} ${userManifest.summary}`,
  description: userManifest.description,
  canonical: userManifest.github.main,
  image: userManifest.github.appPage + userManifest.image
}