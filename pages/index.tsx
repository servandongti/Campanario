import type { NextPage } from 'next'
import { Footer, Layout, Wrapper } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Layout title="El Campanario Eventos - Home">
        <Wrapper>
          <div className='text-4xl'>Hola</div>
        </Wrapper>
      </Layout>
      <Footer />
    </div>
  )
}

export default Home
