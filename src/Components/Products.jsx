import React,{useState,useEffect, Fragment} from 'react'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
import '../index.css'
import { useGetProductByCategoryQuery, useGetProductsQuery } from '../Service/Api/ProductQuery';

const Products = ({category,id}) => {
  const Navigate = useNavigate()
  const [product,setProduct] = useState([])
  const {data:AllProduct,isFetching,isLoading} = useGetProductsQuery()
  const {data:filterProduct,isFetching:fFetching} = useGetProductByCategoryQuery(id)
  useEffect(() => {
    if(!id){
      setProduct(AllProduct) 
    }
    else if(id){
      setProduct(filterProduct)
    }

       
  }, [isFetching,fFetching]);
  

  return (
    <>
    
{/* component */}
<section className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8">
  <div className="container py-8 mx-auto">
  <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-skin-primary">
              {category}
            </h2>
          </div>
    <div className="lg:flex lg:-mx-2">
      {/* <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
        <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jackets &amp; Coats</a>
        <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Hoodies</a>
        <a href="#" className="block font-medium text-blue-600 dark:text-blue-500 hover:underline">T-shirts &amp; Vests</a>
        <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shirts</a>
        <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Blazers &amp; Suits</a>
        <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jeans</a>
        <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Trousers</a>
        <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shorts</a>
        <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Underwear</a>
      </div> */}
      <div className="mt-6 lg:mt-0 lg:px-2 ">
        <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
          <p className="text-gray-500 dark:text-gray-300">6 Items</p>
          <div className="flex items-center">
            <p className="text-gray-500 dark:text-gray-300">Sort</p>
            <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
              <option value="#">Recommended</option>
              <option value="#">Size</option>
              <option value="#">Price</option>
            </select>
          </div>
        </div>


       
        <div className="">
          <Swiper 
           breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }} 
        slidesPerView={1}
        spaceBetween={30}
        freeMode={false}
        loop={false}
        modules={[Pagination,FreeMode]}    
        className="mySwiper mx-8 grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
    {isLoading && <h1 className="text-center w-full">Loading...</h1> }

      {product && product.map((prod,index)=>{
      return <Fragment key={index}>
        <SwiperSlide>
        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img onClick={()=>Navigate("/single-product")} className="object-cover cursor-pointer w-full rounded-md h-72 xl:h-80" src={`${import.meta.env.VITE_APP_URL}/images/listings/${prod.images[0]}`} alt="T-Shirt" />
            <h4 className="mt-2 text-lg font-medium text-gray-700">{prod.title}</h4>
            <p className="text-gray-800">$12.55</p>
            <button onClick={()=>Navigate("/cart")} className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-skin-secondary rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="mx-1">Add to cart</span>
            </button>
          </div>
          </SwiperSlide>
        </Fragment>
        })}
       
      </Swiper>
          
          
          
          
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Products