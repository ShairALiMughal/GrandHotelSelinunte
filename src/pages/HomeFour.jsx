import React from 'react'
import BannerFour from '../components/banner/BannerFour'
import ApartmentOne from '../components/apartment/ApartmentOne'
import FacilitiesThree from '../components/facilities/FacilitiesThree'
import TestimonialFour from '../components/testimonials/TestimonialFour'
import VideoFour from '../components/videos/VideoFour'
import BlogOne from '../components/blog/BlogOne'
import ServiceOne from '../components/service/ServiceOne'
import GalleryThree from '../components/gallery/GalleryThree'
import FooterThree from '../components/footer/FooterThree'
import HeaderDark from '../components/header/HeaderDark'

function HomeFour() {
  return (
    <div>
        <HeaderDark />
        <BannerFour />
        <ApartmentOne />
        <FacilitiesThree />
        <TestimonialFour />
        <VideoFour />
        <BlogOne />
        <ServiceOne />
        <GalleryThree />
        <FooterThree />
    </div>
  )
}

export default HomeFour