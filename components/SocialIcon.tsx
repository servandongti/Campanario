import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ISocial } from "../utils/socials";

interface Props extends ISocial { icon: string }

export const SocialIcon: React.FC<Props> = ({ url, icon }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8"
    >
      <Image src={icon} alt="icon" width={24} height={24} />
    </Link>
  );
}
