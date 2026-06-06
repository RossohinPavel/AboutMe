import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { AppContextProvider } from "./contexts/App";
import "./index.css";


export function App() {
  return (
    <AppContextProvider>
      <Container>
        <Header />
      </Container>
    </AppContextProvider>
  );
};
