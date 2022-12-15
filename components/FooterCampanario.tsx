import React from "react";
import { Text } from "@nextui-org/react";
import { clsx } from "../utils";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap sm:flex-nowrap h-24 w-full items-center justify-center md:justify-between border-t">
      <Text size="$md" css={{ textAlign: 'center', margin: '$3' }}> Elaborado por DIERVSAWARE</Text>
      <Text css={{ textAlign: 'center' }}>© 2022 El Campanario Eventos. Derechos Reservados.</Text>
      <div className={clsx('flex  items-center justify-center', 'space-x-3', 'm-3')}>
        <Image src='/icons/twitter.svg' alt='Twitter' width={24} height={24} />
        <Image src='/icons/spotify.svg' alt='Facebook' width={24} height={24} />
        <Image src='/icons/pinterest.svg' alt='Facebook' width={24} height={24} />
      </div>
    </footer>
  )
}
