import { clsx, socials } from "../utils"
import { Hero } from "./Hero"

export const HeroMision: React.FC = () => {
  return (
    <div className={clsx('py-8')}>
      <Hero title="Galeria del lugar" titleSize="text-2xl" salonDescription=" " href={socials[0].instagramMisionDelCampanario} description="Descubre toda nuestra galería del lugar en nuestro " />
    </div>
  )
}
