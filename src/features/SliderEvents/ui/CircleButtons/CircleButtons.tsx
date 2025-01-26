import { useEffect, useState, useRef } from "react";
import classes from "./CircleButtons.module.scss";
import { computePosition } from "../../utils/ComputedPositionInCircle/ComputedPositionInCircle";
import { TitleEvent } from "../TitleEvent/TitleEvent";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

type CircleButtonsProps = {
  className?: string;
  count: number;
  active: number;
  handleSetEvent: (event: number) => void;
  titleEvent: string;
};

export const CircleButtons = ({
  className,
  count,
  active,
  handleSetEvent,
  titleEvent,
}: CircleButtonsProps) => {
  const radius = 264;

  const [currentAngle, setCurrentAngle] = useState(0);
  const [targetAngle, setTargetAngle] = useState(0);
  const [direction, setDirection] = useState<"clockwise" | "counterclockwise">(
    "clockwise"
  );
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const step = 360 / count;
    const newTargetAngle = -step * (active - 1);

    const currentPos = currentAngle % 360;
    const targetPos = newTargetAngle % 360;

    let diff = targetPos - currentPos;

    if (Math.abs(diff) > 180) {
      diff = diff > 0 ? diff - 360 : diff + 360;
    }

    setDirection(diff > 0 ? "clockwise" : "counterclockwise");

    setTargetAngle(currentAngle + diff);
  }, [active, count]);

  useEffect(() => {
    const animateCircle = () => {
      const diff = targetAngle - currentAngle;

      if (Math.abs(diff) > 0.1) {
        const step = diff * 0.03;
        const newAngle = currentAngle + step;

        setCurrentAngle(newAngle);
        rafRef.current = requestAnimationFrame(animateCircle);
      } else {
        setCurrentAngle(targetAngle);
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
      }
    };

    if (currentAngle !== targetAngle) {
      rafRef.current = requestAnimationFrame(animateCircle);
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [currentAngle, targetAngle]);

  const buttons = Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    isActive: i + 1 === active,
  }));

  return (
    <div className={classNames(classes.circle, {}, [className])}>
      <TitleEvent
        titleEvent={titleEvent}
        className={classes.titleEvent}
        direction={direction}
      />
      <div className={classes.circleContainer}>
        {buttons.map(({ id, isActive }, index) => {
          const { x, y } = computePosition(index, count, radius, currentAngle);
          return (
            <Button
              key={id}
              className={classes.button}
              size={ButtonSize.XL}
              theme={ButtonTheme.GRAY}
              circle
              selected={isActive}
              animated
              onClick={() => handleSetEvent(index)}
              style={{
                top: `${radius + y}px`,
                left: `${radius + x}px`,
              }}
            >
              {id}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
