import React from "react";
import { useEffect, useState } from "react";


const Fixsec = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section
        className={`clicker notesec w-full py-4 px-8 mx-auto bg-yellow-500 fixed bottom-0 z-10 transition-opacity duration-700 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-around items-center flex-wrap gap-y-4">
          <h3 className="primaryfont text-3xl text-center md:text-left">
            Ready to save time and{" "}
            <span className="text-black">grow your audience faster?</span>
          </h3>
          <a
            href="https://digitalvap.mojo.page/viral-content-prompt"
            className="btn-5 custom-btn px-6 py-2 wiggle"
            data-aos="zoom-in"
            target="_blank"
          >
            Buy Now at <del>₹ 200</del> ₹ 49
          </a>
        </div>
      </section>
    </>
  );
};

export default Fixsec;
