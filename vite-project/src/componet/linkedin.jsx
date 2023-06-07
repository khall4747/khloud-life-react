import { Box,Image, Center,CardBody,CardHeader,Heading,Text } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import  Image1 from '../componet/qrcode_61851812_7f5c16611ce7aad70810ece743cbe509.png'
export default function Linkedin() {
    let {id} = useParams();
    if(id=='1'){
return (
    <>
     
   <Center position="absolute" bottom='200'  >  <Image src={Image1} height='100px'/></Center>
   

   
    
    </>
  )
}else{
  return (
    <>
     <Center  h='100px' color='black' position="absolute" bottom='200'>
  hard to get and hard to forget '-'
</Center>
   
    
    </>
  )
}
}