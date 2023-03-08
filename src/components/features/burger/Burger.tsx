import css from "./Burger.module.scss";

const Burger = ({ isBurgerOpen, burgerHandler }: IProps) => {
  const isActive = isBurgerOpen ? css.active : "";

  if (isBurgerOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <div onClick={burgerHandler} className={`${css.burger} ${isActive}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

interface IProps {
  isBurgerOpen: boolean;
  burgerHandler: (e: React.MouseEvent) => void;
}

export default Burger;
