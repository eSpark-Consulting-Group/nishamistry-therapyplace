import BlockContent from '@sanity/block-content-to-react'
import { imageBuilder, sanityClient } from '../../utils/sanityClient'
import styles from './home-services-markdown-styles.module.css'

const builder = imageBuilder(sanityClient)
const urlFor = (source) => builder.image(source)

export default function MobileHomeServices({ services }) {
  return (
    <section className="flex flex-col items-center justify-center w-full mx-auto mb-7 sm:hidden md:hidden">
      {services
        ? services.map((service) => (
            <div
              key={service._key}
              className="
                flex
                h-auto
                w-[80%]
                flex-row
                items-center
                p-4
                text-snow
                first:mb-5
                first:bg-navy
                last:bg-army
                even:mb-5
                even:bg-chocolate"
            >
              <div className="object-contain w-1/3 max-w-md mr-1">
                <img
                  src={urlFor(service.image).width(200).auto('format').url()}
                  className="rounded-full border-[3px] border-snow"
                />
              </div>
              <div className="flex flex-col justify-between w-2/3 text-center">
                <div className="text-lg text-center font-LGCB md:text-2xl">
                  {service.title}
                </div>
                <div className="h-1"></div>
                <div className="">
                  <div className={styles.markdown}>
                    <BlockContent
                      blocks={service.body}
                      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </section>
  )
}
