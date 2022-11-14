import React from "react";
import { clsx } from "../utils";
import localFont from '@next/font/local'

interface HeroProps {
  title: string;
  sub?: string;
  desc?: string;
  colorTitle?: string;
}

const museo700 = localFont({ src: '../fonts/Museo700-Regular.otf' })

export const Hero: React.FC<HeroProps> = ({ title, sub, desc, colorTitle }) => {
  return (
    <>
      <div className={clsx(
        'font-extrabold text-4xl sm:text-5xl lg:text-6xl max-w-sm sm:max-w-3xl lg:max-w-4xl',
        'tracking-tight text-center mx-auto', `${colorTitle}`
      )}>
        <h1 className={museo700.className}>{title}</h1>
        <span className={museo700.className}>{sub}</span>
      </div>

      <p className={clsx(
        'text-lg max-w-3xl font-normal',
        'mt-6 text-slate-600 text-center mx-auto'
      )}>{desc}</p>
    </>
  )
}
