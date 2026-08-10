import Link from 'next/link'

export default function Footer() {
  return (
    <div className="hidden xl:block">
      <div className="py-10 bg-mint">
        <footer className="ml-16 text-xl font-LGCL">
          <div className="flex justify-around">
            <div className="grid grid-rows-5 gap-3 text-navy">
              <Link className="row-start-1" href="/about">
                <a className="">About</a>
              </Link>
              <Link className="row-start-2" href="/services">
                <a className="">Services</a>
              </Link>
              <Link className="row-start-3" href="/price-list">
                <a className="">Price List</a>
              </Link>
              <Link className="row-start-4" href="/contact">
                <a className="">Contact Us</a>
              </Link>
              <Link className="row-start-5" href="/faqs">
                <a className="">FAQs</a>
              </Link>
            </div>

            <div className="flex flex-col space-y-4 text-navy">
              <a
                className="flex items-center mr-3"
                href="mailto:nisha@thetherapyplaceuk.com"
              >
                <img
                  className="mr-2"
                  src="/mail.svg"
                  width="40"
                  height="40"
                  alt="mail icon"
                />
                <div className="text-lg">nisha@thetherapyplaceuk.com</div>
              </a>
              <a
                className="flex items-center mr-3"
                href="https://instagram.com/thetherapyplaceuk"
              >
                <img
                  className="mr-2"
                  src="/instagram_icon.svg"
                  width="40"
                  height="40"
                  alt="instagram icon"
                />
                <div className="text-lg">instagram.com/thetherapyplaceuk</div>
              </a>
              <a
                className="flex items-center"
                href="https://uk.linkedin.com/in/nishamistry-ttp/"
              >
                <img
                  className="mr-2"
                  src="/linkedin_icon.svg"
                  width="40"
                  height="40"
                  alt="LinkedIn Logo"
                />
                <div className="text-lg">linkedin.com/nishamistry-ttp</div>
              </a>
            </div>
          </div>
          <div className="flex items-end text-sm font-LGCB">
            <img
              className="mr-[9rem] w-24"
              src="/ttp-square-logo.svg"
              alt="logo"
            />
            <div className="flex text-xs align-bottom font-LGCL text-navy">
              <p className="flex self-center justify-center mr-10">
                Privacy Policy
              </p>
              <p className="flex self-center justify-center mr-10">
                Terms & Conditions
              </p>
            </div>
          </div>
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-5 text-sm bg-snow font-LGC text-navy sm:text-xl md:text-4xl">
        <a
          className="text-sm sm:text-xl md:text-4xl"
          href="https://www.thetherapyplaceuk.com"
        >
          www.thetherapyplaceuk.com
        </a>
        <span className="text-xs">
          Company no. 13931444 | Member of RCSLT | RegHCPC
        </span>
      </div>
    </div>
  )
}

// whatsapp link example:
// {/* <a href="https://api.whatsapp.com/send?phone=+971501724365&amp;text=Hello, I visited your website and I need help from you.&amp;link%20https://www.fern.ae"><img nitro-lazy-src="https://cdn-dgcim.nitrocdn.com/RcKCkLLBIuBbHNmSSXqBmIDcaERAryBs/assets/static/optimized/rev-58bf4ff/wp-content/uploads/2021/01/whatsapp-ico.png" class=" lazyloaded" nitro-lazy-empty="" id="MTQ5NDoyMzE=-1" src="https://cdn-dgcim.nitrocdn.com/RcKCkLLBIuBbHNmSSXqBmIDcaERAryBs/assets/static/optimized/rev-58bf4ff/wp-content/uploads/2021/01/whatsapp-ico.png"></a><a href="https://api.whatsapp.com/send?phone=+971501724365&amp;text=Hello, I visited your website and I need help from you.&amp;link%20https://www.fern.ae"><img nitro-lazy-src="https://cdn-dgcim.nitrocdn.com/RcKCkLLBIuBbHNmSSXqBmIDcaERAryBs/assets/static/optimized/rev-58bf4ff/wp-content/uploads/2021/01/whatsapp-ico.png" class=" lazyloaded" nitro-lazy-empty="" id="MTQ5NDoyMzE=-1" src="https://cdn-dgcim.nitrocdn.com/RcKCkLLBIuBbHNmSSXqBmIDcaERAryBs/assets/static/optimized/rev-58bf4ff/wp-content/uploads/2021/01/whatsapp-ico.png"></a> */}
