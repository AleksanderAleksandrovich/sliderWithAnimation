import classes from "./Title.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

type TitleProps = {
  className?: string;
  value: string;
};

export const Title = ({ value, className }: TitleProps) => {
  return (
    <h3 className={classNames(classes.title, {}, [className])}>{value}</h3>
  );
};
