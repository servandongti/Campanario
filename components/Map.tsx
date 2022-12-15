import { useRouter } from "next/router";
import React from "react";
import { clsx } from "../utils";
import { Container } from "./Container";
import { EnvelopeIcon, MapIcon, TelephoneIcon } from "./icons";
import { IframeCampanario } from "./IframeCampanario";
import { IframeGran } from "./IframeGran";
import { IframeMision } from "./IframeMision";

interface Props {
  location: string;
  phone: string;
  email: string;
}

export const Map: React.FC<Props> = ({ location, phone, email }) => {
  const router = useRouter();
  const { query } = router;
  const isCampanario = query.title === 'El Campanario';
  const isMision = query.title === 'Misión del Campanario';

  console.log(query.title);

  return (
    <Container>
      <div className={clsx(
        'p-6 max-w-4xl bg-clip-padding',
        'backdrop-filter backdrop-blur-xl',
        'bg-opacity-60 border border-gray-200 rounded-lg')}>
        <div className={clsx('grid grid-cols-1 sm:grid-cols-2')}>
          <div className={clsx('w-full')}>
            <div className="flex flex-col gap-2">
              <h3 className={clsx('text-2xl font-bold text-slate-900')}>Ubicación</h3>
              <div className={clsx('flex mt-2')}>
                <MapIcon />
                <p className={clsx('text-sm text-slate-900 break-all w-1/2 ml-2')}>{location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className={clsx('text-2xl font-bold text-slate-900 mt-3')}>Teléfono</h3>
              <div className={clsx('flex mt-2')}>
                <TelephoneIcon />
                <p className={clsx('text-sm text-slate-900 break-all w-1/2 ml-2')}>{phone}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className={clsx('text-2xl font-bold text-slate-900 mt-3')}>Correo</h3>
              <div className={clsx('flex mt-2')}>
                <EnvelopeIcon />
                <p className={clsx('text-sm text-slate-900 w-1/2 ml-2')}>{email}</p>
              </div>
            </div>
          </div>
          <div className={clsx('w-full')}>
            <div className={clsx('w-1/2')}>
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
          </div>
        </div>
      </div>
    </Container>
  )
}

