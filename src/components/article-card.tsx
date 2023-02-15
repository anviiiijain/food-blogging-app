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
      borderColor={['gray.dark', 'gray.light']}
    >
      <CardBody alignItems='center' borderRadius='3xl' p={0}>
        <Image src={image} borderRadius='3xl' p={[8, 8, 0]} pb={[0, 0, 0]} />
        <Stack
          alignItems={['center', 'flex-start']}
          mt='8'
          spacing={['2', '4']}
        >
          <h3 className='font-poppins text-center md:text-left text-primary mx-auto lg:mx-0 tracking-[0.05em] xl:text-[21px] xl:leading-[27px] font-bold'>
            {heading}
          </h3>
          <Text
            p={[6, 6, 0]}
            py={[0, 0, 0]}
            className='font-open-sans text-xs md:text-[15px] text-body leading-[22px] md:leading-[27px]'
          >
            {desc}
          </Text>

          <Stack
            p={[6, 6, 3.5]}
            px={[6, 0, 0]}
            width='100%'
            alignItems={['center', 'center', 'flex-start']}
          >
            <CustomButton
              size={['xs', 'sm', 'md']}
              variant='outline'
              colorScheme='gray.dark'
            >
              <span className='px-5'>Read More</span>
            </CustomButton>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default ArticleCard
