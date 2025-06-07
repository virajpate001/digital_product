import React from "react";
import bonus1 from '../assets/img/hahtag.png'
import bonus2 from '../assets/img/calendar.png'
import bonus3 from '../assets/img/imgbp1.png'
import { useEffect } from "react";

const Pricing = () => {
 useEffect(() => {
   const countdown = new FlipDown(
      Math.floor(new Date("2025-06-07T22:00:00").getTime() / 1000)
    );

     countdown.start();
  }, []);

  
  
  return (
    <>
      <section className="py-20 px-6 text-center " id="buy">
        <h2
          className="primaryfont uppercase text-3xl font-bold aos-init aos-animate mb-6"
          data-aos="zoom-in"
        >
          UNLOCK <span className="highlight">BONUSES</span>
        </h2>

        <div
          className="divider div-transparent div-dot aos-init aos-animate"
          data-aos="fade-up"
        ></div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          <div
            className="bg-[#0000005c] px-10 py-8 rounded border relative"
            data-aos="fade-right"
          >
            <h3 className="bg-yellow-400 rounded w-fit px-6 text-black inline-block absolute -top-3 left-[28%]">
              🎁 Bonus #1
            </h3>
            <img src={bonus1} className="w-28 mb-4 mx-auto" alt="" />
            <p className="mt-2 text-yellow-400 primaryfont uppercase text-md">
              Viral Hashtag Starter Pack
            </p>
          </div>
          <div
            className="bg-[#0000005c] px-10 py-8 rounded border relative"
            data-aos="fade-right"
          >
            <h3 className="bg-yellow-400 rounded w-fit px-6 text-black inline-block absolute -top-3 left-[28%]">
              🎁 Bonus #2
            </h3>
            <img src={bonus2} className="w-28 mb-4 mx-auto" alt="" />
            <p className="mt-2 text-yellow-400 primaryfont uppercase text-md">
              Weekly Content Calendar
            </p>
          </div>
          <div
            className="bg-[#0000005c] px-10 py-8 rounded border relative"
            data-aos="fade-right"
          >
            <h3 className="bg-yellow-400 rounded w-fit px-6 text-black inline-block absolute -top-3 left-[28%]">
              🎁 Bonus #3
            </h3>
            <img src={bonus3} className="w-28 mb-4 mx-auto" alt="" />
            <p className="mt-2 text-yellow-400 primaryfont uppercase text-md">
              Viral Video Hook
            </p>
          </div>
        </div>

        <h3 className="primaryfont text-3xl mb-6">
          Buy Now For Just <del>₹ 200</del>
          <span className="highlight md:text-6xl"> ₹ 49,</span>
        </h3>
        <p className="mb-6 text-sm text-gray-400" data-aos="zoom-in">
          Includes lifetime access + Bonuses
        </p>

        <a
          href="https://imjo.in/rArj4J"
          className="btn-5 custom-btn px-6 py-2 aos-init aos-animate inline-block mb-8 bounce-glow"
          data-aos="zoom-in"
          target="_blank"
        >
          Buy Now at ₹ 49
        </a>

        <h3 className="primaryfont text-3xl mb-6">
          Hurry, Limited Time <span className="highlight">Offer!</span>
        </h3>
        <div>
          
        <div id="flipdown" className="flipdown my-10 mx-auto" />
        
        </div>
      </section>
    </>
  );
};

export default Pricing;
