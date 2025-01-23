import classes from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

type TextProps = {
  className?: string;
  value: string;
};

export const Text = ({ className, value }: TextProps) => {
  return <p className={classNames(classes.text, {}, [className])}>{value}</p>;
};
