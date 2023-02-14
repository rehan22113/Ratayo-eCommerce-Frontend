import React,{useState,useEffect,Fragment} from 'react'
import { useDeleteCategoryMutation, useGetCategoriesQuery, useGetSingleCategoryMutation } from '../../Service/Api/CategoryApi'
import { useEditCategoryMutation } from '../../Service/Api/CategoryApi'
import AddNewCategory from './AddCategories'

const Categories = ()=>{
 
    const {data:fetchCategories} = useGetCategoriesQuery()
    const [SingleCategory,{}] = useGetSingleCategoryMutation()
    const [DeleteCat]= useDeleteCategoryMutation()
    const [editCategory,{}] = useEditCategoryMutation()
    const [categories,setCategories] = useState([{
        _id:"",
        name:"",
        image:[],
      }]);

    const FetchCategories=async()=>{
        const res = await fetch(`${import.meta.env.VITE_APP_URL}/category`)
        const data = await res.json()
        setCategories(data)
      }
    const UpdateCategoryParent=async(e,cId)=>{
        if(cId != e.target.value){
            const res= await editCategory({rId:e.target.value,cId})
            console.log(res)
        }
    }
    const DeleteCategory=async(id)=>{
        const res= await DeleteCat(id)
        console.log(res)
    }
    const fetchPCategory=async(id)=>{
        if(id){
            // const res= await SingleCategory(id)
            // console.log(res)
            return id
        }
        return "No Parent"
    }
    useEffect(() => {
       FetchCategories()
    }, []);

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
            {/* <div className=' cursor-pointer border py-2 px-10 bg-gray-50 drop-shadow flex items-center justify-center space-x-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-4' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg><span>Add New Category</span></div> */}
            <AddNewCategory/>
        </div>
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
          </div>
          <input type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Category" />
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
              Image
              </th>
              <th scope="col" className="py-3 px-6">
              Parent Category
              </th>
              <th scope="col" className="py-3 px-6">
              Change Parent
              </th>
              <th scope="col" className="py-3 px-6">
              Updated At
              </th>
              <th scope="col" className="py-3 px-6">
              Action
              </th>
          </tr>
          </thead>
          <tbody>
          {categories && categories.map((cat)=>(
            <>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
              <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
              </div>
              </td>
              <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
              
              <div className="">
                  <div className=" text-base font-semibold">{cat.name}</div>
                  
              </div>  
              </th>
              
              
              <td className="py-4 px-6">
                  <img className="w-15 h-10 rounded-full" src={`${import.meta.env.VITE_APP_URL}/images/categories/${cat.image}`}/>
              </td>
              <td className="py-4 px-6">
              <div>
                {/* <span>{fetchPCategory(cat.parent)}</span> */}
              </div>
              </td>
              <td scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">     
              <div className="">
              <select defaultValue={cat.parent} onChange={(e)=>{UpdateCategoryParent(e,cat._id)}} name="parent" id="madeBy" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="null">Select Parent</option>
            {fetchCategories && fetchCategories.filter(f=>(f.parent==null)).map((cats,index)=>{
                if(cats._id != cat._id){
                return(
               <option key={index} value={cats._id} >{cats.name}</option>
                 )
                 }else{
                    return(
                    <option key={index} value="null">No parent</option>
                    )
                 }
                }
          )}
           
          </select>            
              </div>  
              </td>
              <td className="py-4 px-6">
                 {cat.updatedAt}
              </td>
              <td className="py-4 px-6 space-x-2">
              
              <button className='h-4 w-4 '>            
              <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg>
              </button>
              <button className='w-4 h-4' onClick={()=>{DeleteCategory(cat._id)}}>
              <svg xmlns="http://www.w3.org/2000/svg" className='currentColor' viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
              </button>
  
              
              </td>
             
              
          </tr>
            </>
          ))}
          </tbody>
      </table>
      </div>
  
      {/* <OrderDetail /> */}
      
  
     </>
    )
}
export default Categories