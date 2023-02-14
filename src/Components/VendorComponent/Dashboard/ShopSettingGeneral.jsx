import React,{useState,useEffect} from 'react'
import { FilePond, registerPlugin } from 'react-filepond';
import {useAddShopMutation, useGetShopByIDQuery} from '../../../Service/Api/ShopQuery'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import 'filepond/dist/filepond.min.css';
import { useSelector } from 'react-redux';
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


const ShopSettingGeneral = () => {
  const [uploadShop,{}] = useAddShopMutation();
  const [files, setFiles] = useState([]);
  const userId = useSelector(state=>state.isLogin.userID)
  const {data:shopInfo,isFetching} = useGetShopByIDQuery(userId)
  useEffect(() => {
      console.log("sho[dsds",shopInfo)
      // setShopData(shopInfo[0])
  }, [isFetching]);
  const [shopData,setShopData] = useState({
      name:"",
      files:"",
      url:"",
      productsPerPage:0,
      street:"",
      postalCode:"",
      city:"",
      country:"",
      phone:0
      
  })

  const picHandler=(e)=>{
        if(e){
            console.log(e[0].file)
              setShopData({...shopData,files:e[0].file})  
              setFiles(e)
              console.log(shopData.files);
      }
    }
  const HandleData=(e)=>{
      const {name,value} = e.target;
      setShopData({...shopData,[name]:value})
  }
  const HandleSubmit=async(e)=>{
      try{
            e.preventDefault();
            const formData = new FormData();
      for ( let key in shopData ) {
            formData.append(key, shopData[key]);
        }
     const res=await uploadShop(formData)
     console.log("shop created message",res)
      }catch(err){
            console.log(err)
      }
  }
  return (
    <div className='container px-5 py-3 bg-gray-100'>
      <div >
      <h2 className='text-xl font-bold'>
         General Setting - <span className='text-red-500'>Visit Store</span>
      </h2>
      </div>
      <form encType='multipart/form-data'>
      <div className='px-10 py-5'>
        <h2 className='text-lg font-semibold'>Add Banner (comming soon)</h2>
        {/* <FilePond
            imagePreviewMaxHeight={400}
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            styleButtonRemoveItemPosition="left"
            maxFiles={1}
            server={false}
            name="files"
            labelIdle='Upload Primary Picture <span className="filepond--label-action">Browse</span>'
            /> */}
        </div>
        <div className='px-10 py-5 flex space-x-2 items-center'>
        <div>
             <h2 className=' font-semibold'>Profile Picture (Optional) </h2>
        </div>
        <div className='w-1/6'>
      <FilePond
            imagePreviewMaxHeight={250}
            files={files}
            onupdatefiles={picHandler}
            allowMultiple={false}
            styleButtonRemoveItemPosition="left"
            maxFiles={1}
            server={false}
            name="files"
            labelIdle='<div>Upload Primary Picture <span class="filepond--label-action">Browse</span>
            </div>'
            />
        </div>
        </div>
        <div className=' space-y-5'>
        <div className='flex space-x-2 px-10 items-center'>
        <div className=' w-1/12'>
  <label htmlFor="store_name" className="block mb-2 text-sm text-gray-900 dark:text-gray-300 font-semibold">Store Name</label>
        </div>
        <div className=' w-1/2'>
  <input type="text" id="store_name" onChange={HandleData} name='name' value={shopData.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="vendor" required />
        </div>
</div>
<div className='flex space-x-2 px-10 items-center'>
        <div className=' w-1/12'>
  <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 dark:text-gray-300 font-semibold">Store URL </label>
  <p className=' text-slate-400'> No any space or special character</p>
        </div>
        <div className=' w-1/2'>
  <input type="text" id="productPerPage" onChange={HandleData} name='url' value={shopData.url} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} placeholder="" required />
        </div>
</div>
<div className='flex space-x-2 px-10 items-center'>
        <div className=' w-1/12'>
  <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 dark:text-gray-300 font-semibold">Store Products per page</label>
        </div>
        <div className=' w-1/2'>
  <input type="number" id="productPerPage" onChange={HandleData} name='productsPerPage' value={shopData.productsPerPage} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} placeholder="" required />
        </div>
</div>
<div className='flex space-x-2 px-10 items-center'>
      <div className=' w-1/12'>
        <label htmlFor="streetAddress" className="block mb-2 text-sm  text-gray-900 dark:text-gray-300 font-semibold">Address</label>
      </div>
        <div className=' w-1/2 space-y-2'>
  <input type="text" name='street' onChange={HandleData} id="streetAddress" value={shopData.street} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="street address" required />
  <input type="text" name='city' onChange={HandleData} id="city" value={shopData.city} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
  <input type="text" name='postalCode' onChange={HandleData} id="first_name" value={shopData.postCode} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post/zip code" required />
  <input type="text" name='country' onChange={HandleData} id="country" value={shopData.country} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
  <input type="text" name='state' onChange={HandleData} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
        </div>

</div>
        <div className='flex space-x-2 px-10 items-center'>
        <div className=' w-1/12'>
  <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 dark:text-gray-300 font-semibold">Phone No.</label>
        </div>
        <div className=' w-1/2'>
  <input type="number" name='phone' onChange={HandleData} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} placeholder="" required />
        </div>
</div>
</div>
<div className=' py-10 '>

    <button type='submit' onClick={HandleSubmit} className='p-2 px-5 bg-black text-white backdrop-blur border'>Save and Update</button>
</div>
</form>
    </div>
    
  
  )
}

export default ShopSettingGeneral