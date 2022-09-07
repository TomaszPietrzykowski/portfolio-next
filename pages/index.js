import { Fragment } from 'react'
import Featured1 from '../components/Featured1'
import Featured2 from '../components/Featured2'
import Hero from '../components/Hero'

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Featured1 />
      <Featured2 />
    </Fragment>
  )
}

export default HomePage
