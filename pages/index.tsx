import type { NextPage } from 'next'
import { Footer, Hero, Layout, Navigation, Wrapper, Carousel, Slider } from '../components'
import { clsx, salones } from '../utils'

const Home: NextPage = () => {
  const { color, logoSrc } = salones.home

  return (
    <>
      <Navigation logoSrc={logoSrc} color={color} />
      <div className={clsx(
        "flex min-h-screen flex-col items-center justify-center ",
        "py-2 bg-['#F5F2F4']"
      )}>
        <Layout title="El Campanario Eventos - Home">
          <Wrapper>
            <Hero
              title={salones.home.title}
              sub={salones.home.sub}
              desc={salones.home.description}
              colorTitle={salones.home.colorTitle}
            />
          </Wrapper>
          <Slider />
        </Layout>
      </div>
      <Footer />
    </>
  )
}

export default Home
