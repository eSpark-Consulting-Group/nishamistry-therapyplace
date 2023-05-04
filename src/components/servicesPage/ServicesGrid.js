import BlockContent from '@sanity/block-content-to-react'
import Link from 'next/link'
import { imageBuilder, sanityClient } from '../../utils/sanityClient'
import styles from './services-markdown-styles.module.css'

const builder = imageBuilder(sanityClient)
const urlFor = (source) => builder.image(source)

export default function ServicesGrid({ services }) {
  console.log('services:', services)
  return (
    <section className="my-7 text-navy">
      <div className="hidden w-full grid-cols-2 grid-rows-4 px-4 mx-auto place-items-center gap-y-5 sm:grid xl:w-2/3 xl:place-items-start">
        <div className="relative h-full w-[95%] overflow-hidden xl:h-[90%]">
          <img
            className="object-cover w-full h-full bg-mint"
            src={urlFor(services[3].image).fit('crop').auto('format').url()}
          />
          <Link href="/price-list">
            <a className="absolute bottom-2 left-[30%] my-2 w-48 bg-navy text-center text-lg uppercase text-snow">
              Book Now
            </a>
          </Link>
        </div>
        <div className="w-[95%]" id="parent-consultation">
          <div className="mb-3 text-3xl font-LGCB">{services[3].title}</div>
          <div className="mb-5 leading-relaxed tracking-widest">
            {services[3].duration}
          </div>
          <div className={styles.markdown}>
            <BlockContent
              blocks={services[3].body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>

        <div className="w-[95%]" id="therapy-session">
          <div className="mb-3 text-3xl font-LGCB">{services[1].title}</div>
          <div className="mb-5 leading-relaxed tracking-widest">
            {services[1].duration}
          </div>
          <div className={styles.markdown}>
            <BlockContent
              blocks={services[1].body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
        <div className="relative h-full w-[95%] overflow-hidden xl:h-[90%]">
          <img
            className="object-cover w-full h-full bg-navy"
            src={urlFor(services[1].image).fit('crop').auto('format').url()}
          />
          <Link href="/price-list">
            <a className="absolute bottom-2 left-[30%] my-2 w-48 bg-navy text-center text-lg uppercase text-snow">
              Book Now
            </a>
          </Link>
        </div>

        <div className="relative h-full w-[95%] overflow-hidden xl:h-[90%]">
          <img
            className="object-cover w-full h-full bg-army"
            src={urlFor(services[0].image).fit('crop').auto('format').url()}
          />
          <Link href="/price-list">
            <a className="absolute bottom-2 left-[30%] my-2 w-48 bg-navy text-center text-lg uppercase text-snow">
              Book Now
            </a>
          </Link>
        </div>
        <div className="w-[95%]" id="post-consultation">
          <div className="mb-3 text-3xl font-LGCB">{services[0].title}</div>
          <div className="mb-5 leading-relaxed tracking-widest">
            {services[0].duration}
          </div>
          <div className={styles.markdown}>
            <BlockContent
              blocks={services[0].body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>

        <div className="w-[95%]" id="parent-child">
          <div className="mb-3 text-3xl font-LGCB">{services[2].title}</div>
          <div className="mb-5 leading-relaxed tracking-widest">
            {services[2].duration}
          </div>
          <div className={styles.markdown}>
            <BlockContent
              blocks={services[2].body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
        <div className="relative h-full w-[95%] overflow-hidden xl:h-[90%]">
          <img
            className="object-cover w-full h-full bg-chocolate"
            src={urlFor(services[2].image).fit('crop').auto('format').url()}
          />
          <Link href="/price-list">
            <a className="absolute bottom-2 left-[30%] my-2 w-48 bg-navy text-center text-lg uppercase text-snow">
              Book Now
            </a>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 mx-auto gap-y-5 sm:hidden xl:w-full">
        <div className="w-full h-full overflow-hidden xl:h-full">
          <img
            className="object-cover w-full h-full bg-mint"
            src={urlFor(services[3].image).fit('crop').auto('format').url()}
          />
        </div>
        <div className="w-full" id="parent-consultation">
          <div className="mb-3 text-3xl font-LGCB">{services[3].title}</div>
          <div className="mb-5 leading-relaxed tracking-widest">
            {services[3].duration}
          </div>
          <div className={styles.markdown}>
            <BlockContent
              blocks={services[3].body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
        <Link href="/price-list">
          <a className="w-48 my-2 text-lg text-center uppercase bg-navy text-snow">
            Book Now
          </a>
        </Link>

        <div className="w-full h-full overflow-hidden xl:h-full">
          <img
            className="object-cover w-full h-full bg-navy"
            src={urlFor(services[1].image).fit('crop').auto('format').url()}
          />
        </div>
        <div className="w-full" id="therapy-session">
          <div className="mb-3 text-3xl font-LGCB">{services[1].title}</div>
          <div className="mb-5 leading-relaxed tracking-widest">
            {services[1].duration}
          </div>
          <div className={styles.markdown}>
            <BlockContent
              blocks={services[1].body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
        <Link href="/price-list">
          <a className="w-48 my-2 text-lg text-center uppercase bg-navy text-snow">
            Book Now
          </a>
        </Link>

        <div className="w-full h-full overflow-hidden xl:h-full">
          <img
            className="object-cover w-full h-full bg-army"
            src={urlFor(services[0].image).fit('crop').auto('format').url()}
          />
        </div>
        <div className="w-full" id="post-consultation">
          <div className="mb-3 text-3xl font-LGCB">{services[0].title}</div>
          <div className="mb-5 leading-relaxed tracking-widest">
            {services[0].duration}
          </div>
          <div className={styles.markdown}>
            <BlockContent
              blocks={services[0].body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
        <Link href="/price-list">
          <a className="w-48 my-2 text-lg text-center uppercase bg-navy text-snow">
            Book Now
          </a>
        </Link>

        <div className="w-full h-full overflow-hidden xl:h-full">
          <img
            className="object-cover w-full h-full bg-chocolate"
            src={urlFor(services[2].image).fit('crop').auto('format').url()}
          />
        </div>
        <div className="w-full" id="parent-child">
          <div className="mb-3 text-3xl font-LGCB">{services[2].title}</div>
          <div className="mb-5 leading-relaxed tracking-widest">
            {services[2].duration}
          </div>
          <div className={styles.markdown}>
            <BlockContent
              blocks={services[2].body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
        <Link href="/price-list">
          <a className="w-48 my-2 text-lg text-center uppercase bg-navy text-snow">
            Book Now
          </a>
        </Link>
      </div>
    </section>
  )
}
