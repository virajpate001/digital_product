import React from "react";
import img1 from "../assets/img/note.png";

import shape1 from "../assets/img/shape-07-1.png";
import shape2 from "../assets/img/shape-10.png";

import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";




const Thankyou = () => {
  return (
    <>
      <section className="text-center py-20 px-6 relative" data-aos="fade-down">
        <div className="prodimg mb-4 md:mb-6">
          <img
            src={img1}
            className="w-32 md:w-40 mx-auto  bg-transparent"
            alt=""
          />
        </div>

        <h1
          className="text-3xl md:text-6xl font-bold mb-4"
          data-aos="fade-down"
        >
          <span className="highlight"> Thank You</span> for Your Purchase!
        </h1>
        <p className="sec md:text-xl mb-12" data-aos="fade-down">
          Your digital product is on its way to your inbox.
          <br />
          We truly appreciate your support and trust in{" "}
          <span className="highlight">DIGITALVAP</span>
        </p>

        <div className="mx-auto m-8 px-6 py-2">
          <h3 className="primaryfont text-3xl mb-6">
            What Happens <span className="highlight">Next?</span>
          </h3>
          <div className="my-6 max-w-2xl mx-auto text-left">
            <div className="bg-black flex rounded-2xl px-4 py-4 space-x-2 mb-2">
              <IoCheckmarkDoneCircle className="highlight inline-block text-3xl" />

              <div className="w-[80%]">
                <h3 className="inline-block uppercase">Check your email</h3>
                <p className="text-gray-400">
                  You’ll receive a link to download your product within a few
                  minutes. Be sure to check your spam or promotions folder too!
                </p>
              </div>
            </div>

             <div className="bg-black flex rounded-2xl px-4 py-4 space-x-2 mb-2">
              <IoCheckmarkDoneCircle className="highlight inline-block text-3xl" />

              <div className="w-[80%]">
                <h3 className="inline-block uppercase">Can’t find it?</h3>
                <p className="text-gray-400">
                  Email us at <a href="mailto:digitalvap16@gmail.com" className="highlight">digitalvap16@gmail.com</a> — we’re happy to help.
                </p>
              </div>
            </div>
           
          </div>
        </div>

        <div className="socialmedia mx-auto m-8 px-6 py-2 max-w-5xl">
              <h3 className="primaryfont text-3xl mb-6">
            Stay  <span className="highlight">Connected</span>

            <div className="flex justify-center my-6 space-x-1">
               <a href="https://www.facebook.com/61570151444248/"><FaFacebookSquare /></a>
                <a href="https://www.instagram.com/digital_vap/"><FaSquareInstagram /></a>
                 
            </div>
          </h3>
        </div>

        <div className="absolute -top-16 md:top-0 -right-16 md:right-0 opacity-30">
          <img src={shape1} className="grayscale" alt="" />
        </div>
        <div className="absolute bottom-0 md:bottom-20 -left-16 md:left-24 opacity-30">
          <img src={shape2} className="grayscale" alt="" />
        </div>
      </section>
    </>
  );
};

export default Thankyou;
