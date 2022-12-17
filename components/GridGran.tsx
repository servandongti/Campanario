import React, { useState } from "react"
import Image from "next/image"
import { clsx, granImages } from "../utils"
import { AnimatePresence } from "framer-motion"

export const GridGran: React.FC = () => {
  const [isLoading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }



  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-2 place-items-center rounded-md p-8 space-x-3">
      {
        granImages.map((image, key) => (
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
            onClick={() => handleImageClick(key)}
          />
        ))
      }
      <AnimatePresence>
        {
          modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
              onClick={handleModalClose}
            >
              <div className="shadow-white relative w-11/12 h-11/12 max-w-4xl max-h-4xl flex items-center justify-center">
                <Image
                  src={granImages[selectedImage]}
                  alt="Campanario"
                  width={600}
                  height={600}
                  className={clsx(
                    'duration-700 ease-in-out group-hover:opacity-75 rounded-md',
                    isLoading
                      ? 'scale-110 blur-2xl grayscale'
                      : 'scale-100 blur-0 grayscale-0'
                  )}
                  onLoadingComplete={() => setLoading(false)}
                />
              </div>
            </div>
          )
        }
      </AnimatePresence>
    </div>
  )
}
