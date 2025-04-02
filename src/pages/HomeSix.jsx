import React from 'react'
import TopBar from '../components/header/TopBar'
import BannerSix from '../components/banner/BannerSix'
import FacilitiesFive from '../components/facilities/FacilitiesFive'
import AboutFive from '../components/about/AboutFive'
import RoomFour from '../components/room/RoomFour'
import ServiceThree from '../components/service/ServiceThree'
import OfferFour from '../components/offer/OfferFour'
import TestimonialSix from '../components/testimonials/TestimonialSix'
import FooterFive from '../components/footer/FooterFive'
import posts from '../components/data/data-room.json'
import HeaderDark from '../components/header/HeaderDark'

function HomeSix() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BannerSix />
        <FacilitiesFive />
        <AboutFive />
        <RoomFour posts={posts}/>
        <ServiceThree />
        <OfferFour />
        <TestimonialSix className="pb-120" />
        <FooterFive />
    </div>
  )
}

export default HomeSix