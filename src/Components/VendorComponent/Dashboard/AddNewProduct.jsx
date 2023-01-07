import React,{useState,useEffect,useRef} from 'react'
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
import { useUploadProductMutation,useAddVariantMutation } from '../../../Service/Api/productQuery';
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddNewProduct = () => {
  const [UploadProduct,action] = useUploadProductMutation()
  const [AddNewVariant,{}]= useAddVariantMutation()
  const [variant,setVariant]= useState([])
  const [files, setFiles] = useState([]);
  // const [files1, setFiles1] = useState([]);
  // const [files2, setFiles2] = useState([]);
  // const [files3, setFiles3] = useState([]);


  const [variantList,setVariantList] = useState([{
        type:"",
        value:"",
        price:0,
        qty:0,
        color:""
  }])
  const [selectedVariant,setSelectedvariant] = useState("")
  const handleChange = (event, index) => {
    const values = [...variantList];
    values[index][event.target.name] = event.target.value;
    setVariantList(values);
  };
  const DeleteFields = (e,index)=>{
    const values = variantList.filter((e,i)=>{
      return i!=index
    })
    setVariantList(values)
  }
 
  const handleAddFields = () => {
    setVariantList([
      ...variantList,
      {
        type:"",
        value:"",
        price:0,
        qty:0,
        color:""
      },
    ]);
  };

  const UploadVariant=(e,index)=>{
     const {id} = AddNewVariant(variantList[index])
      setVariant([...variant,id])
  }
 const HandleProduct = (e)=>{
  const {name,value} = e.target;
  setProductData({...productData,[name]:value})
 } 

 
 const [productData,setProductData] = useState({

      title :"",
      whoMadeIt:"",
      whatIsIt:"",
      whenDid:"",
      category :"",
      renewal :"manual",
      type :"physical",
      description :"",
      tags :"",
      price :"",
      qty :"",
      sku :"",
      originPostCode :"",
      processingTime :"",
      country :"",
      services :"",
      itemWeight :"",
      itemLength :"",
      itemWidth:"",
      itemHeight:""
  })

  const PostProduct=async()=>{
    const formData = new FormData();
    formData.append("files",files)
    formData.append("variant",variants)
    for ( let key in productData ) {
      formData.append(key, productData[key]);
  }
  const res = await UploadProduct(formData)
  }
  const [categories,setCategories] = useState([{
    _id:"",
    name:""
  }]);
  const FetchCategories=async()=>{
    const res = await fetch(`${import.meta.env.VITE_APP_URL}/category`)
    const data = await res.json()
    setCategories(data)
  }

  useEffect(() => {
    FetchCategories()
  }, []);

  return (
    <>
    <div className='p-4'>
      <div className='py-5'>
        <h1 className='md:text-3xl text-xl font-semibold leading-loose mb-5'>Create a Listing
        </h1>
        <p className='md:text-md'>Add some photos and details about your item. Fill out what you can for now - you’ll be able to edit this later. </p>
      </div>
      <div className='border p-4'>
        <h1 className='text-xl font-semibold '>Photos</h1>
        <div className='flex flex-wrap'>
        <div className=' w-1/5'>
        Tips:
        <ul className='px-4'>
          <li className=' list-disc'>Use natural light and no flash.</li>
          <li className=' list-disc'>Include a common object for scale.</li>
          <li className=' list-disc'>Show the item being held, worn, or used.</li>
          <li className=' list-disc'>Shoot against a clean, simple background.</li>
          <li className=' list-disc'>First Image will be your Primary image
          </li>
        </ul>
        </div>
        <div className='flex space-x-4 w-3/4'> 
        <div className=' w-full'>

        <FilePond
                className="flex flex-row"
                imagePreviewMaxHeight={300}
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                styleButtonRemoveItemPosition="left"
                maxFiles={2}
                server={false}
                name="files"
                labelIdle='Drag & Drop your Primary and Secondry image or <span class="filepond--label-action">Browse</span>'
            />
        </div>
        </div>
        </div>
      </div>
      {/* <div className='border h-20 my-5'>
        <h1>Video</h1>
      </div> */}
      <div className='border p-4 my-5'>
        <h1 className='text-xl font-semibold'>Listing Details</h1>
        <p>Tell the world all about your item and why they’ll love it. </p>
        <div>
        
    <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Title *</label>
              <p className='leading-relaxed text-sm'>Include keywords that buyers would use to search for your item</p>
           </div>
           <div className='md:w-3/4'>

          <input type="text" name='title' onChange={HandleProduct} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
           </div>
    </div>
    <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">About this listing *</label>
              <p className='leading-relaxed text-sm'>Learn more about what types of items are allowed on Etsy.</p>
           </div>
           <div className='md:w-3/4 flex space-x-2'>
            <div className='w-full'>
           <select onChange={HandleProduct} name="whoMadeIt" id="whoMadeIt" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="null" selected>who made it?</option>
            <option value="i did">i did</option>
            <option value="A member of my shop">A member of my shop</option>
            <option value="Another company or person">Another company or person</option>
          </select>
</div>
<div className='w-full'>
           <select onChange={HandleProduct} name="whatIsIt" id="whatIsIt" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="null" selected>what is it?</option>
            <option value="A finish product">A finish product</option>
            <option value="A supply or tool to make thing">A supply or tool to make thing</option>
          </select>
</div>
<div className='w-full'>
           <select onChange={HandleProduct} name="whenDid" id="whenDid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">           
            <option selected>When did you make it?</option>
            <optgroup label='Not Yet Made'>
            <option value="Made to Order">Made to Order</option>
            </optgroup>
            <optgroup label='Recently'>
            <option value="2020 - 2022">2020 - 2022</option>
            <option value="2010 - 2019">2010 - 2019</option>
            <option value="2003 - 2009">2003 - 2009</option>
            </optgroup>
            <optgroup label='Vintage'>
            <option value="Before 2003">Before 2003</option>
            </optgroup>
          </select>
</div>
           </div>
    </div>
    <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="category" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Category *</label>
              <p className='leading-relaxed text-sm'>Type a two- or three-word description of your item to get category suggestions that will help more shoppers find it.</p>
           </div>
           <div className='md:w-3/4'>

          <select onChange={HandleProduct} type="text" name='category' id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Category" required >
          <option value="null" selected>Select Categories</option>
          {categories && categories.map((cat)=><option value={cat._id}>{cat.name}</option>)}
          </select>

        </div>
    </div>
    <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Renewal Options *</label>
              <p className='leading-relaxed text-sm'>Each renewal lasts for four months or until the listing sells out.</p>
           </div>
           <div className='md:w-3/4'>

           <div className='flex'>
  <div className="flex w-full items-center pl-4 roundedx border-gray-200 dark:border-gray-700">
    <input onChange={HandleProduct} value="auto" id="renew-1" type="radio" defaultValue name="renewal" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="renew-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Automatic Renew - $0.20 eachtime </label>
  </div>
  <div className="flex w-full items-center pl-4 rounded border-gray-200 dark:border-gray-700">
    <input onChange={HandleProduct} value="manual" defaultChecked id="renew-2" type="radio" defaultValue name="renewal" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="renew-2" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Manual Renew</label>
  </div>
</div>

           </div>

           
    </div>

    <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Type *</label>
              
           </div>
           <div className='md:w-3/4'>

           <div className='flex'>
  <div className="flex w-full items-center pl-4 roundedx border-gray-200 dark:border-gray-700">
    <input onChange={HandleProduct} id="type-1" value="physical" type="radio" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="type-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Physical</label>
  </div>
  <div className="flex w-full items-center pl-4 rounded border-gray-200 dark:border-gray-700">
    <input defaultChecked onChange={HandleProduct} value="digital" id="type-2" type="radio" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="type-2" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Digital</label>
  </div>
</div>

           </div>

           
    </div>
    <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Description *</label>
              <p className='leading-relaxed text-sm'>Start with a brief overview that describes your item’s finest features. Shoppers will only see the first few lines of your description at first, so make it count!<br/>
              Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.</p>
           </div>
          <div className='md:w-3/4'>

           <div className='flex'>
              <textarea onChange={HandleProduct} id="description" name='description' rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brief overview that describes your item’s"></textarea>
            </div>
           </div>     
    </div>
    <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Tags (optional)</label>
              <p className='leading-relaxed text-sm'>Include keywords that buyers would use to search for your item</p>
           </div>
           <div className='md:w-3/4'>

          <input onChange={HandleProduct} type="text" name='tags' id="tags" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="electronic.. etc." required />
           </div>
    </div>
        
        </div>
      </div>
      <div className='border p-4'>
        <h1 className='text-lg font-semibold'>Inventory and Pricing</h1>
        <div>
        <div className='flex py-5 space-x-2'>

<div className=' md:w-1/6'>
      <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Select Product Type *</label>
      <p className='leading-relaxed text-sm'>Learn more about it on Etsy.</p>
   </div>
   <div className='w-full'>
   <div className='md:w-3/4 flex space-x-2 justify-center items-center'>
    <div className='w-full flex'>
   <select onChange={(e)=>{setSelectedvariant(e.target.value);}} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Select Type</option>
    <option value="simple" hidden>Simple</option>
    <option value="variant" defaultChecked>Variant</option>
  </select>
</div>

</div>
{selectedVariant == 'variant' && (
  variantList.map((data,index)=>(

<div key={index} className='md:w-3/4 flex space-x-2 py-2'>
  <div className='w-full'>
    <span>Type</span>
    <input onChange={event => handleChange(event, index)} name="type" type="text" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='weight, size...etc.' /> 
  </div>
<div className='w-full'>
<span>Value</span>
<input onChange={event => handleChange(event, index)} name="value" type="text" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='1kg,2kg...xl/sm'/> 
</div>
<div className='w-full'>
    <span>Price</span>
   <input onChange={event => handleChange(event, index)} name="price" type="text" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 before:bg-black" placeholder='$300'/>           
   
</div>
<div className='w-full'>
    <span>Quantity</span>
   <input onChange={event => handleChange(event, index)} name="qty" type="text" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='3'/>           
   
</div>
<div className='w-full'>
    <span>Color</span>
   <input onChange={event => handleChange(event, index)} name="color" type="color" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='3'/>           
   
</div>
   <div className='flex justify-center items-center mt-4 space-x-2'>
  <button onChange={e=>{UploadVariant(e,index)}} className='text-md font-extrabold'>
    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
  </button>
  <button onClick={handleAddFields} className='text-md font-extrabold'>
    <svg className='w-6' enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
    <polygon points="289.39 222.61 289.39 0 222.61 0 222.61 222.61 0 222.61 0 289.39 222.61 289.39 222.61 512 289.39 512 289.39 289.39 512 289.39 512 222.61" />
    </svg>
  </button>
  {/* delete button */}
  {index != 0 && (

  <button onClick={e=>{DeleteFields(e,index)}} className='text-md font-extrabold'>
    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>

  </button>
  )}
</div>
   </div>
   ))
   )
}
</div>
</div>
{selectedVariant == 'simple' && (
<>
        <div className='flex py-5 space-x-2'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Price *</label>
              <p className='leading-relaxed text-sm'>Remember to factor in the costs of materials, labour, and other business expenses. If you offer free delivery, make sure to include the cost of postage so it doesn't eat into your profits.</p>
           </div>
           <div className='md:w-3/4'>

          <input type="number" onChange={HandleProduct} name='price' id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
           </div>
    </div>
    <div className='flex py-5 space-x-2'>
           <div className=' md:w-1/6'>
              <label htmlFor="qty" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Quantity *</label>
              <p className='leading-relaxed text-sm'>For quantities greater than one, this listing will renew automatically until it sells out. You’ll be charged a $0.20 USD listing fee each time.</p>
           </div>
           <div className='md:w-3/4'>

          <input type="number" onChange={HandleProduct} name='qty' id="qty" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
           </div>
    </div>
    <div className='flex py-5 space-x-2'>
           <div className=' md:w-1/6'>
              <label htmlFor="sku" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">SKU</label>
              <p className='leading-relaxed text-sm'>SKUs are for your use only — buyers won’t see them.</p>
           </div>
           <div className='md:w-3/4'>

          <input type="number" name='sku' onChange={HandleProduct} id="sku" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
           </div>
    </div>
    </>
)}
        </div>
      </div>
      
      <div className='border p-4 my-5'>
        <h1 className='text-lg font-semibold'>Delivery</h1>
        <div className='flex py-5'>
            <div className=' md:w-1/6'>
                <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Delivery options *</label>         
            </div>
              <div className='md:w-full p-4 border '>
                <h2 className='text-md my-5 w-3/4'>Fill out your delivery options for this listing. You can keep these options specific to this listing, or save them as a delivery profile to apply them to future listings.</h2>
                <hr className='hidden md:block md:mb-2'/>
                <div className='flex py-4'>
                <div className=' md:w-1/6'>
                    <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Origin Post Code *</label>
                    <p className='leading-relaxed text-sm'>Let us calculate them or enter fixed prices yourself </p>
                </div>
              <div className='md:w-3/4'>
              <div className='w-full flex space-x-4'>
            <input onChange={HandleProduct} name="originPostCode" type="text" id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A1A 1A1" required />
            </div>
              </div> 
              </div>

              <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Processing time*</label>
              <p className='leading-relaxed text-sm'>Once a buyer has placed their order, how long does it take you to prepare, package, and put it in the mail?</p>
           </div>
           <div className='md:w-3/4 flex space-x-2'>
            <div className='w-full'>
           <select onChange={HandleProduct} name="processingTime" id="countries" className="bg-gray-50 border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select your processing time...</option>
            <option value="1">1 business day</option>
            <option value="1-2">1-2 business day</option>
            <option value="1-3">1-3 business day</option>
            <option value="4-5">4-5 business day</option>
            <option value="5-7">5-7 business day</option>
            <option value="not-expected">Not Expected</option>
          </select>
</div>
</div>
</div>

<div className='flex py-4'>
                <div className=' md:w-1/6'>
                    <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Where i'll Deliver *</label>
                    <p className='leading-relaxed text-sm'>What country will you deliver to?</p>
                </div>
              <div className='md:w-3/4'>
              <div className='w-full flex space-x-4'>
            <input onChange={HandleProduct} type="text" name='country' id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="All Country .." required />
            </div>
              </div> 
              </div>
              <div className='flex py-4'>
                <div className=' md:w-1/6'>
                    <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Delivery Services *</label>
                    <p className='leading-relaxed text-sm'>Buyers can choose these at checkout</p>
                </div>
              <div className='md:w-3/4'>
              <div className='w-full flex space-x-4'>
                <input type="text" onChange={HandleProduct} name='services' id="service" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="TCS Courier" required />
            </div>
              </div> 
              </div>
              </div>
           </div>
        <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Item Weight (when packed) *</label>
              <p className='leading-relaxed text-sm'>Weight and size are required for calculated profiles.</p>
           </div>
           <div className='md:w-3/4 flex space-x-2'>
            <div className='w-full'>
             <input type="number" name='itemWeight' onChange={HandleProduct} id="weight" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
           </div>
    </div>
    <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Item size (when packed) *</label>
              <p className='leading-relaxed text-sm'>Enter the weight and size of the item plus packing materials. This will be used to determine package size. </p>
           </div>
           <div className='md:w-3/4 flex space-x-2'>
            <div className=' '>
            <label htmlFor="first_name" className="block mb-1 text-gray-900 dark:text-gray-300  text-sm">Length</label>
            <input type="number" onChange={HandleProduct} id="length" name="itemLength" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div className=''>
            <label htmlFor="first_name" className="block mb-1 text-gray-900 dark:text-gray-300  text-sm">Width</label>
            <input type="number" onChange={HandleProduct} id="width" name="itemWidth" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div className=''>
            <label htmlFor="first_name" className="block mb-1 text-gray-900 dark:text-gray-300  text-sm">Height</label>
            <input type="number" onChange={HandleProduct} id="height" name='itemHeight' className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
          </div>
    </div>
    
      </div>
      <button onClick={PostProduct} className='p-2 px-5 bg-black text-white backdrop-blur border'>Save and Upload</button>
    </div>
    </>
  )
}

export default AddNewProduct