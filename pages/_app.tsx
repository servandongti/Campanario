import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SSRProvider } from '@react-aria/ssr';
import { createTheme, NextUIProvider } from "@nextui-org/react"

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      elCampanario: '#8B3D67',
      misionDelCampanario: '#8862AD',
      elGranCampanario: '#8F999A',
    },
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SSRProvider>
  )
}

export default MyApp
