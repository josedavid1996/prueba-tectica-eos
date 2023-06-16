import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper'

import { v4 } from 'uuid'

import Heading from '../Heading'
import Icon from '../Icon'

const images = [
  'https://images.dog.ceo/breeds/terrier-scottish/n02097298_6980.jpg',
  'https://images.dog.ceo/breeds/bulldog-english/mami.jpg',
  'https://images.dog.ceo/breeds/husky/n02110185_7413.jpg',
  'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_9863.jpg',
  'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_4379.jpg',
  'https://images.dog.ceo/breeds/weimaraner/n02092339_5999.jpg'
]
const Slider = () => {
  return (
    <>
      <div className="mt-[23px] w-full  overflow-hidden ">
        <Heading
          variant="light"
          size="md"
          className="text-center lg:text-left mb-2"
          color="dark-white"
        >
          Event Galleries
        </Heading>

        <div className=" realtive  rounded-[15px] overflow-hidden w-full h-full aspect-video xl:aspect-[1/1] xl:max-h-[555px] ">
          <Swiper
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            modules={[Navigation, Autoplay]}
            loop={true}
            className="w-full "
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            <div className="swiper-button-next">
              <Icon
                name="arrow-right"
                className="text-white w-[14.1px] h-[29.24px]"
              />
            </div>
            <div className="swiper-button-prev">
              <Icon
                name="arrow-left"
                className="text-white w-[14.1px] h-[29.24px]"
              />
            </div>
            {images.map((index) => (
              <SwiperSlide key={v4()}>
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src={index}
                    // src={`https://picsum.photos/300/300?random=${index + 1}`}
                    alt={index}
                    width={300}
                    height={300}
                    layout="responsive"
                    className="w-full h-full object-center"
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Slider
