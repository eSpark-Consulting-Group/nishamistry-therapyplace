import Link from 'next/link'

export default function TabletFooter() {
  return (
    <div className="hidden sm:block xl:hidden">
      <div className="bg-mint">
        <div className="py-5">
          <footer className="text-xl font-LGCL">
            <div className="flex flex-col items-center justify-around space-y-7">
              <div className="flex">
                <a
                  className="flex items-center"
                  href="https://api.whatsapp.com/send?phone=+51900617146"
                >
                  <img
                    className="mr-2"
                    src="/whatsapp_icon.svg"
                    width="40"
                    height="40"
                    alt="whatsapp logo"
                  />
                </a>
                <a
                  className="flex items-center"
                  href="mailto:nisha@thetherapyplaceuk.com"
                >
                  <img
                    className="mr-2"
                    src="/mail.svg"
                    width="40"
                    height="40"
                    alt="mail icon"
                  />
                </a>
                <a
                  className="flex items-center"
                  href="https://instagram.com/thetherapyplaceuk"
                >
                  <img
                    className="mr-2"
                    src="/instagram_icon.svg"
                    width="40"
                    height="40"
                    alt="instagram icon"
                  />
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
                </a>
              </div>

              <div className="flex space-x-10 text-xl tracking-wider font-LGCL text-navy">
                <Link href="/about">
                  <a className="">About</a>
                </Link>
                <Link href="/services">
                  <a className="">Services</a>
                </Link>
                <Link href="/price-list">
                  <a className="">Price List</a>
                </Link>
                <Link href="/contact">
                  <a className="">Contact Us</a>
                </Link>
                <Link href="/faqs">
                  <a className="">FAQs</a>
                </Link>
              </div>
              <div className="flex items-end space-x-5 text-sm align-bottom font-LGCB text-navy">
                <p>Privacy Policy</p>
                <img className="w-24" src="/ttp-square-logo.svg" alt="" />
                <p>Terms & Conditions</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-5 text-2xl bg-snow font-LGC text-navy">
        <a href="https://www.thetherapyplaceuk.com">
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
