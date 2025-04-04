import React from "react";
import "./feedbacks.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import crt from "../../assets/crt.png";
import sb from "../../assets/sb.jpg";
import eram from "../../assets/eram.png";
import chahd from "../../assets/chahd.png";
import aahhm from "../../assets/aahhm.png";
import bahjat from "../../assets/bahjat-logo.png";

const Feedbacks = () => {
  const data = [
    {
      id: 1,
      image: bahjat,
      title: "Abdullah Al Malki",
      subtitle: "CEO of Bahjat Al Khawir United",
      comment:
        "Overall, very pleased with Amen and his friendliness with us. He did everything we asked in a timely manner and maintained a professional yet approachable attitude throughout. I will definitely be recommending him to other companies. Thanks for such good work and dedication to excellence.",
    },
    {
      id: 2,
      image: aahhm,
      title: "Youssef Hamou",
      subtitle: "A.A.H.H.M Center Manager",
      comment:
        "Amen's creativity and attention to detail truly stood out during the design of our workshop posters and badges. The designs were not only visually stunning but also effectively conveyed the theme of our event. We appreciate his professionalism and dedication!",
    },
    {
      id: 3,
      image: sb,
      title: "Oussama Boufaied",
      subtitle: "SB Brand Founder",
      comment:
        "Amen is a highly creative designer with strong visual storytelling skills. Their innovative approach demonstrates a clear passion for design and an ability to think outside the box. With a focus on aligning designs to project goals, their talent will undoubtedly shine in future endeavors.",
    },
    {
      id: 4,
      image: crt,
      title: "Wissal Chammakhi",
      subtitle: "President of the Red Crescent Club, ISSTE",
      comment:
        "Amen’s designs for our logos and posters were outstanding. His work beautifully reflected our mission and values while maintaining a professional and creative touch. We are grateful for their hard work and dedication to our cause. Highly recommended !",
    },
    {
      id: 5,
      image: eram,
      title: "Mahmoud Al Maawali",
      subtitle: "Chief Executive Officer at Eram Tecno",
      comment:
        "Amen developed an e-commerce website for us that was both functional and visually appealing. His expertise in development brought our vision to life, and the website has been a great success. We couldn't be happier with the results and we highly recommend his services",
    },
    {
      id: 6,
      image: chahd,
      title: "Chahd Soussi",
      subtitle: "Founder of Chahd Abaya",
      comment:
        "Working with Amen on our logo design was an absolute pleasure. He captured the essence of our brand with a clean, elegant, and modern logo that perfectly represents Chahd Abaya. The process was smooth, and his creativity exceeded our expectations.",
    },
  ];

  return (
    <section className="testimonials container section" id="testimonials">
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
