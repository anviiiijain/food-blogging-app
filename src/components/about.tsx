import { Image } from '@chakra-ui/react'
import AboutImage from '../assets/about-img.png'
import CustomButton from './elements/custom-button'

interface AboutProps {}

const About = (props: AboutProps) => {
  return (
    <div className='w-screen my-4 md:my-20 lg:my-44 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end'>
      <div className='w-11/12 lg:w-full mx-auto flex'>
        <div className='hidden md:block flex-1'>
          <div className='w-72 xl:w-96 mx-auto'>
            <Image
              src={AboutImage}
              alt='Best food and drinks about us'
              className='w-full mx-auto '
            />
          </div>
        </div>
        <div className='lg:flex-1 flex flex-col justify-center items-center lg:items-start py-36 sm:py-20 md:py-0'>
          <div className='w-3/4 flex flex-col gap-y-4 xl:gap-y-8 text-center md:text-left lg:items-start justify-center'>
            <h2 className='text-primary text-2xl md:text-3xl xl:text-5xl font-bold sm:font-semibold'>
              About Us
            </h2>
            <p className='mb-2 md:mb-0 text-[11px] lg:text-base text-body font-normal leading-loose md:tracking-wide'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </p>
            <div>
              <CustomButton
                borderRadius='1.5rem'
                colorScheme='accent'
                size={['xs', 'md']}
              >
                Read More
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
