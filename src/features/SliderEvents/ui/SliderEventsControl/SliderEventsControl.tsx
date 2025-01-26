import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import classes from "./SliderEventsControl.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import GrayArrow from "shared/assets/icons/GrayArrow.svg";
import GrayArrowMobile from "shared/assets/icons/GrayArrowMobile.svg";

type Direction = "left" | "right";

type SliderEventsControlProps = {
  className?: string;
  disabled?: boolean;
  direction?: Direction;
  onClick?: () => void;
  isDesktop?: boolean;
};

export const SliderEventsControl = ({
  className,
  disabled,
  direction = "right",
  isDesktop = true,
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
      {isDesktop ? (
        <GrayArrow className={classNames("", {}, [classes[direction]])} />
      ) : (
        <GrayArrowMobile className={classNames("", {}, [classes[direction]])} />
      )}
    </Button>
  );
};
