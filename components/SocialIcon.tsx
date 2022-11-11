import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ISocial } from "../utils/socials";

interface Props extends ISocial { }

export const SocialIcon: React.FC<Props> = ({ name, url, icon }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={icon} alt={name} width={24} height={24} />
    </Link>
  );
}
