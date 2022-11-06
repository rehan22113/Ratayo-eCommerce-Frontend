import React,{useState} from 'react'
import { FilePond, registerPlugin } from 'react-filepond';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import 'filepond/dist/filepond.min.css';
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


const ShopSettingGeneral = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className='container px-5 py-3 bg-gray-100'>
      <div >
      <h2 className='text-xl font-bold'>
      General Setting - <span className='text-red-500'>Visit Store</span>
      </h2>
      </div>
      <div className='px-10 py-5'>
        <h2 className='text-lg font-semibold'>Add Banner </h2>
        <FilePond
            imagePreviewMaxHeight={400}
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
        <div className='px-10 py-5 flex space-x-2 items-center'>
        <div>
             <h2 className=' font-semibold'>Profile Picture </h2>
        </div>
        <div className='w-1/6'>
      <FilePond
            imagePreviewMaxHeight={250}
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
        </div>
        <div className=' space-y-5'>
        <div className='flex space-x-2 px-10 items-center'>
        <div className=' w-1/12'>
  <label htmlFor="first_name" className="block mb-2 text-sm text-gray-900 dark:text-gray-300 font-semibold">Store Name</label>
        </div>
        <div className=' w-1/2'>
  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="vendor" required />
        </div>
</div>

<div className='flex space-x-2 px-10 items-center'>
        <div className=' w-1/12'>
  <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 dark:text-gray-300 font-semibold">Store Products per page</label>
        </div>
        <div className=' w-1/2'>
  <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} placeholder="" required />
        </div>
</div>
<div className='flex space-x-2 px-10 items-center'>
      <div className=' w-1/12'>
        <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 dark:text-gray-300 font-semibold">Address</label>
      </div>
        <div className=' w-1/2 space-y-2'>
  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="street address" required />
  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post/zip code" required />
  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
        </div>

</div>
        <div className='flex space-x-2 px-10 items-center'>
        <div className=' w-1/12'>
  <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 dark:text-gray-300 font-semibold">Phone No.</label>
        </div>
        <div className=' w-1/2'>
  <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} placeholder="" required />
        </div>
</div>
</div>
    </div>
  )
}

export default ShopSettingGeneral