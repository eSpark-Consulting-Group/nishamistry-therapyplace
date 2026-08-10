import BlockContent from '@sanity/block-content-to-react'

const Mission = ({ mission }) => {
  return (
    <section className="w-full p-10 my-7 bg-navy text-army">
      <div className="text-center">
        <h2 className="mx-auto mb-5 w-full text-2xl font-bold text-snow sm:w-[60%] md:mb-10 md:text-4xl">
          {mission.title}
        </h2>
        <div
          className="
            mx-auto
            w-full
            pb-0
            text-sm
            leading-normal
            tracking-normal
            sm:pb-5
            sm:text-lg
            sm:leading-relaxed
            sm:tracking-widest
            md:w-[55%]
            xl:leading-normal
            xl:tracking-normal
          "
        >
          <BlockContent
            blocks={mission.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          />
        </div>
      </div>
    </section>
  )
}

export default Mission
