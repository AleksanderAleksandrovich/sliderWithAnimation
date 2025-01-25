import { useDispatch, useSelector } from "react-redux";
import { SliderEventsTitle } from "../SliderEventsTitle/SliderEventsTitle";
import { SliderEventsDate } from "../SliderEventsDate/SliderEventsDate";
import { getDateEventsState } from "../../model/selectors/getDateEventsState";
import { dateEventsActions } from "../../model/slice/dataEventsSlice";
import { SliderEventsControl } from "../SliderEventsControl/SliderEventsControl";
import { CircleButtons } from "../CircleButtons/CircleButtons";
import classes from "./SliderEvents.module.scss";

import { SliderForCards } from "widgets/SliderForCards";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text/Text";
type SliderEventsProps = {};

export const SliderEvents = ({}: SliderEventsProps) => {
  const { dateEvents, current } = useSelector(getDateEventsState);
  const dispatch = useDispatch();

  const isEnd = current === dateEvents.length - 1;
  const isStart = current === 0;

  const handleNext = () => {
    dispatch(dateEventsActions.nextDateInterval());
  };
  const handlePrev = () => {
    dispatch(dateEventsActions.prevDateInterval());
  };

  return (
    <div className={classNames(classes.sliderEvents, {}, [])}>
      <div className={classes.verticalLine} />
      <div className={classes.horizontalLine} />
      <CircleButtons
        className={classes.circleButtons}
        count={dateEvents.length}
        active={current + 1}
      />
      <SliderEventsTitle value="Исторические даты" />
      <SliderEventsDate
        beginDate={dateEvents[current].dateStart}
        endDate={dateEvents[current].dateEnd}
        className={classes.date}
      />
      <div className={classes.wrapperBlockControl}>
        <Text
          size={TextSize.S}
          value={`0${current + 1}/0${dateEvents.length}`}
        />

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
        facts={dateEvents[current].facts}
        className={classes.sliderCards}
      />
    </div>
  );
};
