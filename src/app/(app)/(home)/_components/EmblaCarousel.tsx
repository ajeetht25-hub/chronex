"use client";
import React, { useCallback, useEffect } from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import emblaStyle from "./styles/embla.module.css";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import style from "./styles/horizontalcarousel.module.css";
import {cn} from "@/lib/utils";

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
  onSlideChange?: (index: number) => void;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, slides, onSlideChange } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  useEffect(() => {
    if (!emblaApi || !onSlideChange) return;
    
    onSlideChange(emblaApi.selectedScrollSnap());
    
    emblaApi.on('select', () => {
      onSlideChange(emblaApi.selectedScrollSnap());
    });

    return () => {
      emblaApi.off('select', () => {
        onSlideChange(emblaApi.selectedScrollSnap());
      });
    };
  }, [emblaApi, onSlideChange]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    try {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
    } catch (error) {
      console.error("Error in nav button click:", error);
    }
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );
  return (
    <section className={emblaStyle.embla} dir="ltr">
      <div className={emblaStyle.embla__viewport} ref={emblaRef}>
        <div className={`${emblaStyle.embla__container}`}>
          {slides.map((slide, index) => (
            <div
              className={`${emblaStyle.embla__slide} rounded-xl relative`}
              key={index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      {/* Static navigation dots outside the slides */}
      <div className="mt-4 flex justify-center gap-4">
        <div className="lg:px-8 px-2 flex flex-row gap-4">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                `${style.embla__normal}`,
                index === selectedIndex
                  ? style.embla__normalselected
                  : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
