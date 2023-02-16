import { useState } from 'react'
import ArticleCard, { ArticleCardProps } from './article-card'
import cx from 'classnames'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import { Icon } from '@chakra-ui/react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { articlesData } from '../utils/articlesData'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const slideUpVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
}

const Articles = () => {
  const controls = useAnimation()
  const [[page, direction], setPage] = useState([1, -1])
  const handleNext = () => {
    paginate(1)
  }
  const handlePrev = () => {
    paginate(-1)
  }

  const paginate = (newDirection: number) => {
    setPage([newDirection > 0 ? 1 + newDirection : 1, newDirection])
    controls.set(variants.enter)
    controls.start(variants.center)
  }

  return (
    <div className='w-5/6 mx-auto mt-36'>
      <motion.h2
        variants={slideUpVariant}
        initial='hidden'
        whileInView='visible'
        transition={{ delay: 0.1, duration: 0.3 }}
        viewport={{ once: true }}
        className='font-poppins md:font-source-sans-pro text-primary text-center lg:text-left text-[28px] md:text-4xl xl:text-[56px] font-semibold tracking-wide lg:tracking-widest xl:tracking-[0.04em]'
      >
        Latest Articles
      </motion.h2>
      <AnimatePresence>
        <div className='w-5/6 sm:w-auto mx-auto my-8 lg:mt-[5.5rem]'>
          {/* first page */}
          <motion.div
            custom={direction}
            variants={variants}
            animate={controls}
            exit='exit'
            className={cx(
              { hidden: page !== 1 },
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-5 xl:gap-x-10'
            )}
          >
            {articlesData
              ?.slice(0, articlesData?.length / 2)
              .map((item: ArticleCardProps, idx) => (
                <motion.div
                  variants={slideUpVariant}
                  custom={direction}
                  initial='hidden'
                  whileInView='visible'
                  animate={controls}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx / 10, duration: 0.3 }}
                >
                  <ArticleCard {...item} />
                </motion.div>
              ))}
          </motion.div>
          {/* second page */}
          <motion.div
            custom={direction}
            variants={variants}
            animate={controls}
            className={cx(
              { hidden: page !== 2 },
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-5 xl:gap-x-10'
            )}
          >
            {articlesData
              ?.slice(articlesData?.length / 2)
              .map((item: ArticleCardProps, idx) => (
                <motion.div>
                  <ArticleCard {...item} />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </AnimatePresence>
      <div className='flex items-center gap-3 justify-center my-16'>
        <span onClick={handlePrev}>
          <Icon
            w={[4, 5, 6]}
            h={[4, 5, 6]}
            color={page === 1 ? 'gray.light' : 'gray.dark'}
            as={MdOutlineNavigateBefore}
            className={cx(
              {
                'border-gray-light cursor-not-allowed': page === 1,
                'border-gray-dark cursor-pointer': page === 2,
              },
              ' border-[1px] rounded'
            )}
          />
        </span>
        <span className='text-xs md:text-sm lg:text-base xl:text-[22px] text-gray-dark'>
          {page}/2
        </span>
        <span onClick={handleNext}>
          <Icon
            w={[4, 5, 6]}
            h={[4, 5, 6]}
            color={page === 2 ? 'gray.light' : 'gray.dark'}
            as={MdOutlineNavigateNext}
            className={cx(
              {
                'border-gray-light cursor-not-allowed': page === 2,
                'border-gray-dark cursor-pointer': page === 1,
              },
              ' border-[1px] rounded'
            )}
          />
        </span>
      </div>
    </div>
  )
}

export default Articles
