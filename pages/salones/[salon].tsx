import { Grid } from "@nextui-org/react";
import React from "react";
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
  Map
} from "../../components";

interface Props extends HeroProps {
  description: string;
  logoSrc: string;
  color: string;
  location: string;
  phone: string;
  email: string;
}

const Salon = ({ title, description, colorTitle, logoSrc, color, location, phone, email }: Props) => {
  const isCampanario = title === 'El Campanario';
  const isMision = title === 'Misión del Campanario';

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
        {
          isCampanario ? (
            <GridCampanario />
          ) : isMision ? (
            <GridMision />
          ) : (
            <GridGran />
          )
        }
        <Hero title="Contáctanos" titleSize="text-3xl" colorTitle={color} />
        <Map location={location} phone={phone} email={email} />
      </Wrapper>
    </>
  )
}


Salon.getInitialProps = async ({ query }: { query: any }) => {
  const { title, description, colorTitle, logoSrc, color, location, phone, email } = query
  return { title, description, colorTitle, logoSrc, color, location, phone, email }
}

export default Salon;
