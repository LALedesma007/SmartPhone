import React from 'react'
import CarouselHome from '../Components/Carousel/CarouselHome'
import Offers from '../Components/Offers/Offers'
import CarruselSponsor from '../Components/Sponsor/CarruselSponsor'

const Home = () => {
  return (
    <div>
      <CarouselHome/>
      <Offers/>
      <CarruselSponsor/>
    </div>
  )
}

export default Home