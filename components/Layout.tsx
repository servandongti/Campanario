import Head from "next/head";
import { ReactNode } from "react";

interface ILayout {
  children: ReactNode
  title: string
}

export const Layout = ({ children, title }: ILayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}

