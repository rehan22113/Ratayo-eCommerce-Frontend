import React,{useState,Fragment,useEffect} from 'react'
import { Dialog,Transition } from '@headlessui/react'
import { isOpen } from '../../../Service/Slice/ProductAction'
import { useDispatch,useSelector } from 'react-redux'

const OrderDetail = () => {
  const dispatch = useDispatch()
  const isOpened = useSelector((state)=>state.productview.value) 
 

  return (
    <>
        <Transition appear show={isOpened} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>{dispatch(isOpen(false))}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Order Detail
                  </Dialog.Title>
                  <div className="mt-2 flex w-full space-x-2">
<div className=' w-2/3'>
                       <div className='p-2 w-full bg-gray-200'>
                        <span>order #02</span>
                       </div>

<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">
          image
        </th>
        <th scope="col" className="py-3 px-6">
          Product
        </th>
        <th scope="col" className="py-3 px-6">
          Qty
        </th>
        <th scope="col" className="py-3 px-6">
          Total
        </th>
        
      </tr>
    </thead>
    <tbody>
      
     
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4 w-20">
          <img src="https://dummyimage.com/100x100" alt="Iphone 12" />
        </td>
        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          Iphone 12 
        </td>
        <td className="py-4 px-6">
          1 
        </td>
        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          $100
        </td>
        
      </tr>
    </tbody>
  </table>
</div>
<div>
{/* total and sub-total part */}
<div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    
        
        <div className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between">
          <span className="p-2 w-32">
            Cart Sub Total
          </span>
          <span className="py-1 border-l px-6 font-semibold text-gray-900 dark:text-white">
            100 $
          </span>
        </div>
        <div className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between">
          <span className="p-2 w-32">
            Shipping
          </span>
          <span className="border-l py-2 px-6 font-semibold text-gray-900 dark:text-white">
            10 $ 
          </span>
        </div>
        <div className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between">
          <span className="p-2 w-32">
            Order total
          </span>
          <span className="border-l py-2 px-6 font-semibold text-gray-900 dark:text-white">
            110 $ 
          </span>
        </div>
        
    </div>
  
</div>
<div className='pt-5 container flex space-x-5 '>
  <div className='w-1/2'>
    <div className='bg-gray-200 p-2'>
      <h2 className='font-bold'>Billing Address</h2>
      <p>complete address of custmer</p>
      <p>city or zip code</p>
      <p>country</p>
    </div>
  </div>
  <div className='w-1/2'>
    <div className='bg-gray-200 p-2'>
      <h2 className='font-bold'>Shipping Address</h2>
      <p>complete address of custmer</p>
      <p>city or zip code</p>
      <p>country</p>
    </div>
  </div>
</div>


                        
                    </div>
  <div className='container w-1/3'>
          <div className='bg-gray-200 p-2'>
            <h2 className='font-bold'>General Details</h2>
          </div>
          <div>
          <div className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between">
          <span className="p-2 w-32">
            Order Status
          </span>
          <span>

          <select id="countries" class="bg-gray-50 border-none border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value="US">On processing</option>
  <option value="CA">on hold</option>
  <option value="FR">Order dispatch</option>
  <option value="DE">Delivered</option>
</select>
          </span>
        </div>
        <div className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between">
          <span className="p-2 w-32">
            Order Date
          </span>
          <span className=" py-2 px-2 font-semibold text-gray-900 dark:text-white">
            2022-2-10 10:15:58
          </span>
        </div>
        <div className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between">
          <span className="p-2 w-32">
            Customer
          </span>
          <span className=" py-2 px-2 font-semibold text-gray-900 dark:text-white">
            vimal ramdin
          </span>
        </div>
        <div className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between">
          <span className="p-2 w-32">
            Email
          </span>
          <span className=" py-2 px-2 font-semibold text-gray-900 dark:text-white">
            vimal@gmail.com
          </span>
        </div>
        <div className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between">
          <span className="p-2 w-32">
            Phone
          </span>
          <span className=" py-2 px-2 font-semibold text-gray-900 dark:text-white">
            +12230022222
          </span>
        </div>
        <div className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between">
          <span className="p-2 w-32">
            Customer ip
          </span>
          <span className=" py-2 px-2 font-semibold text-gray-900 dark:text-white">
            168.144.67.1
          </span>
        </div>
        </div>
        <div className='bg-gray-200 p-2'>
            <h2 className='font-bold'>Order Notes</h2>
          </div>
          <div>
          <div className='py-2'>

          <div>
  <div className="mb-2 ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shipping Provide Name/URL</label>
    <input type="text" id="sName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div> 
  <div className="mb-2">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tracking Number</label>
    <input type="text" id="t-number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div> 
  <div className="mb-2">
    <label htmlFor="date_shipped" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date Shipped</label>
    <input type="date" id="date_shipped" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
</div>
 
          </div>
          

          <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                      Add Tracking Number
           </button>
          </div>
                    </div>
                  </div>

                  <div className="mt-4 space-x-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=>{dispatch(isOpen(false))}}
                    >
                      Update it
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=>{dispatch(isOpen(false))}}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default OrderDetail