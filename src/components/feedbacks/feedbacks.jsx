import React from "react";
import "./feedbacks.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import crt from "../../assets/crt.png";
import eram from "../../assets/eram.png";
import chahd from "../../assets/chahd.png";
import aahhm from "../../assets/aahhm.png";

const Feedbacks = () => {
  const data = [
    {
      id: 1,
      image: aahhm,
      title: "Youssef Hamou",
      subtitle: "A.A.H.H.M Center Manager",
      comment:
        "Amen's creativity and attention to detail truly stood out during the design of our workshop posters and badges. The designs were not only visually stunning but also effectively conveyed the theme of our event. We appreciate his professionalism and dedication!",
    },
    {
      id: 2,
      image: eram,
      title: "Eram Tecno",
      subtitle: "CEO",
      comment:
        "Amen developed a fantastic e-commerce website for us that was both functional and visually appealing. His expertise in development brought our vision to life, and the platform has been a great success. We couldn't be happier with the results!",
    },
    {
      id: 3,
      image: chahd,
      title: "Chahd Soussi",
      subtitle: "Founder of Chahd Abaya",
      comment:
        "Working with Amen on our logo design was an absolute pleasure. He captured the essence of our brand with a clean, elegant, and modern logo that perfectly represents Chahd Abaya. The process was smooth, and his creativity exceeded our expectations. Highly recommended!",
    },
    {
      id: 4,
      image: crt,
      title: "Maryem Bhouri",
      subtitle: "Red Cresent Club President",
      comment:
        "Amen’s designs for our logos and posters were outstanding. His work beautifully reflected our mission and values while maintaining a professional and creative touch. We are grateful for his hard work and dedication to our cause! We highly recommend him.",
    },
  ];

  return (
    <section className="testimonials container section">
      <h2 className="section-title">Testimonials.</h2>
      <p style={{ textAlign: "justify", marginBottom: "2rem" }}>
        Discover the experiences and feedback from those who have worked with
        me. Their words reflect the trust and satisfaction i strive to achieve
        every day.
      </p>
      <Swiper
        className="testimonials-container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => (
          <SwiperSlide className="testimonial-item" key={id}>
            <div className="thumb">
              <img
                src={image}
                alt={`${title} testimonial`}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <h3 className="testimonials-title" style={{ textAlign: "center" }}>
              {title}
            </h3>
            <div className="subtitle">{subtitle}</div>
            <div className="comment">{comment}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Feedbacks;
