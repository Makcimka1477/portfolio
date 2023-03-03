import css from "./Navigation.module.scss";

import { NavLink } from "react-router-dom";
import Burger from "../../../features/burger/Burger";
import { useState } from "react";

const Navigation = (): JSX.Element => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const burgerHandler = (e: React.MouseEvent): void => {
    setIsBurgerOpen((isOpen: boolean): boolean => !isOpen);
  };

  const linksItems: IRoute[] = [
    {
      label: "HOME",
      to: "/",
      exact: true,
    },
    {
      label: "PROJECTS",
      to: "/projects",
      exact: false,
    },
    {
      label: "ABOUT",
      to: "/about",
      exact: false,
    },
  ];

  const renderLinks: React.ReactNode = linksItems.map(
    ({ label, to, ...props }: IRoute) => (
      <li key={label} className={css.navigationItem}>
        <NavLink
          className={(isActive) => (isActive ? css.active : "")}
          to={to}
          {...props}
        >
          {label}
        </NavLink>
      </li>
    )
  );

  return (
    <>
      <nav className={css.navigation}>
        <div className={css.navigationPanel}>
          <ul className={css.navigationList}>{renderLinks}</ul>
        </div>
        <Burger isBurgerOpen={isBurgerOpen} burgerHandler={burgerHandler}>
          <ul className={css.navigationList}>{renderLinks}</ul>
        </Burger>
      </nav>
    </>
  );
};

interface IRoute {
  label: string;
  to: string;
  exact: boolean;
}

export default Navigation;
