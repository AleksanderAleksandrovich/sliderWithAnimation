import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import BlueArrow from "shared/assets/icons/BlueArrow.svg";
import classes from "./ButtonControl.module.scss";

type Direction = "left" | "right";

type ButtonControlProps = {
  className?: string;
  direction?: Direction;
  onClick?: () => void;
  hide?: boolean;
};

export const ButtonControl = ({
  className,
  direction = "right",
  onClick,
  hide = false,
}: ButtonControlProps) => {
  return (
    <Button
      theme={ButtonTheme.BLUE}
      circle
      onClick={onClick}
      className={classNames("", { [classes.hide]: hide }, [className])}
    >
      <BlueArrow
        className={classNames(classes.arrow, {}, [classes[direction]])}
      />
    </Button>
  );
};
