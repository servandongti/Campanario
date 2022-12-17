import React, { lazy, Suspense } from "react";
import {
  Hero,
  HeroProps,
  Wrapper,
  NavigationMision,
  NavigationCampanario,
  NavigationGran,
  HeroMision,
  HeroGran,
  HeroCampanario,
  GridCampanario,
  GridMision,
  GridGran,
} from "../../components";
import { clsx } from "../../utils";

interface Props extends HeroProps {
  description: string;
  logoSrc: string;
  color: string;
  location: string;
  phone: string;
  email: string;
}


const Salon = ({ title, description, colorTitle, logoSrc, color }: Props) => {
  const isCampanario = title === 'El Campanario';
  const isMision = title === 'Misión del Campanario';
  console.log({ colorTitle })
  const Map = (() => lazy(() => import('../../components/Map')))();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {
        title === 'El Campanario' ? (
          <NavigationCampanario logoSrc={logoSrc} color={color} />
        ) : title === 'Misión del Campanario' ? (
          <NavigationMision logoSrc={logoSrc} color={color} />
        ) : (
          <NavigationGran logoSrc={logoSrc} color={color} />
        )
      }
      <Wrapper>
        <Hero title={title} description={description} colorTitle={colorTitle} />
        {title === 'El Campanario' ? (
          <HeroCampanario />
        ) : title === 'Misión del Campanario' ? (
          <HeroMision />
        ) : (
          <HeroGran />
        )}
        {
          isCampanario ? (
            <GridCampanario />
          ) : isMision ? (
            <GridMision />
          ) : (
            <GridGran />
          )
        }
        <div className={clsx('py-8')}>
          <Hero title="Ubícanos" titleSize="text-4xl" colorTitle={colorTitle} />
        </div>
      </Wrapper>
      <Map />
    </Suspense>
  )
}


Salon.getInitialProps = async ({ query }: { query: any }) => {
  const { title, description, colorTitle, logoSrc, color, location, phone, email } = query
  return { title, description, colorTitle, logoSrc, color, location, phone, email }
}

export default Salon;
