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
          <Hero title="Nuestros planes adaptados a tus necesidades" colorTitle={salones.home.colorTitle} titleSize="text-3xl md:text-4xl" />
          <div className={clsx('mb-8')}>
            <Hero description='Todos nuestros planes cuentan con' descriptionSize='text-3xl' bold />
          </div>
          <Slider />
          <Footer />
        </div>
      </Layout>
    </>
  )
}

export default Home
