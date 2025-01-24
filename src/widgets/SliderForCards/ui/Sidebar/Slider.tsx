import "swiper/scss";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import gsap from "gsap";

import classes from "./Slider.module.scss";
import { ButtonControl } from "../ButtonControl/ButtonControl";
import { Card } from "../Card/Card";
import { Fact } from "shared/data/type";
import { classNames } from "shared/lib/classNames/classNames";

type SliderForCardsProps = {
  facts: Fact[];
  className?: string;
};

export const SliderForCards = ({ facts, className }: SliderForCardsProps) => {
  const swiperRef = useRef<SwiperRef>(null);
  const wrapperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [currentFacts, setCurrentFacts] = useState(facts);

  useEffect(() => {
    let fadeOutAnimation: ReturnType<typeof gsap.to>;

    if (facts !== currentFacts) {
      fadeOutAnimation = gsap.to(wrapperRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setCurrentFacts(facts);

          gsap.fromTo(
            wrapperRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
          );
        },
      });
    }

    return () => {
      if (fadeOutAnimation) {
        fadeOutAnimation.kill();
      }
    };
  }, [facts]);

  const prevHandler = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const onSlideChange = (slide: SwiperClass) => {
    setIsBeginning(slide.isBeginning);
    setIsEnd(slide.isEnd);
  };

  return (
    <div
      className={classNames(classes.sliderWrapper, {}, [className])}
      ref={wrapperRef}
    >
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
        {currentFacts.map((el) => (
          <SwiperSlide key={el.id}>
            <Card fact={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
