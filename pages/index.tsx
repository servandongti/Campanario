import type { NextPage } from 'next'
import { Footer, Hero, Layout, Navigation, Wrapper } from '../components'
import { clsx, descs, salones } from '../utils'

const Home: NextPage = () => {
  const { home } = descs
  const { title, color, logoSrc } = salones.home

  return (
    <>
      <Navigation logoSrc={logoSrc} color={color} />
      <div className={clsx(
        "flex min-h-screen flex-col items-center justify-center ",
        "py-2 bg-['#F5F2F4']"
      )}>
        <Layout title="El Campanario Eventos - Home">
          <Wrapper>
            <Hero title={home.title} sub={home.sub} desc={home.desc} colorTitle={home.colorTitle} />
          </Wrapper>
        </Layout>
        <Footer />
      </div>
    </>
  )
}

export default Home
