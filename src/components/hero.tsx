import { Image } from '@chakra-ui/react'
import { ReactComponent as HeroVector } from '../assets/hero-vector.svg'
import HeroImage from '../assets/hero-img.png'
import CustomButton from './elements/custom-button'

interface HeroProps {}

const Hero = (props: HeroProps) => {
  return (
    <div className='md:w-11/12 lg:w-5/6 lg:h-screen mx-auto flex flex-col-reverse md:flex-row'>
      {/* text content in hero */}
      <div className='flex flex-col justify-center items-center md:items-start my-20 md:my-32 lg:mt-16 lg:mb-12'>
        <div className='w-4/5 sm:w-2/5 md:w-full lg:w-2/3 text-center md:text-left 2xl:w-1/2 flex flex-col gap-y-4 md:gap-y-8 items-center md:items-start'>
          <h1 className='text-primary leading-tight text-[36px] md:text-4xl xl:text-6xl md:leading-tight font-bold'>
            Discover the <span className='text-accent'>Best</span> Food and
            Drinks
          </h1>
          <p className='text-[11px] md:text-base  text-body font-normal tracking-wide mb-5'>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <CustomButton
            borderRadius='1.5rem'
            colorScheme='accent'
            size={['sm', 'lg']}
          >
            Explore Now!
          </CustomButton>
        </div>
      </div>
      {/* visual content in hero */}
      <div className='w-full lg:w-1/2 h-full'>
        <div className='md:w-1/2 xl:w-auto relative md:absolute top-0 right-0 -z-10'>
          <HeroVector className='w-full h-full' />
        </div>
        <div className='md:w-1/2 xl:w-auto absolute top-0 md:-top-1 lg:top-1 right-3 md:right-0 -z-20'>
          <Image src={HeroImage} borderRadius='lg' className='w-full h-full' />
        </div>
      </div>
    </div>
  )
}

export default Hero
