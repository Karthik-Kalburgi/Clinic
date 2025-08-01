import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { PacmanLoader } from 'react-spinners';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import news1 from '../../Images/News/NewsHeart1.jpg';
import news2 from '../../Images/News/NewsHeart2.jpg';
import news3 from '../../Images/News/NewsHeart3.jpg';
import news4 from '../../Images/News/NewsHeart4.jpg';

const News = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800); // 2 seconds
    return () => clearTimeout(timeout);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleImageError = (event) => {
    event.target.src = 'path/to/fallback-image.jpg'; // optional fallback
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <PacmanLoader color="#36d7b7" size={40} />
      </div>
    );
  }

  return (
    <div className="news-container px-4 sm:px-6 lg:px-12 py-12 max-w-7xl mx-auto bg-custom-blue">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
        Daily News Updates
      </h1>

      <Slider {...settings} className="mt-10">
        {[news1, news2, news3, news4].map((img, i) => {
          const content = [
            {
              link: "https://www.pexels.com/photo/part-of-a-person-with-a-stethoscope-5207102/",
              title: "Cardiothoracic Imaging Techniques",
              desc: "A detailed look at the latest cardiothoracic imaging techniques and their applications.",
            },
            {
              link: "https://www.medscape.com/viewarticle/colchicine-cv-reduction-splits-cardiologists-after-clear-2025a1000614?form=fpf",
              title: "Colchicine CV Reduction: Cardiologists Divided",
              desc: "Cardiologists debate the effectiveness of colchicine for cardiovascular reduction after recent studies.",
            },
            {
              link: "https://www.healio.com/cardiology",
              title: "Latest News on Cardiology",
              desc: "Stay up to date with the latest developments in the field of cardiology.",
            },
            {
              link: "https://www.thehindu.com/tag/62861-1120-1073/",
              title: "The Hindu: Latest Cardiovascular Health News",
              desc: "Latest cardiovascular health-related articles from The Hindu.",
            },
          ];

          return (
            <div key={i} className="news-slide">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <a href={content[i].link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={img}
                    alt={content[i].title}
                    className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </a>
                <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center">
                  <a href={content[i].link} target="_blank" rel="noopener noreferrer">
                    {content[i].title}
                  </a>
                </h3>
                <p className="text-sm sm:text-base mt-2 text-center text-gray-700">
                  {content[i].desc}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default News;
