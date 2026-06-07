import { useEffect, useState } from "react";
import * as config from "../../config";
import type { GitHubUser } from "../../types";
import { AppContext } from "./context";


interface AppContextProviderProps {
  children?: React.ReactNode;
}

export function AppContextProvider(props: AppContextProviderProps) {
  const [me, setMe] = useState<GitHubUser | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(config.API_URL)
      .then(response => response.json())
      .then((data: GitHubUser) => setMe(data))
      .catch((error: Error) => setError(error.message));
  }, []);

  const value: AppContext = { me, error };
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}