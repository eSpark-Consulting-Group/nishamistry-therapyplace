import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
// import AddSharpIcon from "@mui/icons-material/AddSharp";
// import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import { faqs } from "./constants";
import { Disclosure, Transition } from '@headlessui/react';
import BlockContent from '@sanity/block-content-to-react';

const FAQs = () => {
  return (
    <div className="w-[100%]">
           <section className="bg-mint">
        <div className="mx-auto w-[90%] py-4 lg:w-[60%]">
          <h1 className="mb-2 font-LGC text-7xl text-primary lg:text-[114px] md:text-[49px] sm:text-[40px]">FAQs</h1>
          <h4 className="sm:text-[10px] text-primary lg:text-[20px] md:text-[11px]">
            FREQUENTLY ASKED QUESTIONS
          </h4>
        </div>
      </section>

      <section className="mx-auto my-7 w-full bg-chocolate p-16 px-4 lg:w-[60%] md:w-[671px] sm:w-[566px]">
        <div className="mx-auto lg:w-[1030px] rounded-2xl md:w-[640px] sm:w-[530px]">
          
          {faqs.map((item) => {
            return (
              <Disclosure key={item.id} >
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex  items-center justify-between w-full px-4 py-4 text-sm text-left border-t-4 border-navy text-navy first:mt-0 last:border-b-4 last:pb-4 focus:outline-none focus-visible:ring focus-visible:ring-navy focus-visible:ring-opacity-75 sm:text-[9px] md:text-[11px] lg:text-[19px]">
                      <span>{item.question}</span>
                      {open ? (
                        
                         <img className="w-[10px]"
                         src="../../img/MINUS@4x.png"
                         alt="Plus"
                       />
             
                      ) : (
                        <img className="w-[10px]"
                        src="../../img/PLUS@4x.png"
                        alt="Plus"
                      />
                      )}

                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel
                        static
                        className="px-4 pt-4 pb-4"
                      >
                        {/* <BlockContent
                          blocks={item.answer}
                          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        /> */}
                        <div className=" lg:text-[21px] md:text-[12px] sm:text-[12px] italic text-snow lg:my-[-2px] font-LGC " dangerouslySetInnerHTML={{__html:item.answer}}></div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            )
          })}
        </div>
      </section>
    </div>
  );
};

export default FAQs;
