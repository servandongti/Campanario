import React from "react";
import { Hero, HeroProps, Wrapper } from "../../components";

interface Props extends HeroProps {
  description: string;
}

const Salon = ({ title, description, colorTitle }: Props) => {
  return (
    <Wrapper>
      <Hero title={title} description={description} colorTitle={colorTitle} />
    </Wrapper>
  )
}


Salon.getInitialProps = async ({ query }: { query: any }) => {
  const { title, description, colorTitle } = query
  return { title, description, colorTitle }
}

export default Salon;
