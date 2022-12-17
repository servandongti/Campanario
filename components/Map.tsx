import { useRouter } from "next/router";
import React from "react";
import { clsx } from "../utils";
import { Container } from "./Container";
import { IframeCampanario } from "./IframeCampanario";
import { IframeGran } from "./IframeGran";
import { IframeMision } from "./IframeMision";


export const Map: React.FC = () => {
  const router = useRouter();
  const { query } = router;
  const isMision = query.title === 'Misión del Campanario';

  console.log(query.title);

  return (
    <Container>
      <div className={clsx(
        'p-6 bg-clip-padding w-full h-60 max-w-3xl md:max-w-4xl md:h-96',
        'backdrop-filter backdrop-blur-xl',
        'bg-opacity-60 border border-gray-200 rounded-lg',
        'relative',
      )}>
        {
          query.title === 'El Campanario' ? (
            <IframeCampanario />
          ) : isMision ? (
            <IframeMision />
          ) : (
            <IframeGran />
          )
        }
      </div>
    </Container>
  )
}

export default Map;
