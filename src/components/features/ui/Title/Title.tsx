import { createElement } from "react";

interface IProps {
  tagName: string;
  title: string;
  styles: object;
}

const Title = ({ styles, tagName, title }: IProps) => {
  return createElement(`${tagName}`, { style: styles }, title);
};

export default Title;
