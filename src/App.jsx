import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy loaded page components
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Treatment = lazy(() => import("./Components/Treatment/Treatment"));
const News = lazy(() => import("./Components/News/News"));
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
          <Route path="/testimonial" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<div className="text-center p-20 text-2xl font-bold">404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
