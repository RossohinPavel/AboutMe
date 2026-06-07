import { createContext, useContext } from "react";
import type { GitHubUser } from "../../types";


export interface AppContext {
  me: GitHubUser | null;
  error: string,
}

export const AppContext = createContext<AppContext | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("use AppContext must be used within a AppProvider");
  }
  return context;
};
