import css from "./Header.module.scss";

import { useState } from "react";

import Navigation from "./navigation/Navigation";

import { themes } from "../../../contexts/themeContext";
import { NavLink } from "react-router-dom";

const Header = ({ theme, setTheme }: IProps) => {
  const [isChecked, setIsChecked] = useState(theme === "dark" ? false : true);

  const handlerTheme = () => {
    setIsChecked((isChecked: boolean): boolean => !isChecked);
    if (theme === themes.light) setTheme(themes.dark);
    if (theme === themes.dark) setTheme(themes.light);
  };

  return (
    <header className={css.header}>
      <NavLink to="/">
        <h2 className={css.headerTitle}>
          <span>My</span> <span>portfolio</span>
        </h2>
      </NavLink>

      <div className={css.features}>
        <div className={css.themeChanger}>
          <input
            id="theme"
            name="theme"
            type="checkbox"
            defaultChecked={isChecked}
            onChange={handlerTheme}
            className={css.themeChangerInput}
          />
          <label htmlFor="theme"></label>
        </div>

        <Navigation />
      </div>
    </header>
  );
};

interface IProps {
  theme: string;
  setTheme: Function;
}

export default Header;
