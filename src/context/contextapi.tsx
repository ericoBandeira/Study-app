import { createContext, useState, ReactNode } from "react";

interface RoutesContextData {
  signedIn: boolean;
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userMoney: number;
  setUserMoney: React.Dispatch<React.SetStateAction<number>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as RoutesContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [signedIn, setSignedIn] = useState(false);
  const [userMoney, setUserMoney] = useState(0);
  const [token, setToken] = useState("");

  return (
    <AppContext.Provider
      value={{
        signedIn,
        setSignedIn,
        userMoney,
        setUserMoney,
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
