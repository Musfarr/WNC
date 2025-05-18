import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './TestimonialCarousel.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    image: '/assets/testimonials/testimonial-1.jpg',
    text: 'Working with WNC-TECH has been a game-changer for our business. Their company formation and legal services streamlined our expansion to the UAE market. We couldn\'t be happier with the results.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder',
    company: 'GreenInnovate',
    image: '/assets/testimonials/testimonial-2.jpg',
    text: 'The branding and web development services provided by WNC-TECH transformed our online presence completely. The team was professional, creative, and delivered beyond our expectations.'
  },
  {
    id: 3,
    name: 'Aisha Al-Mansouri',
    position: 'Operations Director',
    company: 'Gulf Solutions',
    image: '/assets/testimonials/testimonial-3.jpg',
    text: 'WNC-TECH\'s accounting and VAT services have been invaluable to our business. Their attention to detail and in-depth knowledge of local regulations has saved us time, money, and a lot of headaches.'
  },
  {
    id: 4,
    name: 'Robert Williams',
    position: 'Marketing Manager',
    company: 'Global Retail Group',
    image: '/assets/testimonials/testimonial-4.jpg',
    text: 'The marketing strategy developed by WNC-TECH increased our lead generation by 150% within just three months. Their data-driven approach and creative campaigns exceeded all our KPIs.'
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-carousel">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-author-image">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/60x60';
                    }}
                  />
                </div>
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">{testimonial.name}</h4>
                  <p className="testimonial-author-position">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
