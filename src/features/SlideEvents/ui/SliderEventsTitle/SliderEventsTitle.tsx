import classes from "./SliderEventsTitle.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

type SliderEventsTitleProps = {
  className?: string;
  value: string;
};

export const SliderEventsTitle = ({
  className,
  value,
}: SliderEventsTitleProps) => {
  return (
    <div className={classNames(classes.wrapperTitle, {}, [className])}>
      <div className={classes.line} />
      <h1 className={classes.title}>{value}</h1>
    </div>
  );
};
