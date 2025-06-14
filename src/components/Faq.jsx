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
                  <span className=" text-left group-data-hover:text-white/80 mt-2  primaryfont uppercase text-md">
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
                  <span className="text-left group-data-hover:text-white/80 mt-2  primaryfont uppercase text-md">
                    How do I receive the product?
                  </span>
                  <FaAngleDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                  You’ll instantly receive a downloadable PDF via email. <br/>(Can’t find it?: Email us at digitalvap16@gmail.com — we’re happy to help.)
                </DisclosurePanel>
              </Disclosure>
                            <Disclosure as="div" className="p-6">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-left group-data-hover:text-white/80 mt-2  primaryfont uppercase text-md">
                    Can I use these prompts with ChatGPT or Notion?
                  </span>
                  <FaAngleDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                  Yes! They’re fully copy-paste ready for AI and planning tools.
                </DisclosurePanel>
              </Disclosure>
                            <Disclosure as="div" className="p-6">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-left group-data-hover:text-white/80 mt-2  primaryfont uppercase text-md">
                    Are these for beginners or pros?
                  </span>
                  <FaAngleDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                  Both. Whether you're just starting or scaling, these prompts save you time and boost content flow.
                </DisclosurePanel>
              </Disclosure>
                            <Disclosure as="div" className="p-6">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-left group-data-hover:text-white/80 mt-2  primaryfont uppercase text-md">
                    Do I get lifetime access?
                  </span>
                  <FaAngleDown className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                 Yes — pay once, use forever.
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
