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

export default function Hero({ hero }) {
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
      xl:block
    "
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
        <div className="relative">
          <img
            alt={alt}
            className="absolute top-0 left-0 scale-110"
            src={urlFor(img).width('650').height(415).auto('format').url()}
          />
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="relative -mt-24">
          <div className="">
            <div className="absolute top-0 right-[25%] bg-chocolate">
              <img
                alt={cards[0].alt}
                className=""
                src={urlFor(cards[0].img)
                  .width(300)
                  .height(430)
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
            <div className="absolute top-0 right-5 bg-army">
              <img
                alt={cards[1].alt}
                className=""
                src={urlFor(cards[1].img)
                  .width(300)
                  .height(310)
                  .fit('clip')
                  .auto('format')
                  .url()}
              />
              <div className="absolute -bottom-[7.5rem] left-0 right-0 h-36 bg-snow p-5 text-center font-LGC text-2xl text-navy">
                <p className="">Help your toddler talk Parent coaching programme</p>

                <Link href="/parent_caching_programme">
                  <a className="flex items-center">
                    <img
                      className="absolute -bottom-6 right-[8.5rem]"
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
