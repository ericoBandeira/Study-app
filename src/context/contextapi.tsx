import { createContext, useState, ReactNode } from "react";

interface RoutesContextData {
  signedIn: boolean;
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userMoney: number;
  setUserMoney: React.Dispatch<React.SetStateAction<number>>;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as RoutesContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [signedIn, setSignedIn] = useState(false);
  const [userMoney, setUserMoney] = useState(0);

  return (
    <AppContext.Provider
      value={{
        signedIn,
        setSignedIn,
        userMoney,
        setUserMoney,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
