import React from 'react'
import { Charts } from './Chart'
import { SaleChart } from './SaleChart'
const Main = () => {
  return (
    <>
        <div className='flex flex-wrap space-x-4'>
        <div className='w-1/2'>
               <div className='flex drop-shadow-lg justify-between items-center py-4 px-10 bg-gray-50 border'>
                <div>
                  <h1 className='text-md font-bold dark:text-slate-100 text-black leading-loose border-b dark:border-slate-100'>Page Views</h1>
                  <p className='text-center leading-loose'>3</p>
                </div>
                <div>
                  <h1 className='text-md font-bold dark:text-slate-100 text-black leading-loose border-b dark:border-slate-100'>Order</h1>
                  <p className='text-center leading-loose'>3</p>
                </div>
                <div>
                  <h1 className='text-md font-bold dark:text-slate-100 text-black leading-loose border-b dark:border-slate-100'>Sales</h1>
                  <p className='text-center leading-loose'>3</p>
                </div>
                <div>
                  <h1 className='text-md font-bold dark:text-slate-100 text-black leading-loose border-b dark:border-slate-100'>Earning</h1>
                  <p className='text-center leading-loose'>3</p>
                </div>
               </div>
               {/* order section */}
               <div className=" mt-5 drop-shadow-lg items-center py-4 px-10 bg-gray-50 border">
                <div className='flex items-center space-x-2 border-b'> 
               <svg xmlns="http://www.w3.org/2000/svg" className='h-4' viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" /></svg>
                <span className='font-extrabold'>Orders</span>
                </div>
                <div className='flex justify-center items-center space-x-4'>
                    <div className='w-1/2'>
                      <ul className='w-full'>
                        <li className='text-red-600 flex justify-between'><span>Total</span><span>3</span></li>
                        <li className='text-green-500 flex justify-between'><span>Complete</span> <span>3</span></li>
                        <li className='text-gray-400 flex justify-between'><span>Pending</span><span>3</span></li>
                        <li className='text-blue-500 flex justify-between'><span>Processing</span> <span>3</span></li>
                        <li className='text-red-800 flex justify-between'><span>Cancelled</span> <span>3</span></li>
                        <li className='text-yellow-200 flex justify-between'><span>Refunded</span> <span>3</span></li>
                        <li className='text-yellow-400 flex justify-between'><span>On hold</span> <span>3</span></li>

                      </ul>
                    </div>
                    <div >
                      <Charts />
                    </div>
                </div>
               </div>
               <div className='mt-5 drop-shadow-lg items-center py-4 px-10 bg-gray-50 border'>
               <div className='flex items-center space-x-2 border-b'> 
               <svg xmlns="http://www.w3.org/2000/svg" className='h-4' viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>

                <span className='font-extrabold'>Reviews</span>
                </div>
                      <ul className='w-full'>
                        <li className='text-red-600 flex justify-between'><span>All</span><span>3</span></li>
                        <li className='text-green-500 flex justify-between'><span>Pending</span> <span>3</span></li>
                        <li className='text-gray-400 flex justify-between'><span>Spam</span><span>3</span></li>
                        <li className='text-blue-500 flex justify-between'><span>Trash</span> <span>3</span></li>
                        

                      </ul>
                    
                    
                </div>
                {/* product section */}
                <div className='mt-5 drop-shadow-lg items-center py-4 px-10 bg-gray-50 border'>
               <div className='flex items-center space-x-2 border-b justify-between'> 
                <div className='flex items-center space-x-2'>
               <svg xmlns="http://www.w3.org/2000/svg" className='h-4' viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>
                <span className='font-extrabold'>Products</span>
                </div>
                <span className='font-extrabold'>+ Add New Products</span>
                </div>
                      <ul className='w-full'>
                        <li className='text-red-600 flex justify-between'><span>Total</span><span>3</span></li>
                        <li className='text-green-500 flex justify-between'><span>Live</span> <span>3</span></li>
                        <li className='text-gray-400 flex justify-between'><span>offline</span><span>3</span></li>
                        <li className='text-blue-500 flex justify-between'><span>Pending Review</span> <span>3</span></li>
                        

                      </ul>
                    
                    
                </div>
        </div>

        {/* sales and announcement section */}
        <div className='md:w-[48%] w-full'>
        <div className='drop-shadow-lg items-center py-4 px-10 bg-gray-50 border'>
        <div className='flex items-center space-x-2 border-b'> 
        <svg xmlns="http://www.w3.org/2000/svg" className='h-4' viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" /></svg>


                <span className='font-extrabold'>sales</span>
                </div>
           <SaleChart />     
               </div>
               <div className='mt-5 drop-shadow-lg items-center py-4 px-10 bg-gray-50 border'>
               <div className='flex items-center space-x-2 border-b justify-between'> 
                <div className='flex items-center space-x-2'>
               <svg xmlns="http://www.w3.org/2000/svg" className='h-4' viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>
                <span className='font-extrabold'>Latest Announcement</span>
                </div>
                <span className='font-extrabold cursor-pointer'>See All</span>
                </div>
                      <div className='flex items-center justify-center h-60'>
                      <svg xmlns="http://www.w3.org/2000/svg" className='h-40' fill='gray' viewBox="0 0 448 512">{/*! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
                      {/* <p>No Yet</p> */}
                      </div>
                    
                    
                </div>
                <div className='bg-gray-50 h-28 mt-5 drop-shadow flex items-center justify-center'>
                    <h1 className='text-2xl font-bold text-gray-400'>Advetise Your Brand Here</h1>
                </div>
        </div>
    </div>
    </>
  )
}

export default Main