
import { Card, CardHeader, CardBody, CardFooter,Heading,Text ,SimpleGrid,Center,Button} from '@chakra-ui/react'
import { Link, Route,Routes } from 'react-router-dom'
import Linkedin from './linkedin'
import Store from './store'

export default function cards() { 
  
  return (
    <Center>
     
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' >
  <Card>
    <CardHeader>
      <Heading size='md' textAlign='center'> LinkedIn Profile</Heading>
    </CardHeader>
    <CardBody>
      <Text textAlign='center'>To contact me on my LinkedIn page, click here, and I am honored by all :)</Text>
    </CardBody>
    <h1></h1>
    <CardFooter>
      <Link to="/view_link/1">View here</Link>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md' textAlign='center'>About me</Heading>
    </CardHeader>
    <CardBody>
      <Text textAlign='center'>View a summary about me just click here ^-^</Text>
    </CardBody>
    <CardFooter>
      <Link to="/view_link/2" >View here</Link>
    </CardFooter>
  </Card>
  <Button onClick={()=>window.open('/store','_blank', 'rel=noopener noreferrer')}>Story</Button>
 
</SimpleGrid>
<Routes>
  <Route path="/view_link/:id" element={<Linkedin/>} ></Route>
  <Route path="/store" element={<Store/>} ></Route>

</Routes>

</Center>

  )
}
