import Image from 'next/image';
import React from 'react';

export const Logo = ({ src }: { src: string }) => {
  return (
    <Image src={src} alt='El Campanario' width={48} height={48} />
  )
}
