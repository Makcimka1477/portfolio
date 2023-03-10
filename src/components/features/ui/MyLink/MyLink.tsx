import css from "./MyLink.module.scss";

interface IProps {
  link: string;
  style?: object;
  children: string | React.ReactElement;
}

const MyLink = ({ link, style, children }: IProps) => {
  const allStyles =
    typeof children === "string"
      ? { ...style, padding: "10px 15px" }
      : { ...style, padding: "5px 10px" };

  return (
    <a href={link} style={allStyles} className={css.myLink}>
      {children}
    </a>
  );
};

export default MyLink;
