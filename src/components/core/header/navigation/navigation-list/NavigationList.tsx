import css from "./NavigationList.module.scss";

import { NavLink } from "react-router-dom";

const NavigationList = ({ isBurgerOpen, burgerHandler }: IProps) => {
  const navLinks: IRoute[] = [
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

  const navLinkItem: React.ReactNode = navLinks.map(
    ({ label, to, ...props }: IRoute) => (
      <li key={label} className={css.navigationItem} onClick={burgerHandler}>
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
    <ul className={`${css.navigationList} ${isBurgerOpen ? css.active : ""}`}>
      {navLinkItem}
    </ul>
  );
};

interface IRoute {
  label: string;
  to: string;
  exact: boolean;
}

interface IProps {
  isBurgerOpen: boolean;
  burgerHandler: (e: React.MouseEvent) => void;
}

export default NavigationList;
