import { imageBuilder, sanityClient } from '../../utils/sanityClient'
import Link from 'next/link'

// Get a pre-configured url-builder from your sanity client
const builder = imageBuilder(sanityClient)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source)
}

export default function TabletHero({ hero }) {
  const { img, cards, alt } = hero

  return (
    <div
      className="
      relative
      z-10
      mb-5
      hidden
      h-[24rem]
      bg-mint
      md:block
      xl:hidden
    "
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
        <div className="relative">
          <img
            alt={alt}
            className="scale-150"
            src={urlFor(img)
              .width('650')
              .height(415)
              .auto('format')
              .crop('left')
              .url()}
          />
        </div>
      </div>
      <div className="absolute top-0 right-5">
        <div className="relative -mt-24 sm:-mt-[4rem] lg:-mt-32">
          <div className="flex items-start justify-center pt-8 pb-5 mb-5 ">
            <div className="relative mr-5 bg-chocolate">
              <img
                alt={cards[0].alt}
                className=""
                src={urlFor(cards[0].img)
                  .width(250)
                  .height(400)
                  .fit('clip')
                  .auto('format')
                  .url()}
              />
              <div className="">
                <p className="absolute text-3xl top-5 left-5 text-snow">
                  {cards[0].text}
                </p>

                <Link href="/services">
                  <a className="absolute p-2 text-3xl bottom-12 left-16 bg-navy font-LGC text-snow">
                    Book Now
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative top-0 bg-army">
              <img
                alt={cards[1].alt}
                className=""
                src={urlFor(cards[1].img)
                  .width(250)
                  .height(305)
                  .fit('clip')
                  .auto('format')
                  .url()}
              />
              <div className="absolute -bottom-[6rem] left-0 right-0 h-24 bg-snow p-5 text-center font-LGC text-2xl text-navy">
                <p className="">{cards[1].text}</p>

                <Link href="/services">
                  <a className="flex items-center">
                    <img
                      className="absolute -bottom-6 right-[6.5rem]"
                      src="/call_to_action.svg"
                      width="40"
                      height="40"
                      alt="plus icon"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
