import React from 'react'
import { Link } from 'react-router-dom'

const AllVendorProducts = () => {
  return (
   <>
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <div className="flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
        <div>
        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Action button</span>
            Action
            <svg className="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        {/* Dropdown menu */}
        <div id="dropdownAction" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" style={{position: 'absolute', inset: '0px auto auto 0px', margin: 0, transform: 'translate3d(0px, 56679.5px, 0px)'}} data-popper-reference-hidden data-popper-escaped data-popper-placement="bottom">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">UnPublished</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Published</a>
                </li>
            </ul>           
        </div>
        </div>
        <div>
            <Link to="/dashboard/vendor/addnewproduct" className='border py-2 px-10 bg-gray-50 drop-shadow flex items-center justify-center space-x-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-4' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg><span>Add New Product</span></Link>
        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
        </div>
        <input type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Products" />
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="p-4">
            <div className="flex items-center">
                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
            </div>
            </th>
            <th scope="col" className="py-3 px-6">
            Name
            </th>
            <th scope="col" className="py-3 px-6">
            Status
            </th>
            <th scope="col" className="py-3 px-6">
            Sku
            </th>
            <th scope="col" className="py-3 px-6">
            Stock
            </th>
            <th scope="col" className="py-3 px-6">
            Price
            </th>
            <th scope="col" className="py-3 px-6">
            Earning
            </th>
            <th scope="col" className="py-3 px-6">
            View
            </th>
            <th scope="col" className="py-3 px-6">
            Date
            </th>
        </tr>
        </thead>
        <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
            <div className="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
            </div>
            </td>
            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
            <img className="w-10 h-10 rounded-full" src="https://dummyimage.com/80x80" alt="Jese image" />
            <div className="pl-3 [&_div]:hover:flex">
                <div className=" text-base font-semibold">Tennis Tape Ball</div>
                <div className="group font-normal text-gray-500 hover:flex space-x-2 hidden">
                    <span className='underline cursor-pointer hover:text-blue-600'>Edit</span>
                    <span className='underline cursor-pointer hover:text-blue-600'>Delete</span>
                    <span className='underline cursor-pointer hover:text-blue-600'>View</span>

                </div>
            </div>  
            </th>
            <td className="py-4 px-6">
            <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" /> Online
            </div>
            </td>
            <td className="py-4 px-6">
            s-101
            </td>
            <td className="py-4 px-6">
            In Stock
            </td>
            <td className="py-4 px-6">
            100 $
            </td>
            <td className="py-4 px-6">
            7$
            </td>
            <td className="py-4 px-6">
            42
            </td>
            <td className="py-4 px-6">
            10/10/2022
            </td>
        </tr>

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
            <div className="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
            </div>
            </td>
            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
            <img className="w-10 h-10 rounded-full" src="https://dummyimage.com/80x80" alt="Jese image" />
            <div className="pl-3 [&_div]:hover:flex">
                <div className=" text-base font-semibold">Tennis Tape Ball</div>
                <div className="group font-normal text-gray-500 hover:flex space-x-2 hidden">
                    <span className='underline cursor-pointer hover:text-blue-600'>Edit</span>
                    <span className='underline cursor-pointer hover:text-blue-600'>Delete</span>
                    <span className='underline cursor-pointer hover:text-blue-600'>View</span>

                </div>
            </div>  
            </th>
            <td className="py-4 px-6">
            <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" /> Online
            </div>
            </td>
            <td className="py-4 px-6">
            s-101
            </td>
            <td className="py-4 px-6">
            In Stock
            </td>
            <td className="py-4 px-6">
            100 $
            </td>
            <td className="py-4 px-6">
            7$
            </td>
            <td className="py-4 px-6">
            42
            </td>
            <td className="py-4 px-6">
            10/10/2022
            </td>
        </tr>

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
            <div className="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
            </div>
            </td>
            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
            <img className="w-10 h-10 rounded-full" src="https://dummyimage.com/80x80" alt="Jese image" />
            <div className="pl-3 [&_div]:hover:flex">
                <div className=" text-base font-semibold">Tennis Tape Ball</div>
                <div className="group font-normal text-gray-500 hover:flex space-x-2 hidden">
                    <span className='underline cursor-pointer hover:text-blue-600'>Edit</span>
                    <span className='underline cursor-pointer hover:text-blue-600'>Delete</span>
                    <span className='underline cursor-pointer hover:text-blue-600'>View</span>

                </div>
            </div>  
            </th>
            <td className="py-4 px-6">
            <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" /> Online
            </div>
            </td>
            <td className="py-4 px-6">
            s-101
            </td>
            <td className="py-4 px-6">
            In Stock
            </td>
            <td className="py-4 px-6">
            100 $
            </td>
            <td className="py-4 px-6">
            7$
            </td>
            <td className="py-4 px-6">
            42
            </td>
            <td className="py-4 px-6">
            10/10/2022
            </td>
        </tr>

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
            <div className="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
            </div>
            </td>
            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
            <img className="w-10 h-10 rounded-full" src="https://dummyimage.com/80x80" alt="Jese image" />
            <div className="pl-3 [&_div]:hover:flex">
                <div className=" text-base font-semibold">Tennis Tape Ball</div>
                <div className="group font-normal text-gray-500 hover:flex space-x-2 hidden">
                    <span className='underline cursor-pointer hover:text-blue-600'>Edit</span>
                    <span className='underline cursor-pointer hover:text-blue-600'>Delete</span>
                    <span className='underline cursor-pointer hover:text-blue-600'>View</span>

                </div>
            </div>  
            </th>
            <td className="py-4 px-6">
            <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" /> Online
            </div>
            </td>
            <td className="py-4 px-6">
            s-101
            </td>
            <td className="py-4 px-6">
            In Stock
            </td>
            <td className="py-4 px-6">
            100 $
            </td>
            <td className="py-4 px-6">
            7$
            </td>
            <td className="py-4 px-6">
            42
            </td>
            <td className="py-4 px-6">
            10/10/2022
            </td>
        </tr>
        </tbody>
    </table>
    </div>


   </>
  )
}

export default AllVendorProducts