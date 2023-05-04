import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { imageBuilder, sanityClient } from '../../utils/sanityClient'
import styles from './home-services-markdown-styles.module.css'

// sanity image-url builder
const builder = imageBuilder(sanityClient)
const urlFor = (source) => builder.image(source)

export default function HomeServices({ services }) {
  return (
    <section className="items-center justify-center hidden w-full mx-auto sm:flex xl:hidden">
      {services
        ? services.map((service) => (
            <div
              key={service._key}
              className="
                flex
                h-[28rem]
                w-[30%]
                flex-col
                items-center
                p-3
                pt-10
                text-snow
                first:mr-4
                first:bg-navy
                last:bg-army
                even:mr-4
                even:bg-chocolate"
            >
              <div className="w-1/2 max-w-md">
                <img
                  src={urlFor(service.image).width(200).auto('format').url()}
                  className="border-4 rounded-full mb-7 border-snow"
                />
              </div>
              <div className="flex flex-col justify-between text-center">
                <div className="text-2xl text-center font-LGCB">
                  {service.title}
                </div>
                <div className="w-full h-5"></div>
                <div className={styles.markdown}>
                  <BlockContent
                    blocks={service.body}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  />
                </div>
              </div>
            </div>
          ))
        : null}
    </section>
  )
}
