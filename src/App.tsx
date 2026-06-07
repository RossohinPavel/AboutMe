import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { UserCard } from "./components/UserCard/UserCard";
import { AppContextProvider } from "./contexts/App";
import "./index.scss";


export function App() {
  return (
    <AppContextProvider>
      <Container>
        <Header />
        <UserCard />
      </Container>
    </AppContextProvider>
  );
};
