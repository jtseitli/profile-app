import { createContext, useState } from "react";

export const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <div className={mode === "light" ? "light-mode" : "dark-mode"}>
        {children}
      </div>
    </ModeContext.Provider>
  );
}
