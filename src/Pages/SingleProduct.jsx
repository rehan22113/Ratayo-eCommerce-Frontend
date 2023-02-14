
import { useState,useEffect } from 'react'
import { Disclosure, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
  HeartIcon,
  MinusSmIcon,
  PlusSmIcon,
} from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Navbar from '../Layouts/Navbar'
import Footer from  '../Layouts/Footer'
import { useSearchParams } from 'react-router-dom'
import '../assets/singleProduct.css'
import { useSelector } from 'react-redux'
import {useCart} from '../Hooks/useCart'
import { Dialog } from '@headlessui/react'
import CartDialogBox from '../Components/CartDialogBox'
import { usePostCartMutation } from '../Service/Api/CartQuery'

const product1=[{
  images:[],
  shop: '63cc4a5258d63bb69cc75d79',
  variants: [{_id:"",type:"size",options:[{_id:"",name:"xl",price:"10",qty:"20",deliveryFee:"20"}]}],
  title: 'Tesla',
  madeBy: 'A member of my shop',
  whatIsIt: 'A supply or tool to make thing',
  whenDid: '2003 - 2009',
  category: '6388adae669110e2805ebfe7',
  renewal: 'true',
  type: 'physical',
  description: 'dsds',
  tags: 'ds',
  price: '20',
  qty: '1',
  sku: '',
  originPostCode: 'A1A',
  processingTime: '2',
  country: 'All',
  services: 'TCS',
  deliveryFee: '10',
  weightValue: '1',
  length: '11',
  width: '1',
  height: '1'
  }]
const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}
const relatedProducts = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  // More products...
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SingleProduct() {
  const [AddToCarty,{}] = usePostCartMutation() 
  const [open, setOpen] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [params,setParams] = useSearchParams();
  const [product2,setProducts] = useState(product1)
  const AddCart = useCart()

  const [selectedColor, setSelectedColor] = useState("")
  const userId = useSelector((state)=>state.isLogin.userID)
  const [cartData,setCartData] = useState({
    listing:params.get("product_ID"),
    variant:product2[0].variants[0]._id,
    variantOption:"",
    qty:1
  })


  const GenearateProducts = async()=>{
    const res =await fetch(`${import.meta.env.VITE_APP_URL}/listing?listingId=${params.get("product_ID")}`,{
      method:"GET",
      credentials:"include"
    })
    const data = await res.json()
    setProducts(data)
    console.log(data)
  }
  const HandleSubmit=async(e)=>{
    e.preventDefault()
    let carts = JSON.parse(window.localStorage.getItem("cart"))
        console.log("first time",carts)
    if(userId==""){
     if(!carts){
      window.localStorage.setItem("cart",JSON.stringify([cartData]))
    }
    else{
      let found=false
      for (let i = 0; i < carts.length; i++) {
       if(carts[i].listing==cartData.listing && carts[i].variant == cartData.variant){
         carts[i].qty=carts[i].qty+cartData.qty
         found=true
         break;
        }
        
      }
      if(!found){
        carts.push(cartData)
      }
       console.log("after push",carts)
       window.localStorage.setItem("cart",JSON.stringify(carts))
      }
      setShowDialog(true)
    }else{
      const res =await AddToCarty(cartData)
      console.log("Add to cart from All Product file",res)
      setShowDialog(true)
    }
    
  }
  

useEffect(() => {
    GenearateProducts();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">

    <div className="relative bg-gray-700">
      <Navbar color="bg-grey-900" />
      </div>


      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product2 && product2[0].images.map((image,index) => (
                    <Tab
                      key={index}
                      className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-skin-primary cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{index}</span>
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={`${import.meta.env.VITE_APP_URL}/images/listings/${image}`} alt="img_product" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-skin-secondaryLight' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                {product2[0].images.map((image,index) => (
                  <Tab.Panel key={index}>
                    <img
                      src={`${import.meta.env.VITE_APP_URL}/images/listings/${image}`}
                      alt={`image ${index}`}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-skin-primary">{product2[0].title}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-skin-primary">$ {product2[0].variants[0].options[0].price}</p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          4 > rating ? 'text-skin-secondaryLight' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">4 out of 5 stars</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{ __html: product2[0].description }}
                />
              </div>

              <form className="mt-6">
                {/* Colors */}
                <div>
                  <h3 className="text-md text-gray-600">Choose a {product2[0].variants[0].type}</h3>
                  <RadioGroup value={cartData.variantOption} onChange={(e)=>{setCartData({...cartData,variant:product2[0].variants[0]._id,variantOption:e})}} className="mt-2">
                    <RadioGroup.Label className="sr-only">Choose a {product2[0].variants[0]?.type}</RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product2[0].variants[0].options && product2[0].variants[0].options.map((variant,index) => (
                        <RadioGroup.Option
                          key={index}
                          value={variant._id}
                          className={({ active, checked }) =>
                            classNames(
                              // color.selectedColor,
                              product2[0].variants[0].type == 'color'? `bg-[${variant?.name}] p-0.5 rounded-full`:'',
                              active && checked ? 'ring ring-offset-1 bg-slate-400' : '',
                              !active && checked ? 'ring-2' : '',
                              '-m-0.5 relative p-2 w-10 rounded-full flex flex-col-reverse items-center justify-center cursor-pointer focus:outline-none'
                            )
                          }
                        >
                        {
                          product2[0].variants[0].type == 'color'?(  
                          null): <RadioGroup.Label as="p" className="">
                            {variant.name}
                          </RadioGroup.Label>
                        }
                          <span
                            aria-hidden="true"
                            className={classNames(
                              // color.bgColor,
                              product2[0].variants[0].type == 'color'? 'h-8 w-8 border border-black border-opacity-10 rounded-full':'',
                              
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                  <div className='py-4 flex items-center space-x-2 '>
                  <PlusSmIcon
                  onClick={()=>{setCartData({...cartData,qty:cartData.qty+1})}}
                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 cursor-pointer"
                  aria-hidden="true"
                  />
                  <input
                        aria-disabled
                        disabled
                        value={cartData.qty}
                        type="number"
                        id="quantity"
                        name="quantity"
                        autoComplete="quantity"
                        className="block w-20 border-gray-300 rounded-md shadow-sm focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                      <MinusSmIcon
                      onClick={()=>{cartData.qty>1?setCartData({...cartData,qty:cartData.qty-1}):null}}
                      className="block h-6 w-6 text-indigo-400 group-hover:text-skin-secondaryLight cursor-pointer"
                      aria-hidden="true"
                                  />
                  </div>
                </div>

                <div className="mt-10 flex sm:flex-col1">
                  <button
                    type="submit"
                    onClick={HandleSubmit}
                    className="max-w-xs flex-1 bg-skin-secondary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-skin-secondaryDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-skin-secondaryLight sm:w-full"
                  >
                    Add to bag
                  </button>
                  {showDialog &&
                   <CartDialogBox message="Product Added To Cart" status={true}/>         
                  }
                  <button
                    type="button"
                    className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                    <span className="sr-only">Add to favorites</span>
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="border-t divide-y divide-gray-200">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                              <span
                                className={classNames(
                                  open ? 'text-skin-secondar' : 'text-skin-primary',
                                  'text-sm font-medium'
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-skin-secondaryLight"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
            <h2 id="related-heading" className="text-xl font-bold text-skin-primary">
              Customers also bought
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product) => (
                <div key={product.id}>
                  <div className="relative">
                    <div className="relative w-full h-72 rounded-lg overflow-hidden">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-skin-primary">{product.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">{product.price}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={product.href}
                      className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-skin-primary hover:bg-gray-200"
                    >
                      Add to bag<span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
