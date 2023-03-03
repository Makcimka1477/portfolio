import css from "./Burger.module.scss";

const Burger = ({ children, isBurgerOpen, burgerHandler }: IProps) => {
  const isActive = isBurgerOpen ? css.active : "";

  if (isBurgerOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <div className={css.burgerWrapper}>
      <div onClick={burgerHandler} className={`${css.burger} ${isActive}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div onClick={burgerHandler} className={`${css.sideMenu} ${isActive}`}>
        <ul className={css.navigationList}>{children}</ul>
      </div>
    </div>
  );
};

interface IProps {
  isBurgerOpen: boolean;
  children: React.ReactNode;
  burgerHandler: (e: React.MouseEvent) => void;
}

export default Burger;
