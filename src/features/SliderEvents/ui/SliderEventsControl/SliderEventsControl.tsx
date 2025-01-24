import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import classes from "./SliderEventsControl.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import GrayArrow from "shared/assets/icons/GrayArrow.svg";

type Direction = "left" | "right";

type SliderEventsControlProps = {
  className?: string;
  disabled?: boolean;
  direction?: Direction;
  onClick?: () => void;
};

export const SliderEventsControl = ({
  className,
  disabled,
  direction = "right",
  onClick,
}: SliderEventsControlProps) => {
  return (
    <Button
      theme={ButtonTheme.GRAY}
      size={ButtonSize.L}
      circle
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      <GrayArrow className={classNames("", {}, [classes[direction]])} />
    </Button>
  );
};
