import React from 'react'
import Footer from '../Layouts/Footer'
import MobileNavbar from '../Layouts/MobileNavbar'
import Navbar from '../Layouts/Navbar'
import { Link } from 'react-router-dom'
import Products from '../Components/Products'
import MainImage from '../assets/main.jpg'
// import Typewriter from 'typewriter-effect'
import OfferSlider from '../Components/OfferSlider'
// import FullScreenSearch from '../Components/FullScreenSearch'
import {categories,collections} from '../assets/CatDummyData'
import TopSellerSlider from '../Components/TopSellerSlider'
import SponsorProducts from '../Components/SponsorProducts'


export default function Home() {

  return (
    <div className="bg-white">
      <MobileNavbar />

      {/* Hero section */}
      <div className="relative bg-skin-primary">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {/* "https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg" */}
          <img
            src={MainImage}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-skin-primary opacity-50" />
        <Navbar/>
        {/* <FullScreenSearch /> */}


        <div className="relative z-0 lg:space-x-4 container mx-auto py-10 px-1 flex items-center text-center lg:px-0">
        <div className='bg-slate-100 p-3 w-1/4 '> 
          <div>
          <h2 className='text-md font-semibold leading-relaxed'>Our Sponsor Products</h2>
          </div>
          <SponsorProducts />
        </div>
        <div className='w-3/4 lg:space-y-2'>
          <div className='lg:h-96 '>
            <OfferSlider />
          </div>
          <div className=' h-auto backdrop-blur-sm w-full'>
    <h1 className="text-left leading-relaxed font-bold text-2xl drop-shadow-lg shadow-white font-serif text-red-700">Our Top Seller</h1>
            <TopSellerSlider />
          </div>
        </div>
        
          
        </div>
      </div>

      <main>
        {/* Category section */}
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8">
          <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-skin-primary">
              Shop by Category
            </h2>
            <a href="#" className="hidden text-sm font-semibold text-skin-secondary hover:text-skin-secondaryLight sm:block">
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img src={category.imageSrc} alt="" className="w-full h-full object-center object-cover" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-skin-primary opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-skin-secondary hover:text-skin-secondaryLight">
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

        {/*Products section */}
        <Products category={"New Arrivals"}/>
        <Products category={"Best Sales"}/>
        <Products category={"Season collection"}/>



        {/* Featured section */}
        <section
          aria-labelledby="social-impact-heading"
          className="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8"
        >
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="relative bg-skin-primary bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                <h2
                  id="social-impact-heading"
                  className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                >
                  <span className="block sm:inline">Level up</span>
                  <span className="block sm:inline">your desk</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  Make your desk beautiful and organized. Post a picture to social media and watch it get more likes
                  than life-changing announcements. Reflect on the shallow nature of existence. At least you have a
                  really nice desk setup.
                </p>
                <Link
                  to="/shop?query=workspace"
                  className="mt-8 w-full block bg-skin-secondary border border-transparent rounded-md py-3 px-8 text-base font-medium text-skin-primary hover:bg-gray-100 sm:w-auto"
                >
                  Shop Workspace
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Collection section */}
        <section
          aria-labelledby="collection-heading"
          className="max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <h2 id="collection-heading" className="text-2xl font-extrabold tracking-tight text-skin-primary">
            Shop by Collection
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
          </p>

          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {collections.map((collection) => (
              <a key={collection.name} href={collection.href} className="group block">
                <div
                  aria-hidden="true"
                  className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-skin-primary">{collection.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby="comfort-heading" className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="relative bg-skin-primary bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                <h2 id="comfort-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Simple productivity
                </h2>
                <p className="mt-3 text-xl text-white">
                  Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best
                  here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the
                  undeniable urge to fill empty circles.
                </p>
                <a
                  href="#"
                  className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-skin-primary hover:bg-gray-100 sm:w-auto"
                >
                  Shop Focus
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

     <Footer />
    </div>
  )
}
