import { Image } from '@chakra-ui/react'
import AboutImage from '../assets/about-img.png'
import CustomButton from './elements/custom-button'
import { motion } from 'framer-motion'

interface AboutProps {}

const About = (props: AboutProps) => {
  return (
    <div className='w-screen my-4 md:my-32 lg:my-40 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end'>
      <div className='w-11/12  mx-auto flex'>
        <div className='hidden md:block flex-1'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
            className='w-72 lg:w-96 mx-auto'
          >
            <Image
              src={AboutImage}
              alt='Best food and drinks about us'
              className='w-full mx-auto '
            />
          </motion.div>
        </div>
        <div className='md:flex-1 flex flex-col justify-center items-center lg:items-start py-36 sm:py-20 md:py-0'>
          <div className='w-4/5 sm:w-3/5 md:w-3/4 mx-auto md:px-2 flex flex-col gap-y-4 xl:gap-y-6 text-center md:text-left lg:items-start justify-center'>
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              viewport={{ once: true }}
              className='font-poppins text-primary text-[26px] md:text-3xl xl:text-[45px] xl:leading-[27px] font-semibold'
            >
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              viewport={{ once: true }}
              className='text-[11px] lg:text-[15px] font-open-sans lg:leading-[27px] text-body font-normal leading-loose md:tracking-wide'
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              viewport={{ once: true }}
              className='mt-4'
            >
              <CustomButton colorScheme='accent' size={['xs', 'sm', 'md']}>
                <span className='px-2.5'>Read More</span>
              </CustomButton>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
