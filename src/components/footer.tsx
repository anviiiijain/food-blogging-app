import Logo from '../assets/logo.png'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'
import { Icon } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <div className='w-screen bg-gray-default font-source-sans-pro '>
      <div className='w-4/5 md:w-5/6 mx-auto flex flex-col md:flex-row gap-y-8 justify-between py-6 md:py-20'>
        <div className='w-1/4 sm:w-1/6 mx-auto my-5 md:my-auto md:mx-0'>
          <div className='lg:w-5/6 md:w-full'>
            <Image src={Logo} className='w-full h-full' />
          </div>
        </div>
        <div className='md:w-1/5'>
          <div className='text-body tracking-wide text-[8.76px] md:text-[10px] xl:text-[14.65px] flex flex-col gap-y-3 md:gap-y-6'>
            <h4 className='text-primary font-semibold text-[15.77px] xl:text-[18.84px] leading-[27px] tracking-[0.03em]'>
              Contact Us
            </h4>
            <p>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <p>example2020@gmail.com</p>
            <p>(904) 443-0343</p>
          </div>
        </div>
        <div className=' text-gray-footer tracking-wide text-[8.76px] md:text-[10px] xl:text-[14.65px] flex flex-col justify-between gap-y-3 md:gap-y-6'>
          <h4 className='text-primary font-semibold text-[15.77px] xl:text-[18.84px] leading-[27px] tracking-[0.03em]'>
            More
          </h4>
          <p>About Us</p>
          <p>Products</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
        <div className='md:w-1/5 text-gray-footer tracking-wide text-[8.76px] md:text-[10px] xl:text-[14.65px] flex flex-col-reverse md:flex-col justify-between'>
          <div className='w-fit mx-auto md:mr-0'>
            <h4 className='hidden md:block text-primary font-semibold text-[15.77px] xl:text-[18.84px] leading-[27px] tracking-[0.03em]'>
              Social Links
            </h4>
            <div className='flex gap-x-4 md:gap-x-7 my-2 md:my-4'>
              <Icon
                w={[4, 5, 7]}
                h={[4, 5, 7]}
                color='#0E2368'
                as={AiOutlineInstagram}
              />
              <Icon
                w={[4, 5, 7]}
                h={[4, 5, 7]}
                color='#0E2368'
                as={AiOutlineTwitter}
              />
              <Icon
                w={[3, 4, 6]}
                h={[3, 4, 6]}
                color='#0E2368'
                as={ImFacebook}
              />
            </div>
          </div>
          <p className='text-center md:text-right'>© 2022 Food Truck Example</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
