import { useState } from 'react'
import ArticleCard, { ArticleCardProps } from './article-card'
import cx from 'classnames'
import Img1 from '../assets/article-img-1.png'
import Img2 from '../assets/article-img-2.png'
import Img3 from '../assets/article-img-3.png'
import Img4 from '../assets/article-img-4.png'
import Img5 from '../assets/article-img-5.png'
import Img6 from '../assets/article-img-6.png'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import { Icon } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

interface ArticlesProps {}

const articlesData = [
  {
    image: Img1,
    heading: 'Grilled  Tomatoes at Home',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: Img2,
    heading: 'Snacks for Travel',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: Img3,
    heading: 'Post-workout Recipes',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: Img4,
    heading: 'How To Grill Corn',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: Img5,
    heading: 'Crunchwrap Supreme',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: Img6,
    heading: 'Broccoli Cheese Soup',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
]

const Articles = (props: ArticlesProps) => {
  const [group, setGroup] = useState(1)
  const handleNext = () => {
    if (group < 2) setGroup(2)
  }
  const handlePrev = () => {
    if (group > 1) setGroup(1)
  }
  return (
    <div className='w-5/6 mx-auto mt-36'>
      <h2 className='font-poppins md:font-source-sans-pro text-primary text-center lg:text-left text-[28px] md:text-4xl xl:text-[56px] font-semibold tracking-wide lg:tracking-widest xl:tracking-[0.04em]'>
        Latest Articles
      </h2>
      <AnimatePresence>
        <div className='w-5/6 sm:w-auto mx-auto my-8 lg:mt-[5.5rem]'>
          {/* first group */}
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: '-100vw' }}
            transition={{ type: 'tween' }}
            className={cx(
              { hidden: group !== 1 },
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-5 xl:gap-x-10'
            )}
          >
            {articlesData
              ?.slice(0, articlesData.length / 2)
              .map((item: ArticleCardProps) => (
                <ArticleCard {...item} />
              ))}
          </motion.div>
          {/* second group */}
          <motion.div
            className={cx(
              { hidden: group !== 2 },
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-5 xl:gap-x-10'
            )}
          >
            {articlesData
              ?.slice(articlesData.length / 2)
              .map((item: ArticleCardProps) => (
                <ArticleCard {...item} />
              ))}
          </motion.div>
        </div>
      </AnimatePresence>
      <div className='flex items-center gap-3 justify-center my-12'>
        <span onClick={handlePrev}>
          <Icon
            w={[4, 5, 6]}
            h={[4, 5, 6]}
            color={group === 1 ? 'gray.light' : 'gray.dark'}
            as={MdOutlineNavigateBefore}
            className={cx(
              {
                'border-gray-light cursor-not-allowed': group === 1,
                'border-gray-dark cursor-pointer': group === 2,
              },
              ' border-[1px] rounded'
            )}
          />
        </span>
        <span className='text-xs md:text-sm lg:text-base xl:text-[22px] text-gray-dark'>
          {group}/2
        </span>
        <span onClick={handleNext}>
          <Icon
            w={[4, 5, 6]}
            h={[4, 5, 6]}
            color={group === 2 ? 'gray.light' : 'gray.dark'}
            as={MdOutlineNavigateNext}
            className={cx(
              {
                'border-gray-light cursor-not-allowed': group === 2,
                'border-gray-dark cursor-pointer': group === 1,
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
