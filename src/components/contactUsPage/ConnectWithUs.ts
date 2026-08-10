const ConnectWithUs = () => {
  return (
    <section className="bg-chocolate">
      <div className="p-10 mx-auto">
        <h1 className="mb-10 text-4xl text-center font-LGCB text-snow">
          Connect With Us
        </h1>
        <div className="flex items-center justify-center gap-x-7 text-navy xl:gap-x-16">
          <a
            className="flex flex-col items-center gap-y-5"
            href="mailto:nisha@thetherapyplaceuk.com"
          >
            <img
              className="mr-2 h-[100px] w-[100px]"
              src="/mail_green.svg"
              alt="email icon"
            />
            <div className="hidden text-xl font-LGCL xl:block">
              nisha@thetherapyplaceuk.com
            </div>
          </a>
          <a
            className="flex flex-col items-center gap-y-5"
            href="https://instagram.com/thetherapyplaceuk"
          >
            <img
              className="mr-2 h-[100px] w-[100px]"
              src="/insta_green.svg"
              alt="instagram logo"
            />
            <div className="hidden text-xl font-LGCL xl:block">
              @thetherapyplaceuk
            </div>
          </a>
          <a
            className="flex flex-col items-center gap-y-5"
            href="https://uk.linkedin.com/in/nishamistry-ttp/"
          >
            <img
              className="mr-2 h-[100px] w-[100px]"
              src="/linkedin_green.svg"
              alt="linkedin logo"
            />
            <div className="hidden text-xl font-LGCL xl:block">
              linkedin.com/nishamistry-ttp
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ConnectWithUs
