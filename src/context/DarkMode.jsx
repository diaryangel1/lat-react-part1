// UP92 BELAJAR USE CONTEXT DENGAN DARKMODE

import { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    // catatan kalau use context providernya kita bikin sendiri berbeda dengan redux
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;

export default DarkModeContextProvider;
