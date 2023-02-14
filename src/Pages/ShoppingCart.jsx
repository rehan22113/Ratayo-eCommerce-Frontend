import { Fragment, useState,useEffect } from 'react'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XIcon as XIconSolid } from '@heroicons/react/solid'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetCartMutation, usePostCartMutation } from '../Service/Api/CartQuery'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    inStock: true,
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    color: 'White',
    inStock: true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
]
const relatedProducts = [
  {
    id: 1,
    name: 'Billfold Wallet',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
    imageAlt: 'Front of Billfold Wallet in natural leather.',
    price: '$118',
    color: 'Natural',
  },
  // More products...
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ShoppingCart() {
  const userId = useSelector((state)=>state.isLogin.userID)
  const [AddToCart,{}]= usePostCartMutation()
  const [cartAllItem,{}]= useGetCartMutation()
  const [open, setOpen] = useState(false)
  const [cartData,setcartData] = useState([])
  const [product,setProduct] = useState([])
  const [totalPrice,setTotalPrice] = useState(0);
  const [shippingPrice,setShippingPrice] = useState(0)

  async function HandleCart(items){
    const res= await AddToCart(items)
    console.log(res)
  }

  useEffect(() => {
     window.scroll(0,0)
     if(userId==""){
       let cartItems= JSON.parse(window.localStorage.getItem("cart"))
      console.log("cartitem",cartItems)
      const fetchProduct=async()=>{
        let allData = []
        for(let element of cartItems) {
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
      if(cartItems){
        fetchProduct()
        setcartData(cartItems)
      }
     }else{
      //login user 
      let cartItems= JSON.parse(window.localStorage.getItem("cart"))
      console.log(cartItems)
      if(cartItems && cartItems.length>0){
        cartItems.forEach((item)=>{
          HandleCart(item)
        })
        window.localStorage.removeItem("cart")
      }
      //Updating cartData by online cart item
      OnlineCartData()
    }
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
  },[]);
  const Calculate=()=>{
    let price=0
    let shipping=0
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
    console.log("filter",price)
    setTotalPrice(price)
    setShippingPrice(shipping)
    
  }

  useEffect(()=>{
    Calculate()
  },[product])
  const filterVariantOption=(variant,pid,name)=>{
    const optfilter = cartData.filter((e)=>{
        return e.listing === pid
    }) 
    const price=variant.options.filter((e)=>{
      return (e._id===optfilter[0].variantOption)      
    })
    if(name=="name"){
      return price[0].name
    }else if(name=="price"){
      return price[0].price
    }else if(name=="qty"){
      const qty = cartData.filter((e)=>{
        return e.listing===pid       
      })
      console.log("dsdasd",qty[0].qty)
      return qty[0].qty
    }else if(name=="ship"){
      return price[0].deliveryFee
    }
  }
  


  return (
    <div className="bg-white">
      {/* Mobile menu */}
      
      <div className="relative bg-gray-700">
      <Navbar color="bg-grey-900" />
      </div>
      <main className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-skin-primary sm:text-4xl">Shopping Cart</h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cartData ? product.map((product, productIdx) => (
                <li key={productIdx} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={`${import.meta.env.VITE_APP_URL}/images/listings/${product?.images[0]}`}
                      alt={product.title}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                              {product.title}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">Variant : {filterVariantOption(product.variants[0],product._id,"name")}</p>
                          {/* second variant  */}
                          {/* {product.size ? (
                            <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">{23}</p>
                          ) : null} */}
                        </div>
                        <p className="mt-1 text-sm font-medium text-skin-primary">$ {filterVariantOption(product.variants[0],product._id,"price")}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                      <div className='flex flex-col'>

                        <label htmlFor={`quantity-${productIdx}`} className="">
                          Quantity, {filterVariantOption(product.variants[0],product._id,"qty")}
                        </label>
                        <label htmlFor={`quantity-${productIdx}`} className="">
                          Shipping Fee: $ {filterVariantOption(product.variants[0],product._id,"ship")}
                        </label>
                      </div>
                        
                        {/* <select
                          id={`quantity-${productIdx}`}
                          name={`quantity-${productIdx}`}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                        >
                          <option value={1}></option>
                          
                        </select> */}

                        <div className="absolute top-0 right-0">
                          <button type="button" className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            <XIconSolid className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                      {product.inStock ? (
                        <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      ) : (
                        <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                      )}

                      <span>{product.inStock ? 'In stock' : `Shipping Courier Service : ${product.delivery.services}`}</span>
                    </p>
                  </div>
                </li>
              )):<><h1 className='text-2xl '>No Items in your Cart</h1></>}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-skin-primary">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-skin-primary">${totalPrice}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-skin-primary">${shippingPrice}</dd>
              </div>
              {/* <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how tax is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-skin-primary">$8.32</dd>
              </div> */}
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="text-base font-medium text-skin-primary">Order total</dt>
                <dd className="text-base font-medium text-skin-primary">${shippingPrice+totalPrice}</dd>
              </div>
            </dl>

            <div className="mt-6">
            <Link
                to="/checkout"
            >

              <button
               
                className="w-full bg-skin-secondary border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-skin-secondaryDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-skin-secondaryLight"
              >
                Checkout
              </button>
            </Link>
            </div>
          </section>
        </form>

        {/* Related products */}
        <section aria-labelledby="related-heading" className="mt-24">
          <h2 id="related-heading" className="text-lg font-medium text-skin-primary">
            You may also like&hellip;
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={relatedProduct.imageSrc}
                    alt={relatedProduct.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={relatedProduct.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{relatedProduct.color}</p>
                  </div>
                  <p className="text-sm font-medium text-skin-primary">{relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
