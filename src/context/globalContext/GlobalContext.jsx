import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
  return <GlobalContext.Provider value={{
    
  }}>{children}</GlobalContext.Provider>;
}
