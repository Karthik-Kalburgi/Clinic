

import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter  as Router,Routes,Route}  from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Treatment from './Components/Treatment'
import News from './Components/News'

import Gallery from './Components/Gallery'
import Blog from './Components/Blog'
// import Contact from './Components/Contact'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import Reviews from './Components/Reviews'
import Testimonials from './Components/Testimonials'




function App() {
 

  return (
<Router>
  <Navbar/>


  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/treatment' element={<Treatment/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/testimonial' element={<Testimonials/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact' element={<Contacts/>}/>

    

  </Routes>
 
    <Footer/>
</Router>
  )
}

export default App
