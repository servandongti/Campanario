import React from 'react';
import NextLink from 'next/link';
import { Navbar, Dropdown, Text } from "@nextui-org/react";
import { clsx, salones, socials } from "../utils";
import { Logo } from "./Logo";
import { NavLayout } from "./NavLayout";
import { SocialIcon } from "./SocialIcon";

interface Props {
  logoSrc: string;
  color: string;
}

export const Navigation: React.FC<Props> = ({ logoSrc, color }) => {
  return (
    <NavLayout>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <div className="sm:hidden">
            <Navbar.Toggle aria-label="toggle navigation" />
          </div>
          <div className={clsx('mr-8 hidden sm:block')}>
            <Logo src={logoSrc} />
          </div>

        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          hideIn="xs"
          variant="underline"
        >

          <Navbar.Link href='/' color={color as any}>
            Inicio
          </Navbar.Link>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                ripple={false}
              >
                Salones
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="dropdown menu"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              {
                Object.entries(salones).slice(1, 4).map(([key, { title, description, href, colorTitle, color, logoSrc }]) => (
                  <Dropdown.Item key={key} textValue={title} description={description}>
                    <NextLink
                      style={{ width: '200px', height: '100px' }}
                      href={{ pathname: href, query: { title: title, description: description, colorTitle: colorTitle, logoSrc: logoSrc, color: color } }}>
                      <Text color={color}>
                        {title}
                      </Text>
                    </NextLink>
                  </Dropdown.Item>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Content>
          {
            socials.map(({ name, url, icon }) => (
              <Navbar.Item key={name}>
                <SocialIcon key={name} url={url} icon={icon} name={name} />
              </Navbar.Item>
            ))
          }
        </Navbar.Content>
        <Navbar.Collapse>
          {Object.entries(salones).slice(1, 4).map(([key, { title, color, href, description, colorTitle }]) => (
            <Navbar.CollapseItem key={key}>
              <NextLink style={{ textDecoration: 'none' }}
                href={{ pathname: href, query: { title: title, description: description, colorTitle: colorTitle } }}>
                <Text color={color} >
                  {title}
                </Text>
              </NextLink>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </NavLayout>
  );
}

