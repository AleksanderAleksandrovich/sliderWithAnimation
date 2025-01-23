import "swiper/scss";
import { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";

import classes from "./Slider.module.scss";
import { ButtonControl } from "../ButtonControl/ButtonControl";
import { Card } from "../Card/Card";

import { data } from "shared/data/data";

export const SliderForCards = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevHandler = () => {
    swiperRef.current.swiper.slidePrev();
  };
  const nextHandler = () => {
    swiperRef.current.swiper.slideNext();
  };

  const onSlideChange = (slide: SwiperClass) => {
    setIsBeginning(slide.isBeginning);
    setIsEnd(slide.isEnd);
  };
  return (
    <div className={classes.sliderWrapper}>
      {!isBeginning && (
        <ButtonControl
          direction="left"
          className={classes.btnPrev}
          onClick={prevHandler}
        />
      )}
      {!isEnd && (
        <ButtonControl
          direction="right"
          className={classes.btnNext}
          onClick={nextHandler}
        />
      )}
      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        ref={swiperRef}
        onSlideChange={onSlideChange}
      >
        {data.map((el) => (
          <SwiperSlide key={el.title}>
            <Card fact={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
