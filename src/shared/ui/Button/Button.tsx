import { ButtonHTMLAttributes, forwardRef, useRef } from "react";
import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  BLUE = "blue",
  GRAY = "gray",
  WITHOUTBORDER = "withoutBorder",
}

export enum ButtonSize {
  SMOBILE = "sizeSMobile",
  M = "sizeM",
  L = "sizeL",
  XL = "sizeXl",
}

type ButtonProps = {
  theme?: ButtonTheme;
  circle?: boolean;
  size?: ButtonSize;
  animated?: boolean;
  selected?: boolean;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      animated = false,
      selected = false,
      theme,
      size = ButtonSize.M,
      circle,
      ...otherProps
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(
          classes.button,
          {
            [classes.circle]: circle,
            [classes.disabled]: disabled,
            [classes.animated]: animated,
            [classes.selected]: selected,
          },
          [className, classes[size], classes[theme]]
        )}
        type="button"
        disabled={disabled}
        {...otherProps}
      >
        <span>{children}</span>
      </button>
    );
  }
);
