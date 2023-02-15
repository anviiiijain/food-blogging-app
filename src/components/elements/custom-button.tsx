import { Button } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  [x: string]: any
}

const CustomButton = (props: ButtonProps) => {
  const { children, ...buttonProps } = props
  return <Button {...buttonProps}>{children}</Button>
}

export default CustomButton
