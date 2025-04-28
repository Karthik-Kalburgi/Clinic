import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images for each news section
import news1 from '../Images/News1-picaai.png'

import gal3 from '../Images/gallery3.jpg'
import gal4 from '../Images/gallery4.jpg'


const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="news-container">
     <h1 className="text-center text-3xl font-bold mt-8">Daily News Updates</h1>
<div>
<Slider {...settings} className="mt-8">
  {/* News 1 */}
  <div className="news-slide">
    <div className="news-item bg-blue-100 p-4 md:p-6 rounded-lg shadow-lg">
      <a 
        href="https://www.news-medical.net/health/Cardiothoracic-Imaging-Techniques.aspx" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src={news1} 
          alt="Cardiothoracic Imaging" 
          className="w-full h-[250px] object-cover rounded-lg"
        />
      </a>
      <h3 className="text-xl font-semibold mt-4 text-center">
        <a 
          href="https://www.news-medical.net/health/Cardiothoracic-Imaging-Techniques.aspx" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Cardiothoracic Imaging Techniques
        </a>
      </h3>
      <p className="text-lg mt-2 text-center">
        A detailed look at the latest cardiothoracic imaging techniques and their applications.
      </p>
    </div>
  </div>



        {/* News 2 */}
  <div className="news-slide">
    <div className="news-item bg-blue-100 p-4 md:p-6 rounded-lg shadow-lg">
      <a
        href="https://www.medscape.com/viewarticle/colchicine-cv-reduction-splits-cardiologists-after-clear-2025a1000614?form=fpf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={news1}
          alt="Colchicine CV Reduction"
          className="w-full h-[250px] object-cover rounded-lg"
        />
      </a>
      <h3 className="text-xl font-semibold mt-4 text-center">
        <a
          href="https://www.medscape.com/viewarticle/colchicine-cv-reduction-splits-cardiologists-after-clear-2025a1000614?form=fpf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colchicine CV Reduction: Cardiologists Divided
        </a>
      </h3>
      <p className="text-lg mt-2 text-center">
        Cardiologists debate the effectiveness of colchicine for cardiovascular reduction after recent studies.
      </p>
    </div>
  </div>

  {/* News 3 */}
  <div className="news-slide">
    <div className="news-item bg-blue-100 p-4 md:p-6 rounded-lg shadow-lg">
      <a href="https://www.healio.com/cardiology" target="_blank" rel="noopener noreferrer">
        <img
          src={gal3}
          alt="Cardiology News"
          className="w-full h-[250px] object-cover rounded-lg"
        />
      </a>
      <h3 className="text-xl font-semibold mt-4 text-center">
        <a href="https://www.healio.com/cardiology" target="_blank" rel="noopener noreferrer">
          Latest News on Cardiology
        </a>
      </h3>
      <p className="text-lg mt-2 text-center">
        Stay up to date with the latest developments in the field of cardiology.
      </p>
    </div>
  </div>

  {/* News 4 */}
  <div className="news-slide">
    <div className="news-item bg-blue-100 p-4 md:p-6 rounded-lg shadow-lg">
      <a href="https://www.thehindu.com/tag/62861-1120-1073/" target="_blank" rel="noopener noreferrer">
        <img
          src={gal4}
          alt="Cardiovascular Health News"
          className="w-full h-[250px] object-cover rounded-lg"
        />
      </a>
      <h3 className="text-xl font-semibold mt-4 text-center">
        <a href="https://www.thehindu.com/tag/62861-1120-1073/" target="_blank" rel="noopener noreferrer">
          The Hindu: Latest Cardiovascular Health News
        </a>
      </h3>
      <p className="text-lg mt-2 text-center">
        Latest cardiovascular health-related articles from The Hindu.
      </p>
    </div>
  </div>
</Slider>
</div>
    </div>
  );
};

export default News;
