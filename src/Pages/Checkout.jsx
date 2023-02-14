import { Fragment, useState,useEffect } from 'react'
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/solid'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import { useSelector } from 'react-redux'
import CardSection from '../Components/CardSection'
import PaymentPage from './PaymentPage'
import { useGetCartMutation } from '../Service/Api/CartQuery'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'


const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  
  // More products...
]
// const deliveryMethods = [
//   { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
//   { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
// ]
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Checkout() {
  const [open, setOpen] = useState(false)
  const userId = useSelector((state)=>state.isLogin.userID)
  const [cartData,setcartData] = useState([])
  const [product,setProduct] = useState([])
  const [totalPrice,setTotalPrice] = useState(0);
  const [shippingPrice,setShippingPrice] = useState(0)
  const [cartAllItem] = useGetCartMutation()

  async function OnlineCartData(){
    const GetCartData = await cartAllItem();
    const fetchProduct=async()=>{
      let allData = []
      console.log(GetCartData)
      for(let element of GetCartData.data) {
        const res =await fetch(`${import.meta.env.VITE_APP_URL}/listing?listingId=${element.listing}`,{
          method:"GET",
          credentials:"include"
        })
        const data = await res.json()
        allData.push(data[0])
        
      }
      setProduct(allData)
      console.log(product)
    }
    if(GetCartData.data){
      fetchProduct()
      setcartData(GetCartData.data)
    }
    
  }
  useEffect(()=>{
    OnlineCartData()
  },[userId])

  useEffect(() => {
    window.scroll(0,0)
    if(!userId){
      let cartItems= JSON.parse(window.localStorage.getItem("cart"))
     console.log("cartitem",cartItems)
     const fetchProduct=async()=>{
       let allData = []
       if(cartItems){
         for(let element of cartItems) {
           const res =await fetch(`${import.meta.env.VITE_APP_URL}/listing?listingId=${element.listing}`,{
           method:"GET",
           credentials:"include"
          })
          const data = await res.json()
          allData.push(data[0])
          
        }
      }
       setProduct(allData)
       console.log(product)
     }
     fetchProduct()
       setcartData(cartItems)
    }else{
     //login user logic here
     console.log("hello")
     OnlineCartData()
  
    }
 },[]);

 const Calculate=()=>{
   let price=0
   let shipping=0
   if(cartData){

     cartData.map((c)=>{
     const fp=product.filter((p)=>{
         return p._id===c.listing
        })
        const opt=fp[0].variants[0].options.filter((v)=>{
          return v._id==c.variantOption
        })
        price=price+(opt[0].price*c.qty)
     shipping=shipping+(opt[0].deliveryFee*c.qty)
    }) 
  }
   console.log("filter",price)
   setTotalPrice(price)
   setShippingPrice(shipping)
   
 }

 useEffect(()=>{
   Calculate()
 },[product])


  return (
    <div className="bg-gray-50">
      <ToastContainer 
        position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
      />
      <div className="relative bg-gray-700">
      <Navbar color="bg-grey-900" />
      </div>
      <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
              <div>
                <h2 className="text-lg font-medium text-skin-primary">Contact information</h2>

                <div className="mt-4">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-skin-primary">Shipping information</h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        autoComplete="given-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        autoComplete="family-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="street-address"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                      Apartment, suite, etc.
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="apartment"
                        id="apartment"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <div className="mt-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      >
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>United States</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                      Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="province"
                        id="province"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            

              {/* <div className="mt-10 border-t border-gray-200 pt-10">
                <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                  <RadioGroup.Label className="text-lg font-medium text-skin-primary">Delivery method</RadioGroup.Label>

                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    {deliveryMethods.map((deliveryMethod) => (
                      <RadioGroup.Option
                        key={deliveryMethod.id}
                        value={deliveryMethod}
                        className={({ checked, active }) =>
                          classNames(
                            checked ? 'border-transparent' : 'border-gray-300',
                            active ? 'ring-2 ring-skin-secondaryLight' : '',
                            'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        {({ checked, active }) => (
                          <>
                            <div className="flex-1 flex">
                              <div className="flex flex-col">
                                <RadioGroup.Label as="span" className="block text-sm font-medium text-skin-primary">
                                  {deliveryMethod.title}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className="mt-1 flex items-center text-sm text-gray-500"
                                >
                                  {deliveryMethod.turnaround}
                                </RadioGroup.Description>
                                <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-skin-primary">
                                  {deliveryMethod.price}
                                </RadioGroup.Description>
                              </div>
                            </div>
                            {checked ? (
                              <CheckCircleIcon className="h-5 w-5 text-skin-secondar" aria-hidden="true" />
                            ) : null}
                            <div
                              className={classNames(
                                active ? 'border' : 'border-2',
                                checked ? 'border-skin-secondaryLight' : 'border-transparent',
                                'absolute -inset-px rounded-lg pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div> */}

              {/* Payment */}
              <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-skin-primary">Payment</h2>

                <fieldset className="mt-4">
                  <legend className="sr-only">Payment type</legend>
                  <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                      <div key={paymentMethod.id} className="flex items-center">
                        {paymentMethodIdx === 0 ? (
                          <input
                            id={paymentMethod.id}
                            name="payment-type"
                            type="radio"
                            defaultChecked
                            className="focus:ring-skin-secondaryLight h-4 w-4 text-skin-secondary border-gray-300"
                          />
                        ) : (
                          <input
                            id={paymentMethod.id}
                            name="payment-type"
                            type="radio"
                            className="focus:ring-skin-secondaryLight h-4 w-4 text-skin-secondary border-gray-300"
                          />
                        )}

                        <label htmlFor={paymentMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                          {paymentMethod.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                     <PaymentPage/>    
                  {/* <div className="col-span-4">
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        autoComplete="cc-number"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div> */}

                  {/* <div className="col-span-4">
                    <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                      Name on card
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name-on-card"
                        name="name-on-card"
                        autoComplete="cc-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div> */}

                  {/* <div className="col-span-3">
                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                      Expiration date (MM/YY)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        autoComplete="cc-exp"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div> */}

                  {/* <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        autoComplete="csc"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className="mt-10 lg:mt-0">
              <h2 className="text-lg font-medium text-skin-primary">Order summary</h2>

              <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="sr-only">Items in your cart</h3>
                
                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium text-skin-primary">${totalPrice}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Shipping</dt>
                    <dd className="text-sm font-medium text-skin-primary">${shippingPrice}</dd>
                  </div>
                  {/* <div className="flex items-center justify-between">
                    <dt className="text-sm">Taxes</dt>
                    <dd className="text-sm font-medium text-skin-primary">$5.52</dd>
                  </div> */}
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-skin-primary">${totalPrice+shippingPrice}</dd>
                  </div>
                </dl>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <Link
                    to="/order-detail"
                    className="w-full bg-skin-secondary border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-skin-secondaryDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-skin-secondaryLight"
                  >
                    Confirm order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
