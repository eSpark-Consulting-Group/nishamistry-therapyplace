import BlockContent from '@sanity/block-content-to-react'
import styles from './trainingMarkdown-styles.module.css'
import { imageBuilder, sanityClient } from '../../utils/sanityClient'
import Link from 'next/link'

const builder = imageBuilder(sanityClient)
const urlFor = (source) => builder.image(source)

export default function Training({ training }) {
  return (
    <section className="mb-7 text-navy">
      <div className="flex flex-col items-center w-full gap-5 bg-snow xl:flex-row xl:items-start xl:gap-2 xl:bg-mint">
        <div className="w-full bg-chocolate xl:w-[60%] xl:bg-mint">
          <img
            className="object-cover w-full h-full"
            src={urlFor(training.image).auto('format').url()}
          />
        </div>
        <div className="mx-auto flex w-full flex-col items-center bg-navy pt-8 text-center text-army md:w-[97%] xl:w-[40%] xl:bg-mint xl:text-left xl:text-navy">
          <h2
            id="training"
            className="mb-1 text-4xl font-LGCB text-snow md:mb-3"
          >
            Training
          </h2>
          <div className="p-5 text-[1.2rem] leading-relaxed md:text-[1.35rem]">
            <BlockContent
              blocks={training.body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-[90%] flex-col items-center">
        <div className="mx-auto w-[90%] pt-10 pb-5 lg:w-[60%]">
          <h2 className="mb-10 text-3xl text-center font-LGCB text-navy sm:text-4xl md:ml-10 md:text-left">
            What you'll learn
          </h2>
          <div className={styles.markdown}>
            <BlockContent
              blocks={training.goals}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
        <Link href="/contact">
          <a className="my-2 -mr-[10%] w-48 bg-navy text-center text-lg uppercase text-snow sm:-mr-0 sm:self-end ">
            Enquire Now
          </a>
        </Link>
      </div>
    </section>
  )
}
