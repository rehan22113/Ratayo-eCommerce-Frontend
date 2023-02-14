import React,{useState,Fragment,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog,Transition } from '@headlessui/react'
import { useDeleteProductMutation } from '../../../Service/Api/productQuery'

const DeleteProductBox = ({id}) => {
  // const [DeleteProduct,{}] = useDeleteProductMutation()
  const [isOpen, setIsOpen] = useState(false)

  const Navigate = useNavigate()

  async function closeModal() {
    const res= await DeleteProduct(id)
    console.log(res)
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  useEffect(()=>{
    setIsOpen(status)
  },[])
  return (
    <>
      

     
    </>
  )
}

export default DeleteProductBox