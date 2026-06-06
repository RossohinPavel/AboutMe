import { createContext, useContext } from 'react';


export interface AppContext {}

const AppContext = createContext<AppContext | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('use AppContext must be used within a AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children?: React.ReactNode;
}

export function AppProvider(props: AppProviderProps) {
  const { children } = props;

  const value: AppContext = {};

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}