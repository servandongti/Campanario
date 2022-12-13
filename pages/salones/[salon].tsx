import React from "react";
import { Hero, HeroProps, Wrapper, Navigation } from "../../components";

interface Props extends HeroProps {
  description: string;
  logoSrc: string;
  color: string;
}

const Salon = ({ title, description, colorTitle, logoSrc, color }: Props) => {
  return (
    <>
      <Navigation logoSrc={logoSrc} color={color} />
      <Hero title={title} description={description} colorTitle={colorTitle} />
    </>
  )
}


Salon.getInitialProps = async ({ query }: { query: any }) => {
  const { title, description, colorTitle, logoSrc, color } = query
  return { title, description, colorTitle, logoSrc, color }
}

export default Salon;
