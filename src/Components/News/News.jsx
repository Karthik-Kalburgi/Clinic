import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import news1 from '../../Images/News/NewsHeart1.jpg';
import news2 from '../../Images/News/NewsHeart2.jpg';
import news3 from '../../Images/News/NewsHeart3.jpg';
import news4 from '../../Images/News/NewsHeart4.jpg';


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
    <div className="news-container px-4 sm:px-6 lg:px-12 py-12 max-w-7xl mx-auto bg-custom-blue ">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
        Daily News Updates
      </h1>

      <Slider {...settings} className="mt-10">
        {/* News 1 */}
        <div className="news-slide">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <a
              href="https://www.pexels.com/photo/part-of-a-person-with-a-stethoscope-5207102/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={news1}
                alt="Cardiothoracic Imaging"
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
              />
            </a>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center">
              <a
                href="https://www.news-medical.net/health/Cardiothoracic-Imaging-Techniques.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cardiothoracic Imaging Techniques
              </a>
            </h3>
            <p className="text-sm sm:text-base mt-2 text-center text-gray-700">
              A detailed look at the latest cardiothoracic imaging techniques and their applications.
            </p>
          </div>
        </div>

        {/* News 2 */}
        <div className="news-slide">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <a
              href="https://www.medscape.com/viewarticle/colchicine-cv-reduction-splits-cardiologists-after-clear-2025a1000614?form=fpf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={news2}
                alt="Colchicine CV Reduction"
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
              />
            </a>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center">
              <a
                href="https://www.medscape.com/viewarticle/colchicine-cv-reduction-splits-cardiologists-after-clear-2025a1000614?form=fpf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colchicine CV Reduction: Cardiologists Divided
              </a>
            </h3>
            <p className="text-sm sm:text-base mt-2 text-center text-gray-700">
              Cardiologists debate the effectiveness of colchicine for cardiovascular reduction after recent studies.
            </p>
          </div>
        </div>

        {/* News 3 */}
        <div className="news-slide">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <a
              href="https://www.healio.com/cardiology"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={news3}
                alt="Cardiology News"
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
              />
            </a>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center">
              <a
                href="https://www.healio.com/cardiology"
                target="_blank"
                rel="noopener noreferrer"
              >
                Latest News on Cardiology
              </a>
            </h3>
            <p className="text-sm sm:text-base mt-2 text-center text-gray-700">
              Stay up to date with the latest developments in the field of cardiology.
            </p>
          </div>
        </div>

        {/* News 4 */}
        <div className="news-slide">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <a
              href="https://www.thehindu.com/tag/62861-1120-1073/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={news4}
                alt="Cardiovascular Health News"
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
              />
            </a>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center">
              <a
                href="https://www.thehindu.com/tag/62861-1120-1073/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Hindu: Latest Cardiovascular Health News
              </a>
            </h3>
            <p className="text-sm sm:text-base mt-2 text-center text-gray-700">
              Latest cardiovascular health-related articles from The Hindu.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default News;
