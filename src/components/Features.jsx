import React from "react";
import img2 from '../assets/img/img2.png'
import shape1 from '../assets/img/shape-07-1.png'
import shape2 from '../assets/img/shape-10.png'
const Features = () => {
  return (
    <>
      <section className="py-16 px-6 relative">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center space-x-0 md:space-x-10 space-y-6 md:space-y-0">
          <div data-aos="fade-right" className="w-full md:w-[55%]">
            <h2 className="primaryfont uppercase text-3xl font-bold aos-init aos-animate mb-6">
              What's <span className="highlight">Inside</span>
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>✅ 50+ YouTube Prompts</li>
              <li>✅ 50+ Instagram Prompts</li>
              <li>✅ 50+ Facebook Prompts</li>
              <li>✅ 50+ Repurposing Prompts</li>

              <li>📥 Instant PDF Download</li>
            </ul>
            <a
              href="#buy"
              className="btn-5 custom-btn px-6 py-2 aos-init aos-animate inline-block my-6 bounce-glow"
              data-aos="zoom-in"
            >
              Get Instant Access
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </a>
          </div>
          <div data-aos="fade-left" className="w-full md:w-[40%]">
            <img
              src={img2}
              alt="Prompt Pack Preview"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className="absolute right-52 bottom-0 -z-10 opacity-30">
          <img src={shape1} className="grayscale" alt="" />
        </div>
        <div className="absolute top-20 left-auto right-0 md:left-24 opacity-30">
          <img src={shape2} className="grayscale" alt="" />
        </div>
      </section>
    </>
  );
};

export default Features;
