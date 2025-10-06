import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy loaded page components
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Treatment = lazy(() => import("./Components/Treatment/Treatment"));
const News = lazy(() => import("./Components/News/News"));
const Services = lazy(() => import("./Components/Services/services"));
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
      <div className="fixed bottom-28 right-4 z-50 group ">
  <a
    href="https://wa.me/8618757141?text=Hello%2C%20I%20came%20across%20your%20website%20and%20would%20like%20to%20know%20more%20about%20the%20services%20you%20offer.%20Can%20you%20please%20provide%20more%20details%3F"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-block"
  >
    {/* Tooltip */}
    <span className="absolute -top-16 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-green-600 text-white text-xs px-3 py-1 rounded shadow-lg">
      Chat with us!
    </span>

  
   

    {/* Icon */}
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
      alt="Chat on WhatsApp"
      width="60"
      className="relative z-10 transition-transform transform hover:scale-110"
    />
  </a>
</div>


      <Footer />
    </Router>
  );
}

export default App;
