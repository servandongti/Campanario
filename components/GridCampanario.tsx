import React, { useState } from "react"
import Image from "next/image"
import { campanarioImages, clsx } from "../utils"


export const GridCampanario: React.FC = () => {
  const [isLoading, setLoading] = useState(false)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-2 place-items-center rounded-md p-8 space-x-3">
      {
        campanarioImages.map((image, key) => (
          <Image
            key={key}
            src={image}
            alt="Campanario"
            width={400}
            className={clsx(
              'duration-700 ease-in-out group-hover:opacity-75 rounded-md',
              isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)} height={400}
          />
        ))
      }
    </div>
  )
}
