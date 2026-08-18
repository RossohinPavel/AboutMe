import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Header } from "./Header/Header";
import { ProfileData } from "./ProfileData/ProfileData";
import { Projects } from "./Projects/Projects";


const localStoragePersister = createAsyncStoragePersister({
  storage: window.localStorage,
  key: "APP_CACHE",
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24,
      gcTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});

export function GitHub() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: localStoragePersister }}
    >
      <div aria-label="Статистика и избранные проекты GitHub">
        <Header />
        <ProfileData />
        <Projects />
      </div>
    </PersistQueryClientProvider>
  );
}
