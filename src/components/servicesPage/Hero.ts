import BlockContent from '@sanity/block-content-to-react'
import { imageBuilder, sanityClient } from '../../utils/sanityClient'

const builder = imageBuilder(sanityClient)
const urlFor = (source) => builder.image(source)

const Hero = ({ hero }) => {
  return (
    <section>
      <div className="items-start hidden gap-8 overflow-hidden bg-chocolate xl:flex">
        <div className="w-full h-full">
          <img
            className="object-fill w-full h-full"
            src={urlFor(hero.image).auto('format').url()}
          />
        </div>
        <div className="flex flex-col items-start gap-5 pt-3">
          <div className="mt-5 text-4xl font-LGCB text-snow">{hero.title}</div>
          <div className="w-[70%] text-[1.65rem] leading-[2rem]">
            <BlockContent
              blocks={hero.body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
      </div>
      <div className="flex-col hidden md:flex xl:hidden">
        <div className="overflow-hidden bg-chocolate">
          <img
            className="object-cover w-full h-full"
            src={urlFor(hero.image).auto('format').url()}
          />
        </div>
        <div className="flex flex-col items-center gap-10 px-10 py-8 pt-3 my-10 text-center mx-7 bg-mint">
          <div className="mt-5 text-5xl font-LGCB text-snow">{hero.title}</div>
          <div className="w-[85%] text-[1.8rem] leading-[3rem]">
            <BlockContent
              blocks={hero.body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <div className="overflow-hidden bg-chocolate">
          <img
            className="object-cover w-full h-full"
            src={urlFor(hero.image).auto('format').url()}
          />
        </div>
        <div className="flex flex-col items-center px-10 py-8 pt-3 my-5 text-center gap-7 bg-mint">
          <div className="mt-5 text-3xl font-LGCB text-snow">{hero.title}</div>
          <div className="w-[85%] text-lg">
            <BlockContent
              blocks={hero.body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
