import { SliderEventsTitle } from "../SliderEventsTitle/SliderEventsTitle";
import { SliderEventsDate } from "../SliderEventsDate/SliderEventsDate";

import { SliderEventsControl } from "../SliderEventsControl/SliderEventsControl";
import { CircleButtons } from "../CircleButtons/CircleButtons";
import { DateEvent } from "../../model/types/dateEventsSchema";
import classes from "./SliderEvents.module.scss";

import { SliderForCards } from "widgets/SliderForCards";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text/Text";

type SliderEventsProps = {
  events: DateEvent[];
  current: number;
  handleNext: () => void;
  handlePrev: () => void;
  handleSetEvent: (event: number) => void;
  title: string;
};

export const SliderEvents = ({
  current,
  events,
  handleNext,
  handlePrev,
  handleSetEvent,
  title,
}: SliderEventsProps) => {
  const isEnd = current === events.length - 1;
  const isStart = current === 0;

  return (
    <div className={classNames(classes.sliderEvents, {}, [])}>
      <div className={classes.verticalLine} />
      <div className={classes.horizontalLine} />
      <CircleButtons
        className={classes.circleButtons}
        count={events.length}
        active={current + 1}
        handleSetEvent={handleSetEvent}
        titleEvent={events[current].title}
      />

      <SliderEventsTitle value={title} />
      <SliderEventsDate
        beginDate={events[current].dateStart}
        endDate={events[current].dateEnd}
        className={classes.date}
      />
      <div className={classes.wrapperBlockControl}>
        <Text size={TextSize.S} value={`0${current + 1}/0${events.length}`} />

        <div className={classes.wrapperController}>
          <SliderEventsControl
            direction="left"
            onClick={handlePrev}
            disabled={isStart}
          />
          <SliderEventsControl onClick={handleNext} disabled={isEnd} />
        </div>
      </div>
      <SliderForCards
        facts={events[current].facts}
        className={classes.sliderCards}
      />
    </div>
  );
};
