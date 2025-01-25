import { useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import classes from "./CircleButtons.module.scss";
import { dateEventsActions } from "../../model/slice/dataEventsSlice";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

type CircleButtonsProps = {
  className?: string;
  count: number;
  active: number;
};

export const CircleButtons = ({
  className,
  count,
  active,
}: CircleButtonsProps) => {
  const radius = 264;

  const dispatch = useDispatch();

  const [currentAngle, setCurrentAngle] = useState(0);
  const [targetAngle, setTargetAngle] = useState(0);
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

  const handleClick = (active: number) => {
    dispatch(dateEventsActions.setDateInterval(active));
  };

  const computePosition = (
    index: number,
    total: number,
    radius: number,
    angle: number
  ) => {
    const step = (2 * Math.PI) / total;
    const initialOffset = -Math.PI / 3;
    const currentAngle = step * index + (angle * Math.PI) / 180 + initialOffset;
    const x = radius * Math.cos(currentAngle);
    const y = radius * Math.sin(currentAngle);
    return { x, y };
  };

  const buttons = Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    isActive: i + 1 === active,
  }));

  return (
    <div className={classNames(classes.circle, {}, [className])}>
      <div className={classes.circleContainer}>
        {buttons.map(({ id, isActive }, index) => {
          const { x, y } = computePosition(index, count, radius, currentAngle);
          return (
            <Button
              key={id}
              style={{
                top: `${radius + y}px`,
                left: `${radius + x}px`,
              }}
              className={classes.button}
              size={ButtonSize.XL}
              theme={ButtonTheme.GRAY}
              circle
              selected={isActive}
              animated
              onClick={() => handleClick(index)}
            >
              {id}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
