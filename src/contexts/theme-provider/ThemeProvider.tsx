import { useEffect, useState } from "react";

import { ThemeContext, themes } from "../themeContext";

const getTheme = () => {
  const theme: any = window.localStorage.getItem("theme");

  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia("(prefers-color-scheme: light)");
  if (userMedia.matches) return themes.light;

  return themes.dark;
};

const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

interface IProps {
  children: React.ReactNode;
}
