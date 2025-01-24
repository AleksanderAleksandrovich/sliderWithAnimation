import { SliderForCards } from "widgets/SliderForCards";
import classes from "./SliderEvents.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { SliderEventsTitle } from "../SliderEventsTitle/SliderEventsTitle";
import { SliderEventsDate } from "../SliderEventsDate/SliderEventsDate";

type SliderEventsProps = {};

export const SliderEvents = ({}: SliderEventsProps) => {
  return (
    <div className={classNames(classes.sliderEvents, {}, [])}>
      <div className={classes.verticalLine} />
      <div className={classes.horizontalLine} />
      <div className={classes.circle} />
      <SliderEventsTitle value="Исторические даты" />
      {/* <SliderEventsDate beginDate="2015" endDate="2022" className={classes.date} /> */}
      <SliderForCards />
    </div>
  );
};
