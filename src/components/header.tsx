import CustomButton from './elements/custom-button'
import { ReactComponent as Logo } from '../assets/logo.svg'

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <div className='w-screen absolute top-0'>
      <div className='w-11/12 mx-auto flex justify-end lg:justify-between py-4 md:py-8 items-start'>
        <div className='hidden lg:block w-20 xl:w-28 h-16 xl:h-20'>
          <Logo className='w-full h-full ml-10' />
        </div>
        <CustomButton
          borderColor='white'
          color='white'
          variant='outline'
          size={['xs', 'md']}
        >
          <span className='font-source-sans-pro'> Get in Touch</span>
        </CustomButton>
      </div>
    </div>
  )
}

export default Header
