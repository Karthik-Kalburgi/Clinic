import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

// Lazy loaded page components
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Treatment = lazy(() => import("./Components/Treatment/Treatment"));
const News = lazy(() => import("./Components/News/News"));
const Services = lazy(() => import("./Components/Services/Services"));
const Gallery = lazy(() => import("./Components/Gallery/Gallery"));
const Blog = lazy(() => import("./Components/Blog/Blog"));
const Contacts = lazy(() => import("./Components/Contact/Contacts"));
const Reviews = lazy(() => import("./Components/Reviews/Reviews"));
const Info = lazy(() => import("./Components2/DR_NEW_CARDIAC_CENTER/Info/Info"));
const TreatmentPointDetails = lazy(() => import("./Components/Treatment/TreatmentPointDetails"));

// Shared Layout Components
import NavbarDemo from "./Components/Navbar/NavbarDemo";
import Footer from "./Components/Footer/Footer";

// Simple Spinner Component
const Spinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
  </div>
);

function App() {
  return (
    <Router>
      <NavbarDemo />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/treatment-point/:slug" element={<TreatmentPointDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/testimonial" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<div className="text-center p-20 text-2xl font-bold">404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
 {/* Floating Social Icons */}
<div className="fixed bottom-28 right-4 z-50 flex flex-col items-center gap-4 group">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/1BJk6qYP1f/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-2xl"
  >
    <FaFacebookF />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/dr_santoshchikkodicardiologist"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-pink-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-2xl"
  >
    <FaInstagram />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/dr-santosh-chikkodi-md-dnb-dm-dnb-fscai-doctor-chikkodi%E2%80%99s-cardiac-center-29b920ab"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-2xl"
  >
    <FaLinkedinIn />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/918618757141?text=Hello%2C%20I%20came%20across%20your%20website%20and%20would%20like%20to%20know%20more%20about%20the%20services%20you%20offer."
    target="_blank"
    rel="noopener noreferrer"
    className="relative bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-2xl"
  >
    {/* Tooltip */}
    <span className="absolute right-16 bg-green-600 text-white text-xs px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
      Chat with us!
    </span>

    <FaWhatsapp />
  </a>

</div>


      <Footer />
    </Router>
  );
}

export default App;
