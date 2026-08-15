import type { Plugin } from "vite";


export interface StaticProfileAvatar {
  url: string;
  alt: string;
}

export interface StaticProfileLink {
  icon: string;
  label: string;
  url: string;
}

export interface StaticProfileConfig {
  avatar: StaticProfileAvatar;
  name: string;
  role: string;
  location: string;
  description: string;
  links: StaticProfileLink[];
}

/** Creates a Vite plugin that renders profile data into the static HTML fallback. */
export const staticProfile = (config: StaticProfileConfig): Plugin => {
  const links = config.links.map((link) => `
              <div class="link">
                <i data-lucide="${link.icon}" aria-hidden="true"></i>
                <a href="${link.url}">${link.label}</a>
              </div>`).join("");
  const card = `
            <img class="avatar" src="${config.avatar.url}" alt="${config.avatar.alt}">
            <div class="profile-heading">
              <div class="profile-title">
                <h1 class="name">${config.name}</h1>
                <span class="joined">${config.location}</span>
              </div>
              <p class="role">${config.role}</p>
            </div>
            <p class="description">${config.description}</p>
            <div class="links">${links}
            </div>`;
  return {
    name: "about-me:static-profile",
    transformIndexHtml: (html) => {
      return html.replace("<static-profile></static-profile>", card);
    },
  };
};
