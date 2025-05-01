import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Dr. Priya Mehta',
    stars: 5,
    title: 'Outstanding Experience!',
    content: 'Dr. Chikkodi was incredibly professional and caring. I felt supported every step of the way.',
  },
  {
    name: 'Rahul Desai',
    stars: 4,
    title: 'Highly Recommend',
    content: 'Clear communication, kind approach, and a smooth experience throughout.',
  },
  {
    name: 'Amit Sharma',
    stars: 5,
    title: 'Excellent Diagnosis',
    content: 'Accurate, fast diagnosis that helped me avoid major complications. Forever thankful.',
  },
  // Add more testimonials as needed...
];

const StarRating = ({ stars }) => {
  return (
    <div className="flex text-yellow-400 mb-1">
      {Array.from({ length: stars }, (_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09L5.5 12 1 7.91l6.061-.91L10 2l2.939 5 6.061.91L14.5 12l1.378 6.09z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10&nat=in');
        const data = await response.json();
        const users = data.results.map(user => user.picture.large);
        setPhotos(users);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="bg-custom-blue py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Patient Testimonials</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={photos[index] || 'https://via.placeholder.com/100'}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
              />
              <div>
                <p className="text-lg font-semibold text-gray-900">{t.name}</p>
                <StarRating stars={t.stars} />
              </div>
            </div>
            <p className="text-sm font-bold text-gray-800 truncate mb-2">{t.title}</p>
            <p className="text-gray-600 text-sm">{t.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
