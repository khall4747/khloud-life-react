import { Heading,Box,SimpleGrid,Image } from '@chakra-ui/react'
import Img1 from '../componet/pexels-pok-rie-268261.jpg'
export default function nav() {
   
  return (
    <> 
    <nav ><SimpleGrid column={3} spacing={0} marginBottom='40px'>
    <Box bg='white' height='150px' boxShadow='sm'> <Heading fontFamily='Brush Script MT' pos="absolute" top="5" as='h1' fontSize={{ base: '3xl', md: 'xs' ,lg:'6xl'}}> Khloud Alabdullah</Heading>
    <Box pos="absolute" right="2" top="3"><Image
  borderRadius='full'
  boxSize='100px'
  src={Img1}
  alt='Dan Abramov'
/></Box> 
   
    </Box>
    </SimpleGrid></nav>
    
    
    
    
    </>

 

   
   
    
)}
