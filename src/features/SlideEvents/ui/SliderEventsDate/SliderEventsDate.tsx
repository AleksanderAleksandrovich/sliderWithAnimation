import { useEffect, useRef, useState } from "react";
import classes from "./SliderEventsDate.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

type SliderEventsDateProps = {
  beginDate: string;
  endDate: string;
  className?: string;
};

export const SliderEventsDate = ({
  beginDate,
  endDate,
  className,
}: SliderEventsDateProps) => {
  const startEl = useRef(null);
  const endEl = useRef(null);

  const initialBeginDate = useRef(beginDate);
  const initialEndDate = useRef(endDate);
  useEffect(() => {
    if (startEl.current && endEl.current) {
      gsap.to(startEl.current, {
        textContent: beginDate,
        duration: 1,
        snap: {
          textContent: 1,
        },
      });
      gsap.to(endEl.current, {
        textContent: endDate,
        duration: 1,
        snap: {
          textContent: 1,
        },
      });
    }
  }, [beginDate, endDate]);

  return (
    <div
      className={classNames(classes.sliderEventsDate, {}, [className])}
      key={"date-wrapper"}
    >
      <h2 ref={startEl} className={classes.beginDate}>
        {initialBeginDate.current}
      </h2>

      <h2 ref={endEl} className={classes.endDate}>
        {initialEndDate.current}
      </h2>
    </div>
  );
};
