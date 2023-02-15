import { Card, CardBody, Image, Stack, Text } from '@chakra-ui/react'
import CustomButton from './elements/custom-button'

export interface ArticleCardProps {
  image: string
  heading: string
  desc: string
}

const ArticleCard = (props: ArticleCardProps) => {
  const { image, heading, desc } = props
  return (
    <Card
      maxW='sm'
      variant='outline'
      mx='auto'
      borderRadius='3xl'
      p={[0, 0, 8]}
      pb={5}
    >
      <CardBody
        alignItems='center'
        borderRadius='3xl'
        p={0}
        className='broder-4 border-gray-light'
      >
        <Image src={image} borderRadius='3xl' p={[8, 8, 0]} pb={[0, 0, 0]} />
        <Stack alignItems={['center', 'flex-start']} mt='8' spacing='4'>
          <h3 className='text-center md:text-left text-primary mx-auto lg:mx-0 xl:text-xl font-extrabold tracking-wider'>
            {heading}
          </h3>
          <Text
            p={[6, 6, 0]}
            py={[0, 0, 0]}
            className='text-[11px] xl:text-base text-body tracking-wider leading-loose'
          >
            {desc}
          </Text>

          <Stack
            p={[6, 6, 0]}
            pt={[4, 0, 0]}
            width='100%'
            alignItems={['center', 'center', 'flex-start']}
          >
            <CustomButton
              size={['xs', 'sm', 'md']}
              borderRadius='1.5rem'
              variant='outline'
              colorScheme='gray.dark'
            >
              Read More
            </CustomButton>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default ArticleCard
