import React from 'react';

interface Props {
  carouselText: string;
}

export const Service: React.FC<Props> = ({ carouselText }) => {
  return (
    <div className="flex flex-col jusitfy-center text-center px-5 md:px-10 lg:px-20">
      <div className="text-xl md:text-2xl leading-10 lg:leading-[3rem]">
        {carouselText}
      </div>
    </div>
  );
};
