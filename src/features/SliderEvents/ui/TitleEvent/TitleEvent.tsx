import { useEffect, useRef, useState } from "react";
import classes from "./TitleEvent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import gsap from "gsap";

type TitleEventProps = {
  className?: string;
  titleEvent?: string;
  direction: "clockwise" | "counterclockwise";
};

export const TitleEvent = ({
  className,
  titleEvent,
  direction,
}: TitleEventProps) => {
  let titleRef = useRef(null);

  const [currentTitleEvent, setCurrentTitleEvent] = useState(titleEvent);

  useEffect(() => {
    let fadeOutAnimation: ReturnType<typeof gsap.to>;
    const animation =
      direction === "clockwise"
        ? {
            x: 50,
            y: 70,
          }
        : {
            x: -70,
            y: -30,
          };
    if (titleEvent !== currentTitleEvent) {
      fadeOutAnimation = gsap.to(titleRef.current, {
        opacity: 0,
        ...animation,
        duration: 0.5,
        onComplete: () => {
          setCurrentTitleEvent(titleEvent);
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, x: 0, y: 0 },
            { opacity: 1, duration: 0.5 }
          );
        },
      });
    }

    return () => {
      if (fadeOutAnimation) {
        fadeOutAnimation.kill();
      }
    };
  }, [titleEvent, direction]);

  return (
    <h3 ref={titleRef} className={classNames(classes.title, {}, [className])}>
      {currentTitleEvent}
    </h3>
  );
};
