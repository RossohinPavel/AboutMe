export interface GitHubUser {
  login: string;
  id: number;
  html_url: string;
  avatar_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  bio: string;
  location: string | null;
  email: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}
