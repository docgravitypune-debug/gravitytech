import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Quote, Star } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { testimonials } from "../../data.js";

export default function TestimonialsSection() {
  return (
    <AnimatedSection id="reviews" className="section reviews-section">
      <div className="container">
        <SectionHeading eyebrow="Client reviews" title="What partners say about GravityTech." center>
          Practical delivery, clear communication, and portfolio-ready real-time project outcomes.
        </SectionHeading>
        <Swiper
          className="review-slider"
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={22}
          slidesPerView={1}
          breakpoints={{
            900: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((review) => (
            <SwiperSlide key={`${review.company}-${review.name}`}>
              <article className="review-card glass-card">
                <Quote className="quote-icon" size={36} />
                <div className="stars" aria-label={`${review.rating} star review`}>
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star fill="currentColor" size={18} key={index} />
                  ))}
                </div>
                <p>{review.quote}</p>
                <footer>
                  <strong>{review.name}</strong>
                  <span>{review.company}</span>
                </footer>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </AnimatedSection>
  );
}
