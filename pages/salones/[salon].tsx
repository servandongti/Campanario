import React from "react";
import { Hero, HeroProps, Wrapper, NavigationMision, NavigationCampanario, NavigationGran, HeroMision, HeroGran, HeroCampanario } from "../../components";

interface Props extends HeroProps {
  description: string;
  logoSrc: string;
  color: string;
}

const Salon = ({ title, description, colorTitle, logoSrc, color }: Props) => {
  return (
    <>
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
      </Wrapper>
    </>
  )
}


Salon.getInitialProps = async ({ query }: { query: any }) => {
  const { title, description, colorTitle, logoSrc, color } = query
  return { title, description, colorTitle, logoSrc, color }
}

export default Salon;
