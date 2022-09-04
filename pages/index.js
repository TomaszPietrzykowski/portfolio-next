import styles from '../styles/Home.module.css'
import Featured1 from '../components/Featured1'
import Featured2 from '../components/Featured2'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import WhatIDo from '../components/WhatIDo'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured1 />
      <Featured2 />
      {/* <WhatIDo /> */}
    </div>
  )
}

export default HomePage
