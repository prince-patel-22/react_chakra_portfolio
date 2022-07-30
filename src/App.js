
import './App.css';
import { useEffect } from 'react';
import { Box, ChakraProvider, extendTheme, SimpleGrid, Text } from '@chakra-ui/react';
import Header from './components/Header';
import SkillCard from './components/SkillCard';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Banner2 from './components/Banner2';
import CTA from './components/CTA';

function App() {

  const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'gray.100',
          color: 'white',
        },
        // styles for the `a`
        a: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
    },
    colors: {
      primary: {
        100: "#dbd6e7",
        200: "#cac2dc",
        300: "#b8aed0",
        400: "#a79ac5",
        500: "#9585b9",
        600: "#8371ad",
        700: "#725da2",
        800: "#604996",
        900: "#4f358b"
      }
    },
  })

  useEffect(() => {
    Aos.init({
      duration: 300,
      once: true,
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header></Header>
      <Banner2 />
     

      <Box px={{ base: '20px', md: '40px', 'lg': '100px' }}>
        <Text fontSize={'32px'} color={'primary.800'} fontWeight='bold' padding='20px'>My Skills</Text>

        <SimpleGrid columns={[2, 2, 3, 4]} spacing='24px' padding='12px'>
          <SkillCard icon='python' title={'Python'} description='lorem ipsum d as asd asd asd ' />
          <SkillCard icon='dart' title={'Dart'} description='lorem ipsum d as asd asd asd ' />
          <SkillCard icon='nodejs' title={'Node js'} description='lorem ipsum d as asd asd asd ' />
          <SkillCard icon='python' title={'Python'} description='lorem ipsum d as asd asd asd d as das da sd asd as da d as ada sda da sa sd  ' />

        </SimpleGrid>
      </Box>
      <CTA />
    </ChakraProvider>
  );
}

export default App;
