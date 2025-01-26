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
  isDesktop?: boolean;
};

export const SliderForCards = ({
  facts,
  className,
  isDesktop = true,
}: SliderForCardsProps) => {
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
        duration: 0.5,
        onComplete: () => {
          setCurrentFacts(facts);

          gsap.fromTo(
            wrapperRef.current,
            { opacity: 0 },
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
  }, [facts]);

  const prevHandler = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const sliderSettings = {
    spaceBetween: isDesktop ? 80 : 25,
    slidesPerView: isDesktop ? 3 : 1.5,
    onSlideChange: (swiper: SwiperClass) => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    },
  };

  return (
    <div
      className={classNames(classes.sliderWrapper, {}, [className])}
      ref={wrapperRef}
    >
      {!isBeginning && isDesktop && (
        <ButtonControl
          direction="left"
          className={classes.btnPrev}
          onClick={prevHandler}
        />
      )}
      {!isEnd && isDesktop && (
        <ButtonControl
          direction="right"
          className={classes.btnNext}
          onClick={nextHandler}
        />
      )}
      <Swiper
        {...sliderSettings}
        className={classes.swiperContainer}
        ref={swiperRef}
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
