import BlockContent from '@sanity/block-content-to-react'
import { imageBuilder, sanityClient } from '../../utils/sanityClient'
import styles from './home-services-markdown-styles.module.css'

// sanity image url builder
const builder = imageBuilder(sanityClient)
const urlFor = (source) => builder.image(source)

export default function TabletHomeServices({ services }) {
  return (
    <section
      className="
      mx-auto
      my-7
      hidden
      h-[50vh]
      w-full
      items-center
      justify-center
      xl:flex
    "
    >
      {services
        ? services.map((service) => (
            <div
              key={service._key}
              className="
                flex
                h-[27rem]
                w-[20%]
                flex-col
                items-center
                p-1
                pt-10
                text-snow
                first:mr-5
                first:bg-navy
                last:bg-army
                even:mr-5
                even:bg-chocolate"
            >
              <div className="w-[45%] max-w-md object-contain">
                <img
                  src={urlFor(service.image)
                    .width(200)
                    .fit('crop')
                    .auto('format')
                    .url()}
                  className="mb-3 rounded-full border-[3px] border-snow"
                />
              </div>
              <div className="flex flex-col pb-40 text-center">
                <div className="text-center font-LGCB text-[1.4rem] leading-[1.2]">
                  {service.title}
                </div>
                <div className="w-full h-2"></div>
                <div className="w-4/5 mx-auto">
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
