import BlockContent from '@sanity/block-content-to-react'
import { imageBuilder, sanityClient } from '../../utils/sanityClient'
import styles from './home-about-styles.module.css'

// sanity image url builder
const builder = imageBuilder(sanityClient)
const urlFor = (source) => builder.image(source)

export default function AboutMe({ about }) {
  return (
    <>
      <section className="hidden my-7 bg-army lg:flex">
        <div className="w-[50%] object-contain">
          <img
            className="object-cover w-full h-full"
            src={urlFor(about.image).fit('fill').auto('format').url()}
          />
        </div>
        <div className="ml-5 w-[60%] py-5 px-12">
          <div className="my-5 text-2xl font-LGCB text-snow lg:text-4xl">
            {about.title}
          </div>
          <div className="text-[13px] leading-snug text-navy">
            <div className={styles.markdown}>
              <BlockContent
                blocks={about.body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden my-7 bg-mint md:flex lg:hidden">
        <div className="w-[40%]">
          <img
            className="object-cover object-left-top h-full"
            src={urlFor(about.image)
              .width(650)
              .height(1100)
              .fit('crop')
              .auto('format')
              .url()}
            alt=""
          />
        </div>
        <div className="w-2/3 p-5 ml-5">
          <div className="my-3 text-2xl font-LGCB text-snow">{about.title}</div>
          <div className="flex flex-col justify-center text-[13px] leading-snug text-navy">
            <div className={styles.markdown}>
              <BlockContent
                blocks={about.body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mb-7 md:hidden">
        <div className="mb-3 h-[15rem]">
          <img
            className="object-cover object-left-top h-full rounded-full"
            src={urlFor(about.image).width(450).height(450).url()}
            alt={about.alt}
          />
        </div>
        <div className="w-full p-10 text-center bg-mint">
          <div className="mb-3 text-2xl font-LGCB text-snow">{about.title}</div>
          <div className="text-[13px] leading-snug text-navy">
            <div className={styles.markdown}>
              <BlockContent
                blocks={about.body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
