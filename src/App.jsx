

import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter  as Router,Routes,Route}  from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Treatment from './Components/Treatment'
import News from './Components/News'
import Testimonial from './Components/Testimonial'
import Gallery from './Components/Gallery'
import Blog from './Components/Blog'
// import Contact from './Components/Contact'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'




function App() {
 

  return (
<Router>
  <Navbar/>


  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/treatment' element={<Treatment/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/testimonial' element={<Testimonial/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact' element={<Contacts/>}/>

    

  </Routes>
 
    <Footer/>
</Router>
  )
}

export default App
