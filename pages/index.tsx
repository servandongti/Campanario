import type { NextPage } from 'next'
import { Footer, Hero, Layout, Navigation, Wrapper, Carousel, Slider, HomeSlider } from '../components'
import { clsx, homeImages, salones } from '../utils'

const Home: NextPage = () => {
  const { color, logoSrc } = salones.home

  return (
    <>
      <Layout title="El Campanario Eventos - Home">
        <Navigation color={color} logoSrc={logoSrc} />
        <div className={clsx(
          "flex min-h-screen flex-col items-center justify-center ",
          "py-2 bg-['#F5F2F4']"
        )}>
          <Wrapper>
            <Hero
              title={salones.home.title}
              sub={salones.home.sub}
              description={salones.home.description}
              colorTitle={salones.home.colorTitle}
            />
            <HomeSlider />
          </Wrapper>
          <Wrapper>
            <Slider />
          </Wrapper>
          <Footer />
        </div>
      </Layout>
    </>
  )
}

export default Home
