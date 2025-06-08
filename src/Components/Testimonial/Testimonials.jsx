import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import anjaliImg from '../Testimonial/Assets/Anjali.jpg';
import raviImg from '../Testimonial/Assets/Ravi.jpg';
import sunitaImg from '../Testimonial/Assets/Sunita.jpg';
// Add 8 more images or use placeholder if needed
import user1 from '../Testimonial/Assets/user1.jpg';
import user2 from '../Testimonial/Assets/user2.jpg';
import user3 from '../Testimonial/Assets/user3.jpg';
import user4 from '../Testimonial/Assets/user4.jpg';
import user5 from '../Testimonial/Assets/user5.jpg';
import user6 from '../Testimonial/Assets/user6.jpg';
import user7 from '../Testimonial/Assets/user7.jpg';
import user8 from '../Testimonial/Assets/user8.jpg';

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'Patient',
    image: anjaliImg,
    quote: 'Dr. Chikkodi gave me a new life with his expert care and kind approach. I’ll always be thankful for the treatment I received.',
  },
  {
    name: 'Ravi Kulkarni',
    role: 'Patient',
    image: raviImg,
    quote: 'From diagnosis to recovery, every step was handled with compassion and precision. I recommend this cardiac center to everyone.',
  },
  {
    name: 'Sunita Desai',
    role: 'Patient',
    image: sunitaImg,
    quote: 'The staff and doctor truly care. The follow-ups and attention to detail made all the difference during my treatment.',
  },
  {
    name: 'Kiran Patil',
    role: 'Patient',
    image: user1,
    quote: 'Exceptional care and a very professional approach. I felt at ease throughout the treatment.',
  },
  {
    name: 'Meena Joshi',
    role: 'Patient',
    image: user2,
    quote: 'The doctor was very reassuring and detailed. My recovery has been smooth thanks to the guidance provided.',
  },
  {
    name: 'Suresh Bhat',
    role: 'Patient',
    image: user3,
    quote: 'Their commitment to patient well-being is unmatched. I’m truly grateful.',
  },
  {
    name: 'Nisha Rao',
    role: 'Patient',
    image: user4,
    quote: 'Clear communication and constant support made my heart procedure much less stressful.',
  },
  {
    name: 'Manoj Shetty',
    role: 'Patient',
    image: user5,
    quote: 'A caring environment with a personal touch. I highly recommend their services.',
  },
  {
    name: 'Pooja Reddy',
    role: 'Patient',
    image: user6,
    quote: 'Very advanced treatment options and helpful staff. A top-class experience.',
  },
  {
    name: 'Ajay Menon',
    role: 'Patient',
    image: user7,
    quote: 'Excellent doctor and supportive nurses. I felt well taken care of throughout.',
  },
  {
    name: 'Deepa Naik',
    role: 'Patient',
    image: user8,
    quote: 'They explained everything clearly and helped me stay calm. Treatment was fast and effective.',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          What Our Patients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Real stories from people who’ve experienced heart care at its best.
        </p>

        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-700 italic">“{t.quote}”</p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
