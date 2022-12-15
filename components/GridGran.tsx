import { Grid } from "@nextui-org/react"
import Image from "next/image"
import { granImages } from "../utils"

export const GridGran: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-2 place-items-center rounded-md p-8 space-x-3">
      {
        granImages.map((image) => (
          <Image width={400} height={400} src={image} alt="campanario" style={{ borderRadius: '4px' }} />
        ))
      }
    </div>
  )
}
