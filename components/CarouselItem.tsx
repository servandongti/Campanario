import React, { useContext, useCallback } from 'react';
import { CarouselContext } from './Carousel';
import styles from '../styles/Carousel.module.css';

interface Props {
  index: number;
  children: JSX.Element | JSX.Element[];
}

export const CarouselItem: React.FC<Props> = ({ index, children }) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext);
  const isActive = selectedIndex === index;

  const handleClick = useCallback(() => {
    if (emblaApi === undefined) return;
    emblaApi.scrollTo(index);
  }, [emblaApi, index]);

  return (
    <div
      className={`${styles.slide} relative ${isActive ? 'active' : ''}`}
      onClick={handleClick}>
      {children}
    </div>
  );
};
