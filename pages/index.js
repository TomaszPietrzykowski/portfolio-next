import Featured1 from '../components/Featured1'
import Featured2 from '../components/Featured2'
import Hero from '../components/Hero'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured1 />
      <Featured2 />
      <Footer />
    </div>
  )
}

export default HomePage
