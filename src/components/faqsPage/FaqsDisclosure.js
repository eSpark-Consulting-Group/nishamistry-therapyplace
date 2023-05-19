import BlockContent from '@sanity/block-content-to-react'
import { Disclosure, Transition } from '@headlessui/react'

const FaqsDisclosure = ({ faqsPageData }) => {
  return (
    <>
      <section className="bg-mint">
        <div className="mx-auto w-[90%] py-8 lg:w-[60%]">
          <h1 className="mb-5 font-LGC  text-7xl">FAQ</h1>
          <h4 className="mb-1 leading-loose tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h4>
          <p className="">
            Here are some commonly asked questions about The Therapy Place
          </p>
        </div>
      </section>

      <section className="mx-auto my-7 w-full bg-chocolate p-16 px-4 lg:w-[60%]">
        <div className="mx-auto w-full max-w-[50rem] rounded-2xl bg-chocolate p-2">
          {faqsPageData.map((item) => {
            return (
              <Disclosure key={item._id} className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between border-t-4 border-navy px-4 py-4 text-left font-LGCB text-sm text-navy first:mt-0 last:border-b-4 last:pb-4 focus:outline-none focus-visible:ring focus-visible:ring-navy focus-visible:ring-opacity-75">
                      <span>{item.question}</span>
                      {open ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
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
                        className="px-4 pt-4 pb-4 text-sm italic text-snow"
                      >
                        <BlockContent
                          blocks={item.answer}
                          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        />
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default FaqsDisclosure
