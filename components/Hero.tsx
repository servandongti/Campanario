import React from "react";
import { clsx } from "../utils";
import localFont from '@next/font/local'

export interface HeroProps {
  title?: string;
  sub?: string;
  description?: string;
  colorTitle?: string;
  bold?: boolean;
  size?: string;
}

const museo700 = localFont({ src: '../fonts/Museo700-Regular.otf' })

export const Hero: React.FC<HeroProps> = ({ title, sub, description, colorTitle, size, bold }) => {
  return (
    <>
      <div className={clsx(
        'tracking-tight text-center mx-auto', `${colorTitle}`
      )}>
        <h1
          className={clsx(
            museo700.className,
            `font-extrabold`, `${size ? size : 'md:text-4xl sm:text-5xl'}`,
            'tracking-tight text-center dark:text-white'
          )}>
          {title}
        </h1>
        <span className={clsx(museo700.className,
          'font-extrabold text-4xl ', 'sm:text-5xl lg:text-6xl',
          'tracking-tight text-center dark:text-white')}>
          {sub}
        </span>
      </div>

      <p className={clsx(
        `${size ? size : 'text-lg'} max-w-3xl font-normal p-4`,
        `${bold ? 'font-semibold' : ''}`,
        'mt-6 text-slate-600 text-center mx-auto'
      )}>{description}</p>
    </>
  )
}
