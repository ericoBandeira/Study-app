import { createContext, useState, ReactNode } from "react";

interface RoutesContextData {
    signedIn: boolean;
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as RoutesContextData);

export function AppProvider({ children }: AppProviderProps) {
    
  const [signedIn, setSignedIn] = useState(false);

  return (
    <AppContext.Provider
        value={{
            signedIn,
            setSignedIn
        }}
    >
      {children}
    </AppContext.Provider>
  );
}