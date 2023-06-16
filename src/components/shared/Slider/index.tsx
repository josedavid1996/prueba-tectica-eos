import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper'

import Heading from '../Heading'
import { v4 } from 'uuid'
import Image from 'next/image'

const Slider = () => {
  return (
    <>
      <div className="mt-[23px] w-full  ">
        <Heading variant="light" size="md" className="text-center mb-2">
          Event Galleries
        </Heading>

        <div className=" realtive  rounded-[15px] overflow-hidden w-full">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            loop={true}
            className="w-full "
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            {Array(15)
              .fill(0)
              .map((_, index) => {
                return (
                  <SwiperSlide key={v4()}>
                    <div className="w-full h-[550px] relative overflow-hidden">
                      <Image
                        src={`https://picsum.photos/300/300?random=${
                          index + 1
                        }`}
                        alt={`https://picsum.photos/300/300?random=${
                          index + 1
                        }`}
                        layout="fill"
                        className="w-full h-full left-0"
                        objectFit="cover"
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Slider
