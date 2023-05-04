import Link from 'next/link'

export default function MobileFooter() {
  return (
    <div className="block sm:hidden">
      <div className="bg-mint">
        <div className="py-5">
          <footer className="text-xl font-LGCL">
            <div className="flex flex-col items-center justify-around space-y-5">
              <div className="flex">
                <a
                  className="flex items-center"
                  href="https://api.whatsapp.com/send?phone=+51900617146"
                >
                  <img
                    className="mr-2"
                    src="/whatsapp_icon.svg"
                    width="25"
                    height="25"
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
                    width="25"
                    height="25"
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
                    width="25"
                    height="25"
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
                    width="25"
                    height="25"
                    alt="LinkedIn Logo"
                  />
                </a>
              </div>

              <div className="grid grid-cols-2 grid-rows-3 gap-2 text-base tracking-wider font-LGCL text-navy">
                <Link className="row-start-1" href="/about">
                  <a className="">About</a>
                </Link>
                <Link className="row-start-2" href="/services">
                  <a className="">Services</a>
                </Link>
                <Link className="row-start-3" href="/price-list">
                  <a className="">Price List</a>
                </Link>
                <Link className="col-start-2 row-start-1" href="/contact">
                  <a className="">Contact Us</a>
                </Link>
                <Link className="col-start-2 row-start-2" href="/faqs">
                  <a className="">FAQs</a>
                </Link>
              </div>

              <div className="mt-5 flex justify-between space-x-10 align-bottom font-LGCB text-[9px] text-navy">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>

            <img
              className="flex items-center justify-center mx-auto mt-5 w-36"
              src="/ttp-main-logo.svg"
              alt="logo"
            />
          </footer>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-5 text-xl bg-snow font-LGC text-navy">
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
