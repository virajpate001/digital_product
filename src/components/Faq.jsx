import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { FaAngleDown } from "react-icons/fa";

const Faq = () => {
  return (
    <>
      <section className="py-16 px-6  mx-auto bgmdlight">
        <div className="max-w-4xl mx-auto">
          <h2
            className="primaryfont uppercase text-center text-3xl font-bold aos-init aos-animate mb-6"
            data-aos="zoom-in"
          >
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <div
            className="divider div-transparent div-dot aos-init aos-animate"
            data-aos="fade-up"
          ></div>

          <div className=" w-full px-4 pt-4">
            <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
              <Disclosure as="div" className="p-6" defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                    What platforms are these prompts for?
                  </span>
                  <FaAngleDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                  YouTube, Instagram, Facebook + repurposing across all.
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" className="p-6">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                    How do I receive the product?{" "}
                  </span>
                  <FaAngleDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                  You’ll instantly receive a downloadable PDF via email.
                </DisclosurePanel>
              </Disclosure>
                            <Disclosure as="div" className="p-6">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                    How do I receive the product?{" "}
                  </span>
                  <FaAngleDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                  You’ll instantly receive a downloadable PDF via email.
                </DisclosurePanel>
              </Disclosure>
                            <Disclosure as="div" className="p-6">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                    How do I receive the product?{" "}
                  </span>
                  <FaAngleDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                  You’ll instantly receive a downloadable PDF via email.
                </DisclosurePanel>
              </Disclosure>
                            <Disclosure as="div" className="p-6">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                    How do I receive the product?{" "}
                  </span>
                  <FaAngleDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                  You’ll instantly receive a downloadable PDF via email.
                </DisclosurePanel>
              </Disclosure>
                            <Disclosure as="div" className="p-6">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                    How do I receive the product?{" "}
                  </span>
                  <FaAngleDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                  You’ll instantly receive a downloadable PDF via email.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
