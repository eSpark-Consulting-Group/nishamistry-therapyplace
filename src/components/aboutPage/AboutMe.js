import BlockContent from '@sanity/block-content-to-react'
import styles from './markdown-styles.module.css'

const AboutMe = ({ me }) => {
  return (
    <section className="-mt-[14rem] w-full bg-chocolate p-10 text-navy md:-mt-[6rem] lg:-mt-0">
      <div className="text-center">
        <h2 className="mx-auto mb-5 w-full text-2xl font-bold text-snow sm:w-[60%] md:mb-10 md:text-4xl">
          {me.title}
        </h2>
        <div className="flex flex-col col-start-2 pt-3 border-t-4 border-candy gap-y-5">
          <div className="flex flex-col flex-1">
            <div className="flex-1">
              <div className={styles.markdown}>
                <BlockContent
                  blocks={me.body}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
