import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  BLUE = "blue",
  GRAY = "gray",
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
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  disabled,
  theme,
  size = ButtonSize.M,
  circle,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        classes.button,
        { [classes.circle]: circle, [classes.disabled]: disabled },
        [className, classes[size], classes[theme]]
      )}
      type="button"
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
