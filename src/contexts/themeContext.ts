import { createContext } from "react";

export const themes: Theme = {
  dark: "dark",
  light: "light",
};

type Theme = {
  dark: string;
  light: string;
};

export const ThemeContext = createContext({});
