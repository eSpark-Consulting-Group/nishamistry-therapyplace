import { imageBuilder, sanityClient } from '../../utils/sanityClient'
import Link from 'next/link'

const builder = imageBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function MobileHero({ hero }) {
  const { img, cards } = hero

  return (
    <div className="relative z-0 flex items-start justify-center pt-8 pb-5 mb-5 bg-mint md:hidden">
      <div className="relative mr-5 bg-chocolate">
        <img
          alt={cards[0].alt}
          src={urlFor(cards[0].img).width(170).height(250).auto('format').url()}
        />
        <div>
          <p className="absolute top-5 left-5 text-snow">{cards[0].text}</p>

          <Link href="/services">
            <a className="absolute px-2 py-1 bottom-5 left-8 bg-navy font-LGC text-snow">
              Book Now
            </a>
          </Link>
        </div>
      </div>
      <div className="relative bg-army">
        <img
          alt={cards[1].alt}
          src={urlFor(cards[1].img).width(170).height(170).auto('format').url()}
        />
        <div className="absolute -bottom-[5rem] left-0 right-0 h-20 bg-snow p-2 text-center font-LGC text-navy">
          <p style={{fontSize:"12px"}} className="">Help your toddler talk Parent coaching programme</p>
          {/* <Link href="/parent_caching_programme">
            <a className="flex items-center">
              <img
                className="absolute -bottom-4 right-[4.5rem]"
                src="/call_to_action.svg"
                width="30"
                height="30"
                alt="plus icon"
              />
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  )
}
