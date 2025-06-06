import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import bgimg from '../assets/img/bg-3.jpg'

const testimonials = [
  {
    text: "“I’ve never been this consistent with content. Totally worth it!”",
    author: "– Aman, Instagram Coach",
  },
  {
    text: "“I used to stare at a blank screen for hours. Now, I’ve got content ideas for the whole month—thanks to this pack!”",
    author: "– Nisha, Instagram Coach",
  },
  {
    text: "“My engagement doubled in just 3 weeks using prompts from this bundle. It’s seriously a goldmine.”",
    author: "– Jay, Instagram Creator",
  },
  {
    text: "“These prompts helped me post consistently without the stress. I finally feel like a full-time creator.”",
    author: "– Ravi, YouTube Vlogger",
  },
  {
    text: "“I repurposed one video into 5 posts across platforms using just one idea from this. Genius system!”",
    author: "– Kunal, Content Repurposing Expert",
  },
  {
    text: "“The bonus repurposing guide saved me HOURS. Batch-creating is a breeze now.”",
    author: "– Maya, Social Media Manager",
  },
  {
    text: "“It’s like having a creative partner in your pocket. You’ll never run out of ideas again.”",
    author: "– Zeeshan, Micro-Influencer",
  },
  {
    text: '“Was skeptical at first, but one reel went viral on Day 3. Definitely worth it."',
    author: "– Priya, Fashion Blogger",
  },
];

const Social = () => {
  return (
    <>
      <section className="py-16 px-6 bgmdlight bg-fixed bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgimg})`,}} >
        <h2
          className="primaryfont uppercase text-3xl font-bold text-center"
          data-aos="fade-up"
        >
          What <span className="highlight">Creators</span> Are Saying
        </h2>
        <div className="divider div-transparent div-dot" data-aos="fade-up"></div>

        <div className="max-w-7xl mx-auto pb-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#0000005c] pl-16 py-8 rounded test-icon h-full">
                  <p>{item.text}</p>
                  <p className="mt-2 text-yellow-400 primaryfont uppercase text-sm">
                    {item.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Social;
