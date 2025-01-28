import { useDispatch, useSelector } from "react-redux";
import { SliderEvents } from "features/SliderEvents";
import { dateEventsActions, getDateEventsState } from "entities/EventsModel";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { current, dateEvents } = useSelector(getDateEventsState);
  const handleNext = () => {
    dispatch(dateEventsActions.nextDateInterval());
  };
  const handlePrev = () => {
    dispatch(dateEventsActions.prevDateInterval());
  };
  const handleSetEvent = (active: number) => {
    dispatch(dateEventsActions.setDateInterval(active));
  };

  return (
    <div>
      <SliderEvents
        current={current}
        events={dateEvents}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleSetEvent={handleSetEvent}
        title="Исторические даты"
      />
    </div>
  );
};
