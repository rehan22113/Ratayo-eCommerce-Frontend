import 'flowbite'
import React,{Fragment} from 'react'
import { Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { useDispatch } from 'react-redux'
import {trigger} from '../Service/Slice/Mobilemenu'
const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'New Arrival',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Sales',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Store', href: '/shop' },
    { name: 'Why Us', href: '#' },


  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({color}) => {
  const dispatch = useDispatch();

  return (
    <>
    {/* Navigation */}
    <header className="relative z-50">
          <nav aria-label="Top">
            {/* Top navigation */}
            <div className="bg-skin-primary">
              <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
                {/* Currency selector */}
                <form>
                  <div>
                    <label htmlFor="desktop-currency" className="sr-only">
                      Currency
                    </label>
                    <div className="-ml-2 group relative bg-skin-primary border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                      <select
                        id="desktop-currency"
                        name="currency"
                        className="bg-none bg-skin-primary border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
                      >
                        {currencies.map((currency) => (
                          <option key={currency}>{currency}</option>
                        ))}
                      </select>
                      <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 text-gray-300"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M6 8l4 4 4-4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="flex items-center space-x-6">
                  <Link to="/login" className="text-sm font-medium text-white hover:text-gray-100">
                    Sign in
                  </Link>
                  <Link to="/register" className="text-sm font-medium text-white hover:text-gray-100">
                    Create an account
                  </Link>
                </div>
              </div>
            </div>

            {/* Secondary navigation */}
            <div>           
            <div className='backdrop-blur-md backdrop-filter bg-opacity-40 bg-white'>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="h-16 flex items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex-1 lg:flex lg:items-center">
                      <Link to="/">
                        <span className="sr-only">Ratayo</span>
                        <img
                          className="h-12 w-auto"
                          src={Logo}
                          alt="Ratayo_logo"
                        />
                      </Link>
                    </div>

                    <div className="hidden h-full lg:flex">
                      {/* Flyout menus */}
                      <Popover.Group className="px-4 bottom-0 inset-x-0">
                        <div className="h-full flex justify-center space-x-8">
                          {navigation.categories.map((category) => (
                            <Popover key={category.name} className="flex">
                              {({ open }) => (
                                <>
                                  <div className="relative flex">
                                    <Popover.Button className="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white">
                                      {category.name}
                                      <span
                                        className={classNames(
                                          open ? 'bg-white' : '',
                                          'absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Popover.Button>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                      <div className="relative bg-white">
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                          <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                            {category.featured.map((item) => (
                                              <div key={item.name} className="group relative">
                                                <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-center object-cover"
                                                  />
                                                </div>
                                                <Link to={item.href} className="mt-4 block font-medium text-skin-primary">
                                                  <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                  {item.name}
                                                </Link>
                                                <p aria-hidden="true" className="mt-1">
                                                  Shop now
                                                </p>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          ))}
            <Popover className="flex">
            {({ open }) => (
              <>
                <div className="relative flex">
                  <Popover.Button className="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white">
                    Categories
                    <span
                      className={classNames(
                        open ? 'bg-white' : '',
                        'absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute z-[90] top-full inset-x-0 text-sm text-gray-500">
                    
                    {/*Mega Menu*/}
                    <div id="mega-menu-full-image-dropdown" className="mt-1 bg-black shadow-lg absolute w-full">
                <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                  <ul className="mb-8 pb-6 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
                  
                    <li>
                      <Link to="#" className="hover:underline font-bold text-white">
                      Home Appliances
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Household Appliances
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Personal Care Appliances
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Commercial Appliances
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline text-skin-secondary hover:text-white">
                      Explore More ⚡
                      </Link>
                    </li>
                  </ul>
                  <ul className="mb-8 pb-6 space-y-4 md:mb-0">
                    <li>
                      <Link to="#" className="hover:underline font-bold text-white hover:text-white">
                      Gift Baskets
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Christmas Gift Basket
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Cosmetic Gift Basket
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                        Thanks you gift Basket
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline text-skin-secondary hover:text-white">
                      Explore More ⚡
                      </Link>
                    </li>
                    
                  </ul>
                  <ul className="mb-8 pb-6 space-y-4 md:mb-0">
                    <li>
                      <Link to="#" className="hover:underline font-bold text-white hover:text-white">
                      Appareal Accessories
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Women's Hair Accessories
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Women's Belts
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Women's Hats
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Women's Scarves
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline text-skin-secondary hover:text-white">
                      Explore More ⚡
                      </Link>
                    </li>
                    
                    
                  </ul>

                  <ul className="mb-8 pb-6 space-y-4 md:mb-0">
                    <li>
                      <Link to="#" className="hover:underline font-bold text-white hover:text-white">
                      Mens Clothing
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Mens Set
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Pants
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Sweaters
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Shirts
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline text-skin-secondary hover:text-white">
                      Explore More ⚡
                      </Link>
                    </li>
                    
                    
                  </ul>
                  <ul className="mb-8 pb-6 space-y-4 md:mb-0">
                    <li>
                      <Link to="#" className="hover:underline font-bold text-white hover:text-white">
                      Mens Clothing
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Mens Set
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Pants
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Sweaters
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Shirts
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline text-skin-secondary hover:text-white">
                      Explore More ⚡
                      </Link>
                    </li>
                    
                    
                  </ul>
                  <ul className="mb-8 space-y-4 md:mb-0">
                    <li>
                      <Link to="#" className="hover:underline font-bold text-white hover:text-white">
                      Mens Clothing
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Mens Set
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Pants
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Sweaters
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline hover:text-white">
                      Shirts
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline text-skin-secondary hover:text-white">
                      Explore More ⚡
                      </Link>
                    </li>
                    
                    
                  </ul>
                  
                </div>
              </div>

              {/* Mega Menu end  */}
                  </Popover.Panel>
                </Transition>
              </>
            )}
            </Popover>

                          {navigation.pages.map((page) => (
                            <Link
                              key={page.name}
                              to={page.href}
                              className="flex items-center text-sm font-medium text-white"
                            >
                              {page.name}
                            </Link>
                          ))}
                        


                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex-1 flex items-center lg:hidden">
                    <button type="button" className="-ml-2 p-2 text-white" onClick={() => dispatch(trigger(true))}>
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Search */}
                      <Link to="#" className="ml-2 p-2 text-white">
                        <span className="sr-only">Search</span>
                        <SearchIcon className="w-6 h-6" aria-hidden="true" />
                      </Link>
                    </div>

                    {/* Logo (lg-) */}
                    <Link to="/" className="lg:hidden">
                      <span className="sr-only">Ratayo</span>
                      <img
                        src={Logo}
                        alt="Mobile_logo"
                        className="h-8 w-auto"
                      />
                    </Link>

                    <div className="flex-1 flex items-center justify-end">
                      <Link to="#" className="hidden text-sm font-medium text-white lg:block">
                        Search
                      </Link>

                      <div className="flex items-center lg:ml-8">
                        {/* Help */}
                        <Link to="#" className="p-2 text-white lg:hidden">
                          <span className="sr-only">Help</span>
                          <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true" />
                        </Link>
                        <Link to="#" className="hidden text-sm font-medium text-white lg:block">
                          Help
                        </Link>

                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-8">
                          <Link to="#" className="group -m-2 p-2 flex items-center">
                            <ShoppingBagIcon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                            <span className="ml-2 text-sm font-medium text-white">0</span>
                            <span className="sr-only">items in cart, view bag</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
              

          </nav>

        </header>
    </>
  )
}

export default Navbar