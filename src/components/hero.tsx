import { Image } from '@chakra-ui/react'
import { ReactComponent as HeroVector } from '../assets/hero-vector.svg'
import HeroImage from '../assets/hero-img.png'
import CustomButton from './elements/custom-button'

interface HeroProps {}

const Hero = (props: HeroProps) => {
  return (
    <div className='md:w-11/12 lg:w-5/6 lg:h-screen mx-auto flex flex-col-reverse md:flex-row'>
      {/* text content in hero */}
      <div className='flex flex-col justify-center items-center md:items-start my-16 md:my-28 lg:mt-16 lg:mb-12'>
        <div className='w-2/3 sm:w-1/2 md:w-5/6 lg:w-3/5 2xl:w-1/2 text-center md:text-left flex flex-col gap-y-4 xl:gap-y-8 xl:pr-20 items-center md:items-start'>
          <h1 className='text-primary font-source-sans-pro text-[38px] md:text-4xl lg:text-5xl xl:text-[62px] leading-[48px] md:leading-tight xl:leading-[69px] font-bold'>
            Discover the <span className='text-accent'>Best</span> Food and
            Drinks
          </h1>
          <p className='font-open-sans text-[11px] md:text-sm xl:text-[16.44px] xl:leading-[27.41px]  text-body font-normal tracking-wide mb-3'>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <CustomButton colorScheme='accent' size={['sm', 'sm', 'md', 'lg']}>
            <span className='font-open-sans'>Explore Now!</span>
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
