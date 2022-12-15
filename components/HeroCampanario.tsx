import { clsx, socials } from "../utils"
import { Hero } from "./Hero"

export const HeroCampanario: React.FC = () => {
  return (
    <div className={clsx('py-8')}>
      <Hero title="Galeria del lugar" titleSize="text-3xl" salonDescription=" " href={socials[0].instagramCampanario} description="Descubre toda nuestra galería del lugar en nuestro " />
    </div>
  )
}
