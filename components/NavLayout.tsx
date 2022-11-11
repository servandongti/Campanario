import { ReactNode } from "react";
import { Box } from "./Box";

export const NavLayout = ({ children }: { children: ReactNode }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
  </Box>
);
