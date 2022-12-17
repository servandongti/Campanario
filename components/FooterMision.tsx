import React from "react";
import { Text } from "@nextui-org/react";
import { clsx } from "../utils";
import Image from "next/image";
import Link from "next/link";

export const FooterMision = () => {
  return (
    <footer className="flex flex-wrap sm:flex-nowrap h-24 w-full items-center justify-center md:justify-between border-t">
      <Text size="$md" css={{ textAlign: 'center', margin: '$3' }}> Elaborado por DIERVSAWARE</Text>
      <Text css={{ textAlign: 'center' }}>© 2022 El Campanario Eventos. Derechos Reservados.</Text>
      <div className={clsx('flex  items-center justify-center', 'space-x-3', 'm-3')}>
        <Link href='https://mobile.twitter.com/somoscampanario' passHref>
          <Image src='/icons/footer/misionDelCampanario/twitter.svg' alt='Twitter' width={24} height={24} />
        </Link>
        <Link href='https://open.spotify.com/user/l67y36lycouuuk64xd7e8djxv?si=b8fDQHPfR3qCxOXp76RRmg&utm_source=whatsapp' passHref>
          <Image src='/icons/footer/misionDelCampanario/spotify.svg' alt='Spotify' width={24} height={24} />
        </Link>
        <Image src='/icons/footer/misionDelCampanario/pinterest.svg' alt='Pinterest' width={24} height={24} />
      </div>
    </footer>
  )
}
