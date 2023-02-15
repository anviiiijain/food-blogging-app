import React, { useState } from 'react'
import ArticleCard, { ArticleCardProps } from './article-card'
import cx from 'classnames'
import Img1 from '../assets/article-img-1.png'
import Img2 from '../assets/article-img-2.png'
import Img3 from '../assets/article-img-3.png'
import Img4 from '../assets/article-img-4.png'
import Img5 from '../assets/article-img-5.png'
import Img6 from '../assets/article-img-6.png'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'

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
      <h2 className='text-primary text-center lg:text-left text-3xl md:text-4xl xl:text-5xl font-semibold tracking-wide lg:tracking-widest'>
        Latest Articles
      </h2>
      <div className='w-5/6 sm:w-auto mx-auto my-8 lg:my-20'>
        {/* first group */}
        <div
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
        </div>
        {/* second group */}
        <div
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
        </div>
      </div>
      <div className='flex items-center gap-2 justify-center my-16'>
        <span
          onClick={handlePrev}
          className='border-gray-light border-2 rounded text-gray-light'
        >
          <MdOutlineNavigateBefore />
        </span>
        <span className='text-xs md:text-sm'>{group}/2</span>
        <span
          onClick={handleNext}
          className='border-gray-dark border-2 rounded text-gray-dark'
        >
          <MdOutlineNavigateNext />
        </span>
      </div>
    </div>
  )
}

export default Articles
