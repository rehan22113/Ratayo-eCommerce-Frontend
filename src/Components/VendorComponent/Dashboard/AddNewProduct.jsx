import React,{useState} from 'react'
import { FilePond, registerPlugin } from 'react-filepond';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import 'filepond/dist/filepond.min.css';
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddNewProduct = () => {
  const [files, setFiles] = useState([]);
  return (
    <>
    <div className='p-4'>
      <div className='py-5'>

        <h1 className='md:text-3xl text-xl font-semibold leading-loose mb-5'>Create a Listing</h1>
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
<li className=' list-disc'>Add photos to your variations so buyers can see all their options</li>
        </ul>
        </div>
        <div className='flex space-x-4 w-3/4'> 
        <div className=' w-1/6'>

        <FilePond
              imagePreviewMaxHeight={300}
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                styleButtonRemoveItemPosition="left"
                maxFiles={1}
                server={false}
                name="files"
                labelIdle='<div>Upload Primary Picture <span class="filepond--label-action">Browse</span>
                </div>'
            />
        </div>
        <div className=' w-1/6'>

        <FilePond
              imagePreviewMaxHeight={300}
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                styleButtonRemoveItemPosition="left"
                maxFiles={1}
                server={false}
                name="files"
                labelIdle='<div>Upload Secondary Picture <span class="filepond--label-action">Browse</span>
                </div>'
            />
        </div>
        <div className=' w-1/6'>

        <FilePond
              imagePreviewMaxHeight={300}
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                styleButtonRemoveItemPosition="left"
                maxFiles={1}
                server={false}
                name="files"
                labelIdle='<div>Upload Secondary Picture <span class="filepond--label-action">Browse</span>
                </div>'
            />
        </div>
        <div className=' w-1/6'>

        <FilePond
              imagePreviewMaxHeight={300}
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                styleButtonRemoveItemPosition="left"
                maxFiles={1}
                server={false}
                name="files"
                labelIdle='<div>Upload Secondary Picture <span class="filepond--label-action">Browse</span>
                </div>'
            />
        </div>
        </div>
        </div>
      </div>
      <div className='border h-20 my-5'>
        <h1>Video</h1>
      </div>
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

          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
           </div>
    </div>
    <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">About this listing *</label>
              <p className='leading-relaxed text-sm'>Learn more about what types of items are allowed on Etsy.</p>
           </div>
           <div className='md:w-3/4 flex space-x-2'>
            <div className='w-full'>
           <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>who made it?</option>
            <option value="US">i did</option>
            <option value="CA">A member of my shop</option>
            <option value="FR">Another company or person</option>
          </select>
</div>
<div className='w-full'>
           <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>what is it?</option>
            <option value="US">A finish product</option>
            <option value="CA">A supply or tool to make thing</option>
          </select>
</div>
<div className='w-full'>
           <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">           
            <option selected>When did you make it?</option>
            <optgroup label='Not Yet Made'>
            <option value="US">Made to Order</option>
            </optgroup>
            <optgroup label='Recently'>
            <option value="US">2020 - 2022</option>
            <option value="US">2010 - 2019</option>
            <option value="US">2003 - 2009</option>
            </optgroup>
            <optgroup label='Vintage'>
            <option value="US">Before 2003</option>
            </optgroup>
          </select>
</div>
           </div>
    </div>
    <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Category *</label>
              <p className='leading-relaxed text-sm'>Type a two- or three-word description of your item to get category suggestions that will help more shoppers find it.</p>
           </div>
           <div className='md:w-3/4'>

          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Category" required />
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
    <input id="renew-1" type="radio" defaultValue name="renew" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="renew-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Automatic Renew - $0.20 eachtime</label>
  </div>
  <div className="flex w-full items-center pl-4 rounded border-gray-200 dark:border-gray-700">
    <input defaultChecked id="renew-2" type="radio" defaultValue name="renew" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
    <input id="type-1" type="radio" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="type-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Physical</label>
  </div>
  <div className="flex w-full items-center pl-4 rounded border-gray-200 dark:border-gray-700">
    <input defaultChecked id="type-2" type="radio" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
              <textarea id="message" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brief overview that describes your item’s"></textarea>
            </div>
           </div>     
    </div>
    <div className='flex py-5'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Tags (optional)</label>
              <p className='leading-relaxed text-sm'>Include keywords that buyers would use to search for your item</p>
           </div>
           <div className='md:w-3/4'>

          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="electronic.. etc." required />
           </div>
    </div>
        
        </div>
      </div>
      <div className='border p-4'>
        <h1 className='text-lg font-semibold'>Inventory and Pricing</h1>
        <div>
        <div className='flex py-5 space-x-2'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Price *</label>
              <p className='leading-relaxed text-sm'>Remember to factor in the costs of materials, labour, and other business expenses. If you offer free delivery, make sure to include the cost of postage so it doesn't eat into your profits.</p>
           </div>
           <div className='md:w-3/4'>

          <input type="number" id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
           </div>
    </div>
    <div className='flex py-5 space-x-2'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">Quantity *</label>
              <p className='leading-relaxed text-sm'>For quantities greater than one, this listing will renew automatically until it sells out. You’ll be charged a $0.20 USD listing fee each time.</p>
           </div>
           <div className='md:w-3/4'>

          <input type="number" id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
           </div>
    </div><div className='flex py-5 space-x-2'>
           <div className=' md:w-1/6'>
              <label htmlFor="first_name" className="block mb-2 text-gray-900 dark:text-gray-300 font-bold text-sm">SKU</label>
              <p className='leading-relaxed text-sm'>SKUs are for your use only — buyers won’t see them.</p>
           </div>
           <div className='md:w-3/4'>

          <input type="number" id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
           </div>
    </div>
        </div>
      </div>
      <div className='border h-40 p-4 my-5'>
        <h1>Variant</h1>
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
            <input type="text" id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A1A 1A1" required />
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
           <select id="countries" class="bg-gray-50 border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select your processing time...</option>
            <option value="US">1 business day</option>
            <option value="CA">1-2 business day</option>
            <option value="FR">1-3 business day</option>
            <option value="FR">1-3 business day</option>
            <option value="FR">5-7 business day</option>
            <option value="FR">Custom Enter</option>
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
            <input type="text" id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="All Country .." required />
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
            <input type="text" id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="TCS Courier" required />
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
            <input type="number" id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
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
            <input type="number" id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div className=''>
            <label htmlFor="first_name" className="block mb-1 text-gray-900 dark:text-gray-300  text-sm">Width</label>
            <input type="number" id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div className=''>
            <label htmlFor="first_name" className="block mb-1 text-gray-900 dark:text-gray-300  text-sm">Height</label>
            <input type="number" id="first_name" className="bg-gray-50 before:w-full before: before:content-['Hello'] border rounded border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
          </div>
    </div>
    
      </div>
      <button className='p-2 px-5 bg-black text-white backdrop-blur border'>Save and Upload</button>
    </div>
    </>
  )
}

export default AddNewProduct