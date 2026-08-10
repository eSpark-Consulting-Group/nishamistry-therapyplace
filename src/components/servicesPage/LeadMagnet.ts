import BlockContent from '@sanity/block-content-to-react'
import { imageBuilder, sanityClient } from '../../utils/sanityClient'

const builder = imageBuilder(sanityClient)
const urlFor = (source) => builder.image(source)

const LeadMagnet = ({ media, resources }) => {
  return (
    <>
      <section className="my-7 text-navy">
        <div className="flex flex-col items-center w-full gap-5 xl:flex-row xl:items-start xl:gap-2 xl:bg-army">
          <div className="w-full xl:w-1/2">
            <img
              className="object-cover w-full h-full"
              src={urlFor(media.image).auto('format').url()}
            />
          </div>

          <div className="flex w-[93%] flex-col items-center bg-army py-16 px-3 text-navy md:w-[97%] xl:w-1/2 xl:items-start xl:bg-army xl:p-20 xl:text-left xl:text-navy">
            <h3 className="mb-10 text-4xl font-LGCB text-snow">
              {media.title}
            </h3>
            <div className="text-2xl text-center md:text-3xl xl:p-0 xl:text-left">
              <BlockContent
                blocks={media.body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              />
            </div>
          </div>
        </div>
        {/* <LeadsForm /> */}
      </section>
      <section className="mx-auto mb-7 flex w-[90%] items-center gap-x-3">
        {resources.map((resource) => (
          <div
            key={resource._id}
            className="flex h-[15%] w-1/4 items-center justify-center bg-chocolate p-4 md:p-9 xl:p-12"
          >
            <img
              className="object-cover w-full h-full"
              src={urlFor(resource.image).fit('fill').auto('format').url()}
            />
          </div>
        ))}
      </section>
    </>
  )
}

export default LeadMagnet
