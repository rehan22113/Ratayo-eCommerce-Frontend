import React,{Fragment, useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetProductsQuery } from '../Service/Api/productQuery'
import { usePostCartMutation } from '../Service/Api/CartQuery'
import {PlusSmIcon} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartDialogBox from './CartDialogBox'

const AllProducts = () => {
  const [showDialog,setShowDialog]= useState(false)
  const {data,isLoading,isFetching,error} = useGetProductsQuery();
  const userId = useSelector((state)=>state.isLogin.userID)
  const [AddToCarty,{}] = usePostCartMutation()
 
  const Navigate = useNavigate()

  const AddToCart=async(e,index)=>{
    e.preventDefault()
    const cartData={
        variant:data[index].variants[0]._id,
        variantOption:data[index].variants[0].options[0]._id,
        listing:data[index]._id,
        qty:1
      }

    let carts = JSON.parse(window.localStorage.getItem("cart"))
        // console.log("first time",carts)
    if(userId==""){
     if(!carts){
      window.localStorage.setItem("cart",JSON.stringify([cartData]))
    }
    else{
      let found=false
      for (let i = 0; i < carts.length; i++) {
       if(carts[i].listing==cartData.listing && carts[i].variant == cartData.variant && carts[i].variantOption == cartData.variantOption){
         carts[i].qty=carts[i].qty+cartData.qty
         found=true
         break;
        }    
      }
      if(!found){
        carts.push(cartData)
      }
      
       window.localStorage.setItem("cart",JSON.stringify(carts))
      }
      setShowDialog(true)
    }else{
        //Login user Cart
        const res =await AddToCarty(cartData)
        console.log("Add to cart from All Product file",res)
        setShowDialog(true)
        

    }
    
  }

  return (
    <>
       {showDialog && <CartDialogBox message="Product Added To Cart" status={true}/>} 
    <div className='mx-8 grid grid-cols-1 gap-8 mt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {isLoading && <h1 className="text-center w-full">Loading...</h1> }
    {data?.map((prod,index)=>{
        return <Fragment key={index}>
        
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img onClick={()=>Navigate(`/single-product/?product_ID=${prod._id}`)} className="object-cover cursor-pointer w-full rounded-md h-72 xl:h-80" src={`${import.meta.env.VITE_APP_URL}/images/listings/${prod.images[0]}`} alt="T-Shirt" />
            <h4 className="mt-2 text-lg font-medium text-gray-700">{prod.title}</h4>
            {prod.variants?(<p className="text-gray-800">
            ${prod.variants?(prod.variants[0]?.options[0].price):(prod.price)}
            </p>):(
              <p className="text-gray-800">
                {prod.price}
              </p>
            )}
            
            {prod.variants && prod.variants[0]?.options.length <=1 ?(
            <button onClick={(e)=>AddToCart(e,index)} className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-skin-secondary rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="mx-1">Add to cart</span>
            </button>
            ):(
            <Link to={`/single-product/?product_ID=${prod._id}`} className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-skin-secondary rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            <PlusSmIcon
                  className="block h-6 w-6 text-gray-100 group-hover:text-gray-500 cursor-pointer"
                  aria-hidden="true"
                  />
              <span className="mx-1">Select Variant</span>
            </Link>
          )}
          </div>
          </Fragment>
        
    })}

    </div>
    </>
  )
}

export default AllProducts