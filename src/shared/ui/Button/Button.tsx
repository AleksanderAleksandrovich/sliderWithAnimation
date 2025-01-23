import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  BLUE = "blue",
}

export enum ButtonSize {
  M = "sizeM",
  L = "sizeL",
  XL = "sizeXl",
}

type ButtonProps = {
  theme?: ButtonTheme;
  circle?: boolean;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  theme,
  size = ButtonSize.M,
  circle,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(classes.button, { [classes.circle]: circle }, [
        className,
        classes[size],
        classes[theme],
      ])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
