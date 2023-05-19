import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
// import AddSharpIcon from "@mui/icons-material/AddSharp";
// import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import { faqs } from './constants'
import { Disclosure, Transition } from '@headlessui/react'

const FAQs = () => {
  return (
    <div className="w-[100%]">
      <section className="bg-mint">
        <div className="mx-auto w-[90%] py-4 lg:w-[60%]">
          <h1 className="mb-2 font-LGC text-7xl text-primary sm:text-[40px] md:text-[49px] lg:text-[114px]">
            FAQs
          </h1>
          <h4 className="font-LGC text-primary sm:px-0.5 sm:text-[10px] sm:tracking-[1px] md:px-1 md:text-[11px] lg:px-2 lg:text-[20px] lg:tracking-[2px]">
            FREQUENTLY ASKED QUESTIONS
          </h4>
        </div>
      </section>

      <section className="mx-auto my-7 flex w-full justify-center bg-chocolate p-16 px-4 sm:w-[566px] md:w-[671px] lg:w-[60%]">
        <div className="rounded-2xl sm:mx-6 sm:w-[530px] md:mx-8 md:w-[640px] lg:mx-16 lg:w-[1030px]">
          {faqs.map((item) => {
            return (
              <Disclosure key={item.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="flex w-full items-center justify-between border-t-4 border-navy text-left font-LGC  text-sm text-navy first:mt-0 last:border-b-4
 focus:outline-none focus-visible:ring focus-visible:ring-navy focus-visible:ring-opacity-75 sm:py-2 sm:pr-2 sm:text-[9px] sm:leading-[10.17px] md:py-2 md:pr-3 md:text-[11px] md:leading-[12.24px] lg:py-4 lg:pr-4 lg:text-[19px] lg:leading-[21px]"
                    >
                      <span>{item.question}</span>
                      {open ? (
                        <img
                          className="w-[10px]"
                          src="../../img/MINUS@4x.png"
                          alt="Plus"
                        />
                      ) : (
                        <img
                          className="w-[10px]"
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
                      <Disclosure.Panel static className="pb-4 lg:pb-6">
                        {/* <BlockContent
                          blocks={item.answer}
                          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        /> */}
                        <div
                          className="font-LGC italic text-snow sm:text-[10px] sm:leading-[11.14px] md:text-[12px] md:leading-[13.4px] lg:my-[-2px] lg:text-[21px] lg:leading-[23px] "
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        ></div>
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
  )
}

export default FAQs
