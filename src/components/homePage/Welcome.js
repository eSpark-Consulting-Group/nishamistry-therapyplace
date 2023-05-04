import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import styles from './home-welcome-styles.module.css'

export default function Welcome({ welcome }) {
  const { title, body } = welcome
  return (
    <div className="text-center mb-7 bg-chocolate text-navy">
      <div
        className="
        mx-auto
        w-[70%]
      "
      >
        <div className="my-5 text-2xl text-left font-LGCB text-snow md:text-center lg:text-4xl">
          {title}
        </div>
        <div className={styles.markdown}>
          <BlockContent
            blocks={body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          />
        </div>
        <Link href="/price-list">
          <a className="inline-block py-1 mt-3 mb-10 text-center bg-navy px-14 text-snow">
            Book Now
          </a>
        </Link>
      </div>
    </div>
  )
}
