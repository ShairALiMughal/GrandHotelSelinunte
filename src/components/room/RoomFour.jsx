import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import RoomCardThree from './RoomCardThree';

function RoomFour({ posts = [] }) {
    return (
        <>
            {/* our rooms */}
            <div className="rts__section room is__home__five section__padding">
                <div className="container">
                    <div className="row">
                        <div className="section__wrapper mb-40 wow fadeInUp">
                            <div className="section__content__left">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    Room
                                </span>
                                <h2 className="content__title h2 lh-1 mb-0">Our Rooms</h2>
                            </div>
                            <div className="section__content__right">
                                <p>
                                    Our rooms offer a harmonious blend of comfort and elegance,
                                    designed to provide an exceptional stay for every guest. Each room
                                    features plush bedding, high-quality linens, and a selection of
                                    pillows to ensure a restful night's sleep.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                </div>
                <div className="full__width mt--10">
                <Swiper
                        className="apartment__slider overflow-hidden wow fadeInUp"
                        modules={[Pagination]}
                        direction="horizontal"
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}
                        autoplay="false"
                        pagination={{
                            el: ".rts-pagination",
                            clickable: true,
                        }}
                        speed={1000}
                        effect="slide"
                        breakpoints= {{
                            0: {
                                slidesPerView: 1,
                                centeredSlides: false
                              },
                              768: {
                                slidesPerView: 2.1
                              },
                              1200: {
                                slidesPerView: 3
                              }
                        }}
                    > 
                        {/* Dynamic Room Data - Slice to show a specific range */}
                        {posts.length > 0 ? (
                                posts.slice(0, 4).map((data) => ( // Adjust slice to show posts from 4th to 6th
                                    <SwiperSlide key={data.id}>
                                        <RoomCardThree
                                            roomID={data.id}
                                            roomImage={data.image}
                                            roomTitle={data.title}
                                            roomPrice={data.price}
                                        />
                                    </SwiperSlide>
                                ))
                            ) : (
                                <SwiperSlide>
                                    <p className="text-center">No rooms available</p>
                                </SwiperSlide>
                            )}
                        <div className="rts__pagination">
                            <div className="rts-pagination" />
                        </div>
                        {/* pagination button end */}
                    </Swiper>
                </div>
            </div>
            {/* our rooms end */}
        </>

    )
}

export default RoomFour