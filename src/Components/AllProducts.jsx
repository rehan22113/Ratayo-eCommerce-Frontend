import React,{Fragment, useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetProductsQuery } from '../Service/Api/productQuery'

const AllProducts = () => {
  const {data,isLoading,isFetching,error} = useGetProductsQuery();
  console.log(data,isFetching)
  const [products,setProducts] = useState([])
  const Navigate = useNavigate()

  return (
    <>
        
    <div className='mx-8 grid grid-cols-1 gap-8 mt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {isLoading && <h1 className="text-center w-full">Loading...</h1> }
    {data?.map((prod,index)=>{
        return <Fragment key={index}>
        
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img onClick={()=>Navigate(`/single-product/?product_ID=${prod._id}`)} className="object-cover cursor-pointer w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="T-Shirt" />
            <h4 className="mt-2 text-lg font-medium text-gray-700">{prod.title}</h4>
            <p className="text-gray-800">${prod.price}</p>
            <button onClick={()=>Navigate("/cart")} className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-skin-secondary rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="mx-1">Add to cart</span>
            </button>
          </div>
          </Fragment>
        
    })}

    </div>
    </>
  )
}

export default AllProducts