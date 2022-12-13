import React, { useState } from "react";
import Image from "next/legacy/image";
import NextLink from "next/link";
import ReactCardCarousel from "react-card-carousel";
import Fade from 'react-reveal/Fade'
import styles from "../styles/Slider.module.css"
import { clsx } from "../utils";

const AUTOPLAY_INTERVAL = 5000;

export const HomeSlider = () => {
  const [isLoading, setLoading] = useState(true)
  return (
    <div className={clsx("relative h-['90vh'] w-full flex flex-1  items-center justify-center")}>
      <Fade bottom>
        <div className={styles.awards}>
          <ReactCardCarousel autoplay={true} autoplay_speed={AUTOPLAY_INTERVAL}>
            <div className={`group ${styles.award} aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8`}>
              <NextLink href='/' className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                <h1 className="tracking-wider text-white" >El Campanario</h1>
              </NextLink>
              <Image
                width={400}
                height={400}
                src='/home/el-campanario.jpg'
                alt="El Campanario"
              />
            </div>
            <div className={`group ${styles.award} aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8`}>
              <NextLink href='/' className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                <h1 className="tracking-wider text-white" >El Gran Campanario</h1>
              </NextLink>
              <Image
                width={400}
                height={400}
                src='/home/el-gran-campanario.jpg'
                alt="El Campanario"
              />
            </div>
            <div className={`group ${styles.award} aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8`}>
              <NextLink href='/' className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                <h1 className="tracking-wider text-white" >Mision Del Campanario</h1>
              </NextLink>
              <Image
                width={400}
                height={400}
                src='/home/mision-del-campanario.jpg'
                className={clsx(
                  'duration-700 ease-in-out group-hover:opacity-50',
                  isLoading
                    ? 'scale-110 blur-2xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
                )}
                onLoadingComplete={() => setLoading(false)} alt="El Campanario"
              />
            </div>
          </ReactCardCarousel>
        </div>
      </Fade>
    </div>
  );
}
