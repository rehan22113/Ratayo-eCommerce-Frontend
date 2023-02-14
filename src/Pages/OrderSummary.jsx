import React from 'react'
import { Link } from 'react-router-dom'

const products = [
    {
      id: 1,
      name: 'TShirt For Men',
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      href: '#',
      quantity: 1,
      price: '$32.00',
      imageSrc: 'http://localhost:1000/images/listings/63a33af461213ae97851542c167502498275895574d0b4ed94eb6855a6f3f995c4500.jpg',
      imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
    },
  ]
const Test = () => {
  return (
    <div className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-xl">
            <h1 className="text-sm font-semibold uppercase tracking-wide text-skin-secondar">Thank you!</h1>
            <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">It's on the way!</p>
            <p className="mt-2 text-base text-gray-500">Your order #14034056 has shipped and will be with you soon.</p>
  
            <dl className="mt-12 text-sm font-medium">
              <dt className="text-skin-primary">Tracking number</dt>
              <dd className="text-skin-secondary mt-2">51547878755545848512</dd>
            </dl>
          </div>
  
          <section aria-labelledby="order-heading" className="mt-10 border-t border-gray-200">
            <h2 id="order-heading" className="sr-only">
              Your order
            </h2>
  
            <h3 className="sr-only">Items</h3>
            
              <div key={products[0].id} className="py-10 border-b border-gray-200 flex space-x-6">
                <img
                  src={products[0].imageSrc}
                  alt={products[0].imageAlt}
                  className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
                />
                <div className="flex-auto flex flex-col">
                  <div>
                    <h4 className="font-medium text-skin-primary">
                      <a href={products[0].href}>{products[0].name}</a>
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">{products[0].description}</p>
                  </div>
                  <div className="mt-6 flex-1 flex items-end">
                    <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                      <div className="flex">
                        <dt className="font-medium text-skin-primary">Quantity</dt>
                        <dd className="ml-2 text-gray-700">{products[0].quantity}</dd>
                      </div>
                      <div className="pl-4 flex sm:pl-6">
                        <dt className="font-medium text-skin-primary">Price</dt>
                        <dd className="ml-2 text-gray-700">{products[0].price}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
           
  
            <div className="sm:ml-40 sm:pl-6">
              <h3 className="sr-only">Your information</h3>
  
              <h4 className="sr-only">Addresses</h4>
              <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
                <div>
                  <dt className="font-medium text-skin-primary">Shipping address</dt>
                  <dd className="mt-2 text-gray-700">
                    <address className="not-italic">
                      <span className="block">Kristin Watson</span>
                      <span className="block">7363 Cynthia Pass</span>
                      <span className="block">Toronto, ON N3Y 4H8</span>
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-skin-primary">Billing address</dt>
                  <dd className="mt-2 text-gray-700">
                    <address className="not-italic">
                      <span className="block">Kristin Watson</span>
                      <span className="block">7363 Cynthia Pass</span>
                      <span className="block">Toronto, ON N3Y 4H8</span>
                    </address>
                  </dd>
                </div>
              </dl>
  
              <h4 className="sr-only">Payment</h4>
              <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
                <div>
                  <dt className="font-medium text-skin-primary">Payment method</dt>
                  <dd className="mt-2 text-gray-700">
                    <p>Apple Pay</p>
                    <p>Mastercard</p>
                    <p>
                      <span aria-hidden="true">•••• </span>
                      <span className="sr-only">Ending in </span>1545
                    </p>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-skin-primary">Shipping method</dt>
                  <dd className="mt-2 text-gray-700">
                    <p>DHL</p>
                    <p>Takes up to 3 working days</p>
                  </dd>
                </div>
              </dl>
  
              <h3 className="sr-only">Summary</h3>
  
              <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
                <div className="flex justify-between">
                  <dt className="font-medium text-skin-primary">Subtotal</dt>
                  <dd className="text-gray-700">$36.00</dd>
                </div>
                {/* <div className="flex justify-between">
                  <dt className="flex font-medium text-skin-primary">
                    Discount
                    <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">STUDENT50</span>
                  </dt>
                  <dd className="text-gray-700">-$18.00 (50%)</dd>
                </div> */}
                <div className="flex justify-between">
                  <dt className="font-medium text-skin-primary">Shipping</dt>
                  <dd className="text-gray-700">$5.00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium text-skin-primary">Total</dt>
                  <dd className="text-skin-primary">$41.00</dd>
                </div>
              </dl>
            </div>
          </section>
          <div>
            <Link to="/shop" className='text-red-600 text-center'>Back To Shopping</Link>
          </div>
        </div>
      </div>
  )
}

export default Test