import React from 'react';
import { Helmet } from 'react-helmet';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Testimonials from '../Testimonial/Testimonials';

const Reviews = () => {
  return (
    <main>
      <Helmet>
        <title>Patient Testimonials | Dr. Santosh V. Chikkodi</title>
        <meta
          name="description"
          content="Read real patient reviews and testimonials about the compassionate cardiac care provided by Dr. Santosh V. Chikkodi, Interventional Cardiologist in Bagalkot."
        />
        <meta
          name="keywords"
          content="cardiology reviews, patient testimonials, Dr. Santosh Chikkodi, heart specialist feedback, cardiologist reviews Karnataka"
        />
        <meta name="author" content="Dr. Santosh V. Chikkodi" />
        <meta property="og:title" content="Patient Reviews - Dr. Santosh V. Chikkodi" />
        <meta property="og:description" content="Discover how patients have benefited from expert cardiac care by Dr. Chikkodi. Read genuine testimonials now." />
        <meta property="og:image" content="https://drsantoshchikkodi.com/assets/testimonial-og.jpg" />
        <meta property="og:url" content="https://drsantoshchikkodi.com/reviews" />
        <link rel="canonical" href="https://drsantoshchikkodi.com/reviews" />
      </Helmet>

      <Testimonial />
      <Testimonials />
    </main>
  );
};

export default Reviews;
