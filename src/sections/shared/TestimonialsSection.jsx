import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Star } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import GradientCard from "../../components/GradientCard.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { testimonials } from "../../data.js";

export default function TestimonialsSection() {
  return (
    <AnimatedSection id="reviews" className="pro-section pro-reviews">
      <div className="container">
        <ProSectionHeading
          eyebrow="Client voices"
          title="What partners say about working with GravityTech."
          center
        />

        <Swiper
          className="pro-review-slider"
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            900: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={`${review.company}-${review.name}`}>
              <GradientCard className="pro-review-card" delay={index * 0.05} variant={index % 2 === 0 ? "violet" : "cyan"}>
                <div className="pro-review-stars" aria-label={`${review.rating} star review`}>
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star fill="currentColor" size={16} key={index} />
                  ))}
                </div>
                <p>&ldquo;{review.quote}&rdquo;</p>
                <footer>
                  <strong>{review.name}</strong>
                  <span>{review.company}</span>
                </footer>
              </GradientCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </AnimatedSection>
  );
}
