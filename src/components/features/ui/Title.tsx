import { createElement } from "react";

interface IProps {
  fontSize: string;
  tagName: string;
  title: string;
}

const Title = ({ fontSize, tagName, title }: IProps) => {
  return createElement(`${tagName}`, { style: { fontSize } }, title);
};

export default Title;
