import css from "./Burger.module.scss";

import { useState } from "react";

const Burger = ({ children }: IProps) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const isActive = isBurgerOpen ? css.active : "";

  const burgerHandler = (): void => {
    setIsBurgerOpen((isOpen: boolean): boolean => !isOpen);
  };

  return (
    <div className={css.burgerWrapper}>
      <div onClick={burgerHandler} className={`${css.burger} ${isActive}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`${css.sideMenu} ${isActive}`}>
        <ul className={css.navigationList}>{children}</ul>
      </div>
    </div>
  );
};

interface IProps {
  children: React.ReactNode;
}

export default Burger;
