import classes from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum TextSize {
  S = "sizeS",
  M = "sizeM",
}

type TextProps = {
  className?: string;
  size?: TextSize;
  value: string;
};

export const Text = ({ className, value, size = TextSize.M }: TextProps) => {
  return (
    <p className={classNames("", {}, [className, classes[size]])}>
      {value}
    </p>
  );
};
