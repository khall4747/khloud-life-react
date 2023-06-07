
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './componet/nav'
import Cards from './componet/cards'
import Footer from './componet/Footer'
import Store from './componet/store'
import { Link, Route,Routes } from 'react-router-dom'
function App() {
 

  return (
    <>
    <ChakraProvider>
<Nav/>
<Cards/>

<Footer/>
    </ChakraProvider>
    </>
  )
}
  

export default App
