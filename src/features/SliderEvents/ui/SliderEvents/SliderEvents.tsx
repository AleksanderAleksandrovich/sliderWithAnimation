import { SliderEventsTitle } from "../SliderEventsTitle/SliderEventsTitle";
import { SliderEventsDate } from "../SliderEventsDate/SliderEventsDate";

import { SliderEventsControl } from "../SliderEventsControl/SliderEventsControl";
import { CircleButtons } from "../CircleButtons/CircleButtons";
import classes from "./SliderEvents.module.scss";
import { TitleEvent } from "../TitleEvent/TitleEvent";

import { SliderForCards } from "widgets/SliderForCards";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useWindowWidth } from "shared/lib/hooks/useWindowWidth";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
// import { DateEvent } from "shared/data/type";
import { useState } from "react";
import { data } from "shared/data/data";

type SliderEventsProps = {
  // events: DateEvent[];
  // current: number;
  // handleNext: () => void;
  // handlePrev: () => void;
  // handleSetEvent: (event: number) => void;
  title: string;
};

export const SliderEvents = ({
  // current,
  // events,
  // handleNext,
  // handlePrev,
  // handleSetEvent,
  title,
}: SliderEventsProps) => {
  const [current, setCurrent] = useState(0);
  const widthWindow = useWindowWidth();

  const handleNext = () => {
    if (data.length - 1 > current) {
      setCurrent((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (0 < current) {
      setCurrent((prev) => prev - 1);
    }
  };
  const handleSetEvent = (active: number) => {
    if (active < data.length) {
      setCurrent(active);
    }
  };
  const isEnd = current === data.length - 1;
  const isStart = current === 0;

  const isDesktop = widthWindow > 500;

  const desktopVersion = () => (
    <div className={classNames(classes.sliderEvents, {}, [])}>
      <div className={classes.verticalLine} />
      <div className={classes.horizontalLine} />
      <CircleButtons
        className={classes.circleButtons}
        count={data.length}
        active={current + 1}
        handleSetEvent={handleSetEvent}
        titleEvent={data[current].title}
      />

      <SliderEventsTitle value={title} />
      <SliderEventsDate
        beginDate={data[current].dateStart}
        endDate={data[current].dateEnd}
        className={classes.date}
      />
      <div className={classes.wrapperBlockControl}>
        <Text size={TextSize.S} value={`0${current + 1}/0${data.length}`} />

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
        facts={data[current].facts}
        className={classes.sliderCards}
      />
    </div>
  );

  const mobileVersion = () => (
    <div className={classNames(classes.sliderEvents, {}, [])}>
      <SliderEventsTitle value={title} isDesktop={isDesktop} />
      <SliderEventsDate
        beginDate={data[current].dateStart}
        endDate={data[current].dateEnd}
        className={classes.date}
      />

      <TitleEvent
        titleEvent={data[current].title}
        className={classes.titleEvent}
        isDesktop={false}
      />

      <div className={classes.horizontalLineMobile} />

      <SliderForCards
        facts={data[current].facts}
        className={classes.sliderCards}
        isDesktop={isDesktop}
      />
      <div className={classes.wrapperBlockControl}>
        <Text size={TextSize.S} value={`0${current + 1}/0${data.length}`} />

        <div className={classes.wrapperController}>
          <SliderEventsControl
            direction="left"
            onClick={handlePrev}
            disabled={isStart}
            isDesktop={isDesktop}
          />
          <SliderEventsControl
            onClick={handleNext}
            disabled={isEnd}
            isDesktop={isDesktop}
          />
        </div>
      </div>
      <div className={classes.paginationWrapper}>
        {data.map(({ dateEnd }, index) => (
          <Button
            key={dateEnd}
            circle
            selected={index === current}
            onClick={() => handleSetEvent(index)}
            theme={ButtonTheme.WITHOUTBORDER}
            size={ButtonSize.SMOBILE}
          />
        ))}
      </div>
    </div>
  );

  if (isDesktop) return desktopVersion();

  return mobileVersion();
};
