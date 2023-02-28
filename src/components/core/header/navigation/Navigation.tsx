import css from "./Navigation.module.scss";

import { NavLink } from "react-router-dom";
import Burger from "../../../features/burger/Burger";

const Navigation = (): JSX.Element => {
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
        <Burger>
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
