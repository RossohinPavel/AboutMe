import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./Header/Header";
import { ProfileData } from "./ProfileData/ProfileData";
import { Projects } from "./Projects/Projects";


const queryClient = new QueryClient();

export function GitHub() {
  return (
    <QueryClientProvider client={queryClient}>
      <div aria-label="Статистика и избранные проекты GitHub">
        <Header />
        <ProfileData />
        <Projects />
      </div>
    </QueryClientProvider>
  );
}
