import ConnectWithUs from '../components/contactUsPage/ConnectWithUs'
import ContactForm from '../components/contactUsPage/ContactForm'
import Head from 'next/head'

const Contact = () => {
  return (
    <div className="font-LGC">
      <Head>
        <title>The Therapy Place Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ConnectWithUs />
      <ContactForm />
    </div>
  )
}

export default Contact
