import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper'

import Heading from '../Heading'
import { useId } from 'react'
import Image from 'next/image'

const Slider = () => {
  const uid = useId()
  return (
    <>
      <div className="mt-[23px] w-full h-full ">
        <Heading variant="light" size="md" className="text-center mb-2">
          Event Galleries
        </Heading>

        <div className="h-[200px]  rounded-[15px] overflow-hidden w-full">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            loop={true}
            className="h-full w-full"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            {Array(15)
              .fill(0)
              .map((_, index) => {
                return (
                  <SwiperSlide key={uid}>
                    <div className="w-full h-full relative">
                      <Image
                        src={`https://picsum.photos/200/300?random=${
                          index + 1
                        }`}
                        alt={uid}
                        width={200}
                        height={300}
                        layout="responsive"
                        className="w-full h-full"
                        // objectFit="contain"
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
