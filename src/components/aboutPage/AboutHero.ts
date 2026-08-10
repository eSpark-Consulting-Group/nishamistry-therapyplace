import React from 'react'
import { imageBuilder, sanityClient } from '../../utils/sanityClient'

// sanity image url builder
const builder = imageBuilder(sanityClient)
const urlFor = (source) => builder.image(source)

const AboutHero = ({ hero }) => {
  return (
    <section className="mx-auto mb-0 h-[30rem] w-[60%] sm:mb-12">
      <div className="relative mx-auto h-full w-[90%]">
        <div className="absolute top-0 hidden space-y-3 -right-1 xl:block">
          <div className="h-[55px] w-[42px] bg-navy"></div>
          <div className="h-[55px] w-[42px] bg-army"></div>
          <div className="h-[55px] w-[42px] bg-mint"></div>
        </div>

        <div
          className="
        absolute
        top-0
        left-[2rem]
        z-10
        h-[40%]
        w-[85%]
        bg-chocolate
        sm:top-0
        sm:left-[3.9rem]
        md:h-[70%]
        lg:h-[85%]
      "
        ></div>

        <div
          className="
        absolute
        top-[1rem]
        left-[1rem]
        z-50
        h-[40%]
        w-[90%]
        sm:top-[2rem]
        sm:left-[2rem]
        md:h-[70%]
        lg:h-[90%]
      "
        >
          <img
            className="h-full w-[95%] object-cover"
            src={urlFor(hero).fit('scale').auto('format').url()}
          />
        </div>

        <div
          className="
        absolute
        top-[2rem]
        left-0
        z-10
        h-[40%]
        w-[85%]
        bg-army
        sm:top-[4rem]
        md:h-[70%]
        lg:h-[90%]
      "
        ></div>

        <div className="absolute top-[19.2rem] -left-[3.5rem] hidden space-y-3 xl:block">
          <div className="h-[55px] w-[42px] bg-mint"></div>
          <div className="h-[55px] w-[42px] bg-navy"></div>
          <div className="h-[55px] w-[42px] bg-chocolate"></div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
