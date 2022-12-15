import React from "react";
import { clsx } from "../utils";
import localFont from '@next/font/local'
import { Text } from "@nextui-org/react";
import Link from "next/link";

export interface HeroProps {
  title?: string;
  sub?: string;
  description?: string;
  salonDescription?: string;
  colorTitle?: string;
  bold?: boolean;
  titleSize?: string;
  descriptionSize?: string;
  href?: string;
}

const museo700 = localFont({ src: '../fonts/Museo700-Regular.otf' })

export const Hero: React.FC<HeroProps> = ({
  title,
  sub,
  description,
  salonDescription,
  colorTitle,
  titleSize,
  descriptionSize,
  bold,
  href
}) => {
  console.log({ colorTitle })
  return (
    <>
      <div className={clsx(
        'tracking-tight text-center mx-auto', `${colorTitle}`
      )}>
        <h1
          className={clsx(
            museo700.className,
            `font-extrabold`, `${titleSize ? titleSize : 'md:text-5xl lg:text-6xl'}`,
            'tracking-tight text-center'
          )}>
          {title}
        </h1>
        <span className={clsx(museo700.className,
          'font-extrabold text-4xl ', 'sm:text-5xl lg:text-6xl',
          'tracking-tight text-center')}>
          {sub}
        </span>
      </div>
      {
        <p className={clsx(
          `${descriptionSize ? descriptionSize : 'text-lg'} max-w-3xl font-normal p-4`,
          `${bold ? 'font-semibold' : ''}`,
          'mt-6 text-slate-600 text-center mx-auto',
        )}>
          {description}
          {
            salonDescription && (
              <span className={clsx(
                'before:block before:absolute before:-inset-1',
                'relative',
                'inline-block')}>
                <span className="relative text-indigo-500">
                  <Link href={href as string}>Instagram</Link>
                </span>
              </span>
            )
          }
        </p>
      }
    </>
  )
}
