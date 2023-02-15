import About from './components/about'
import Articles from './components/articles'
// import Carousel from './components/elements/custom-carousel'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <About />
      <Articles />
      {/* <Carousel /> */}
      <Footer />
    </ChakraProvider>
  )
}

export default App
