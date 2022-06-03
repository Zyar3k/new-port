import { createContext, useState } from "react";

export const AppContext = createContext({ theme: "light" });

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};
