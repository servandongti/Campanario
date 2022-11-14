import React from 'react';
import { CarouselItem } from './CarouselItem';
import { Carousel } from './Carousel';
import { Service } from './Services';
import { services } from '../utils';

export const Slider: React.FC = () => {
  return (
    <Carousel className="bg-black text-slate-100 font-semibold py-10 lg:py-20">
      {
        services.map((service, index) => (
          <CarouselItem index={index} key={service}>
            <Service carouselText={service} />
          </CarouselItem>
        ))
      }
    </Carousel>
  );
};
