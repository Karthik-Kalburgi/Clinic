import React from "react"
import {BrowserRouter  as Router,Routes,Route}  from 'react-router-dom'

import Home from '../src/Components/Home/Home'
import About from '../src/Components/About/About'
import Treatment from './Components/Treatment/Treatment'
import News from './Components/News/News'
import Gallery from './Components/Gallery/Gallery'
import Blog from './Components/Blog/Blog'
import Contacts from './Components/Contact/Contacts'
import Footer from './Components/Footer/Footer'


import Reviews from './Components/Reviews/Reviews'
import NavbarDemo from "./Components/Navbar/NavbarDemo"




function App() {
 

  return (
<Router>
    <NavbarDemo />


  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/treatment' element={<Treatment/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/testimonial' element={<Reviews/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact' element={<Contacts/>}/>
   
  
    

  </Routes>
 
    <Footer/>
</Router>
  )
}

export default App
