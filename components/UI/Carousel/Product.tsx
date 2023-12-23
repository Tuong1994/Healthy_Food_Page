"use client";

import React from "react";
import { CarouselItems } from "./type";
import {
  HiOutlineChevronLeft as ArrowLeft,
  HiOutlineChevronRight as ArrowRight,
  HiListBullet as List,
} from "react-icons/hi2";
import useCarousel from "./useCarousel";
import useRender from "@/hooks/useRender";
import useClickOutside from "@/hooks/useClickOutside";

export interface CarouselProductProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  items?: CarouselItems;
  slideId?: string;
  time?: number;
  infinite?: boolean;
  autoPlay?: boolean;
  hasManualStop?: boolean;
  leftButtonIcon?: React.ReactNode | React.ReactNode[];
  rightButtonIcon?: React.ReactNode | React.ReactNode[];
  mode?: "dark" | "light";
}

const widthSpan = 100;

let interval: any;

const CarouselProduct: React.ForwardRefRenderFunction<HTMLDivElement, CarouselProductProps> = (
  {
    rootClassName = "",
    style,
    slideId = "slide",
    mode = "dark",
    time = 3000,
    infinite,
    autoPlay,
    hasManualStop,
    leftButtonIcon = <ArrowLeft size={30} />,
    rightButtonIcon = <ArrowRight size={30} />,
    items = [
      { id: "1", content: "Content 1" },
      { id: "2", content: "Content 2" },
      { id: "3", content: "Content 3" },
      { id: "4", content: "Content 4" },
      { id: "5", content: "Content 5" },
    ],
  },
  ref
) => {
  const [slidePos, setSlidePos] = React.useState<number>(0);

  const [touchStartPos, setTouchStartPos] = React.useState<number>(0);
  const [touchEndPos, setTouchEndPos] = React.useState<number>(0);
  const [touched, setTouched] = React.useState<boolean>(false);
  const [touchSwiped, setTouchSwiped] = React.useState<boolean>(false);

  const [mouseStartPos, setMouseStartPos] = React.useState<number>(0);
  const [mouseEndPos, setMouseEndPos] = React.useState<number>(0);
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [mouseSwiped, setMouseSwiped] = React.useState<boolean>(false);

  const [manualStop, setManualStop] = React.useState<boolean>(time !== undefined);

  const [showList, setShowList] = React.useState<boolean>(false);

  const listRef = React.useRef<HTMLDivElement>(null);

  const { translateFull, translatePartial, translateAnimation } = useCarousel({ items, slideId, slidePos });

  const render = useRender(showList);

  useClickOutside(listRef, setShowList);

  React.useEffect(() => {
    if (autoPlay) {
      if (manualStop && !clicked && !touched) {
        interval = setInterval(() => handleNextSlide(), time);
      }
    }
    return () => clearInterval(interval);
  });

  const modeClassName = `carousel-${mode}`;

  const isReSlide = infinite || autoPlay;

  const prevBtnDisabled = !isReSlide && slidePos === 0;

  const nextBtnDisabled = !isReSlide && slidePos === items.length - 1;

  const prevBtnDisabledClassName = prevBtnDisabled ? "carousel-action-disabled" : "";

  const nextBtnDisabledClassName = nextBtnDisabled ? "carousel-action-disabled" : "";

  const showListClassName = showList ? "responsive-list-active" : "";

  const jumpToSlide = (pos: number) => {
    setSlidePos(pos);
    translateFull(pos, "horizontal");
  };

  const handleManualStop = () => {
    clearInterval(interval);
    if (hasManualStop) setManualStop(false);
  };

  const handlePrevSlide = () => {
    let newPos = slidePos;
    if (newPos > 0) newPos -= 1;
    else if (isReSlide) newPos = items.length - 1;
    setSlidePos(newPos);
    translateFull(newPos, "horizontal");
  };

  const handleNextSlide = () => {
    let newPos = slidePos;
    if (newPos < items.length - 1) newPos += 1;
    else if (isReSlide) newPos = 0;
    setSlidePos(newPos);
    translateFull(newPos, "horizontal");
  };

  const onPrev = () => {
    handlePrevSlide();
    handleManualStop();
  };

  const onNext = () => {
    handleNextSlide();
    handleManualStop();
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartPos(e.touches[0].clientX);
    setTouchEndPos(e.touches[0].clientX);
    setTouched(true);
    translateAnimation("fast");
    handleManualStop();
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touched) return;
    setTouchEndPos(e.touches[0].clientX);
    const viewWidth = document.getElementById("carouselView")?.offsetWidth;
    if (viewWidth) {
      const translate = ((touchEndPos - touchStartPos) / viewWidth) * widthSpan;
      translatePartial(translate, "horizontal");
      setTouchSwiped(true);
    }
  };

  const onTouchEnd = () => {
    if (!touchSwiped) return;
    if (touchEndPos - touchStartPos > 75) handlePrevSlide();
    else if (touchEndPos - touchStartPos < -75) handleNextSlide();
    else jumpToSlide(slidePos);
    setManualStop(true);
    setTouched(false);
    setTouchSwiped(false);
    translateAnimation("slow");
  };

  const onMouseStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMouseStartPos(e.clientX);
    setMouseEndPos(e.clientX);
    setClicked(true);
    translateAnimation("fast");
    handleManualStop();
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!clicked) return;
    setMouseEndPos(e.clientX);
    const viewWidth = document.getElementById("carouselView")?.offsetWidth;
    if (viewWidth) {
      const translate = ((mouseEndPos - mouseStartPos) / viewWidth) * widthSpan;
      translatePartial(translate, "horizontal");
      setMouseSwiped(true);
    }
  };

  const onMouseEnd = () => {
    if (!mouseSwiped) return;
    if (mouseEndPos - mouseStartPos > 100) handlePrevSlide();
    else if (mouseEndPos - mouseStartPos < -100) handleNextSlide();
    else jumpToSlide(slidePos);
    setManualStop(true);
    setClicked(false);
    setMouseSwiped(false);
    translateAnimation("slow");
  };

  const renderItems = () => {
    return items.map((item, idx) => (
      <div key={item.id} id={`${slideId}-${idx}`} className="view-item">
        {item.content}
      </div>
    ));
  };

  const renderList = () => {
    return items.map((item, idx) => {
      const itemActiveClassName = slidePos === idx ? "list-item-active" : "";
      return (
        <div key={item.id} className={`list-item ${itemActiveClassName}`} onClick={() => jumpToSlide(idx)}>
          {item.content}
        </div>
      );
    });
  };

  return (
    <div ref={ref} style={style} className={`carousel carousel-product ${modeClassName} ${rootClassName}`}>
      <div className="product-list">{renderList()}</div>

      <div className="product-view">
        <button disabled={prevBtnDisabled} className={`carousel-action ${prevBtnDisabledClassName}`} onClick={onPrev}>
          {leftButtonIcon}
        </button>
        <button disabled={nextBtnDisabled} className={`carousel-action ${nextBtnDisabledClassName}`} onClick={onNext}>
          {rightButtonIcon}
        </button>
        <div className="view-slide">
          <div
            id="carouselView"
            className="carousel-view"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseStart}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseEnd}
            onMouseLeave={onMouseEnd}
          >
            {renderItems()}
          </div>
        </div>
      </div>

      <div ref={listRef} className="product-list-responsive">
        <div className="responsive-label" onClick={() => setShowList(!showList)}>
          <List size={20} />
        </div>
        {render && <div className={`responsive-list ${showListClassName}`}>{renderList()}</div>}
      </div>
    </div>
  );
};

export default React.forwardRef(CarouselProduct);
