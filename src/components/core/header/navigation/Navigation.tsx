import css from "./Navigation.module.scss";

import { useState } from "react";

import Burger from "../../../features/burger/Burger";
import NavigationList from "./navigation-list/NavigationList";

const Navigation = (): JSX.Element => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const burgerHandler = (e: React.MouseEvent): void => {
    setIsBurgerOpen((isOpen: boolean): boolean => !isOpen);
  };

  if (isBurgerOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <>
      <nav className={css.navigation}>
        <NavigationList
          isBurgerOpen={isBurgerOpen}
          burgerHandler={burgerHandler}
        />
        <Burger isBurgerOpen={isBurgerOpen} burgerHandler={burgerHandler} />
      </nav>
    </>
  );
};

export default Navigation;
