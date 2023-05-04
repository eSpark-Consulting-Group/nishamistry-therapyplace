import { Dialog, Transition } from '@headlessui/react'
import { useRef, useEffect, Fragment, useState } from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { fetchPostJSON } from '../../utils/stripe-helpers'

export default function Cart() {
  const {
    removeItem,
    incrementItem,
    decrementItem,
    cartDetails,
    totalPrice,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart()
  const cartItems = Object.values(cartDetails) || []
  let [isOpen, setIsOpen] = useState(true)
  let [loading, setLoading] = useState(false)
  const [cartEmpty, setCartEmpty] = useState(true)
  const checkoutButtonRef = useRef()

  useEffect(() => setCartEmpty(!cartCount), [cartCount])

  const handleCheckout = async (event) => {
    event.preventDefault()
    setLoading(true)

    const response = await fetchPostJSON('/api/checkout/cart', cartDetails)

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    redirectToCheckout(response.id)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed p-4 rounded-full bottom-6 right-6 bg-navy text-snow hover:bg-navy/60">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center justify-center"
        >
          <span className="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 -m-1 text-xs leading-none rounded-full bg-chocolate font-LGCB text-snow">
            {cartCount}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-snow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          initialFocus={checkoutButtonRef}
          as="div"
          className="fixed inset-0 z-50 overflow-hidden"
          onClose={closeModal}
        >
          <Transition.Child
            enter="transition-opacity ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <div className="fixed inset-0 bg-navy/30" aria-hidden="true" />
          </Transition.Child>

          <Transition.Child
            enter="transform ease-in-out transition-transform duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform ease-in-out transition-transform duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            as={Fragment}
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 flex w-full max-w-[34rem] flex-col bg-snow font-LGC">
              <div className="flex items-center justify-between p-4 shadow-md">
                <Dialog.Title as="h3" className="text-3xl font-LGCB text-navy">
                  Cart Summary
                </Dialog.Title>
                <button
                  onClick={() => closeModal()}
                  className="p-1 rounded-full focus: ring-offset-2 focus:outline-none focus:ring-2 focus:ring-navy"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <form
                onSubmit={handleCheckout}
                className="flex flex-col flex-1 bg-mint"
              >
                <div className="relative flex-1">
                  <div className="absolute inset-0 overflow-y-scroll bg-snow">
                    {Object.values(cartDetails).map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="flex flex-col divide-y divide-double divide-navy"
                        >
                          <div className="flex items-center p-4 bg-snow text-navy">
                            <div className="flex items-center flex-1 space-x-5">
                              <div className="flex items-center justify-between w-24 text-navy">
                                <button
                                  type="button"
                                  onClick={() => decrementItem(item.id)}
                                  className="p-1 rounded-full focus: ring-offset-2 focus:outline-none focus:ring-2 focus:ring-army"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 h-3 text-navy"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M20 12H4"
                                    />
                                  </svg>
                                </button>
                                <div>{item.quantity}</div>
                                <button
                                  type="button"
                                  onClick={() => incrementItem(item.id)}
                                  className="p-1 rounded-full focus: ring-offset-2 focus:outline-none focus:ring-2 focus:ring-army"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 h-3 text-navy"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 4v16m8-8H4"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <div className="flex items-center justify-start text-navy">
                                <div className="self-start leading-tight font-LGCB">
                                  {item.name} -{' '}
                                  {formatCurrencyString({
                                    value: item.value,
                                    currency: 'GBP',
                                  })}
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="p-1 rounded-full focus: ring-offset-2 focus:outline-none focus:ring-2 focus:ring-army"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-navy"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="px-4 py-6 bg-snow">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      className="w-24 h-24"
                      src="/ttp-square-logo.svg"
                      alt="our logo"
                    />
                  </div>
                  <div className="text-xl font-semibold text-center">
                    Subtotal
                  </div>
                  <div className="text-xl font-semibold text-center">
                    {formatCurrencyString({
                      value: totalPrice,
                      currency: 'GBP',
                    })}{' '}
                    (Incl. VAT)
                  </div>
                  <div className="mx-auto mt-4 flex w-[85%] flex-col space-y-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="p-3 uppercase bg-navy text-snow hover:bg-navy/80 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                    >
                      Add More Sessions
                    </button>
                    <button
                      className="p-3 uppercase bg-navy text-snow hover:bg-navy/80 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                      ref={checkoutButtonRef}
                      disabled={cartEmpty || loading}
                      type="submit"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
