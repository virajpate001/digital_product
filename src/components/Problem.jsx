


import React from 'react'
import img2 from '../assets/img/img5.png'
import { PiTimerFill } from "react-icons/pi";
import { IoIosCompass } from "react-icons/io";
import { AiOutlineFastForward } from "react-icons/ai";


const Problem = () => {
  return (
    <>
      <section className="py-16 px-6 mx-auto text-center bgmdlight">
        <h2
          className="primaryfont uppercase text-3xl font-bold"
          data-aos="fade-right"
        >
          Struggling to Come Up With{" "}
          <span className="highlight">Content Ideas?</span>
        </h2>

        <div className="divider div-transparent div-dot"></div>

        <div className="max-w-5xl mx-auto flex flex-wrap items-center space-x-0 md:space-x-10 space-y-6 md:space-y-0">
          <div className="w-full md:w-[40%]" data-aos="fade-right">
            <img src={img2} alt="" />
          </div>
          <div className="text-left w-full md:w-[55%]" data-aos="fade-left">
            <h3 className="primaryfont text-3xl mb-6">
              You're Not <span className="highlight">Alone,</span>
            </h3>
            <p className="text-lg mb-4">
              Most creators waste hours brainstorming content. This pack solves
              that with 200+ ready-to-use prompts.
            </p>

            <div className="my-6">
                <div className="bg-black rounded-2xl px-4 py-2 space-x-4 mb-2">
               
                <PiTimerFill className='highlight inline-block' />

                <h3 className="inline-block uppercase">Save time</h3>
              </div>
              <div className="bg-black rounded-2xl px-4 py-2 space-x-4 mb-2">
               
                <IoIosCompass className="highlight inline-block" />
                
                <h3 className="inline-block uppercase">stay consistent</h3>
              </div>
              <div className="bg-black rounded-2xl px-4 py-2 space-x-4">
                
                <AiOutlineFastForward className="highlight inline-block" />

                <h3 className="inline-block uppercase">grow faster</h3>
              </div>
            </div>

            <p className="text-lg">
              with proven content angles that engage and convert.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Problem;

