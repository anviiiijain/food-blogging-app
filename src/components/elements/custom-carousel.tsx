import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { motion, useCycle } from 'framer-motion'

interface CustomCarouselProps {
  items: Array<any>
  groupSize: any[] | Partial<Record<string, any>>
}

const CustomCarousel = (props: CustomCarouselProps) => {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const { items, groupSize } = props
  const slidesToShow = useBreakpointValue(groupSize)
  const handleNext = () => {
    setIndex(index + slidesToShow >= items.length ? 0 : index + slidesToShow)
  }

  const handlePrevious = () => {
    setIndex(
      index - slidesToShow < 0
        ? items.length - slidesToShow
        : index - slidesToShow
    )
  }

  return (
    <Box
      width='100%'
      height='400px'
      className='relative overflow-hidden'
      bg={useColorModeValue('gray.800', 'white')}
    >
      <Flex
        className='absolute inset-0 h-full w-full'
        direction='row'
        align='center'
        justify='center'
      >
        <motion.div
          className='relative h-full'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <Flex
            direction='row'
            align='center'
            justify='center'
            className='h-full'
          >
            {items.slice(index, index + slidesToShow).map((item, i) => (
              <Box
                key={i}
                width={`${100 / slidesToShow}%`}
                className='h-full px-4'
                onClick={() => setIndex(i)}
              >
                {item}
              </Box>
            ))}
          </Flex>
        </motion.div>
      </Flex>
      <Flex
        className='absolute bottom-0 left-0 right-0 mb-4'
        direction='row'
        align='center'
        justify='center'
      >
        <Box onClick={handlePrevious} className='cursor-pointer'>
          Prev
        </Box>
        <Box onClick={handleNext} className='cursor-pointer'>
          Mext
        </Box>
      </Flex>
    </Box>
  )
}

export default CustomCarousel
