import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useAddNewCategoryMutation } from '../../Service/Api/CategoryApi'

export default function AddNewCategory() {
  const [AddNewCategory] = useAddNewCategoryMutation()
  const [category,setCategory] = useState({
    name:"",
    file:""
  })
  let [isOpen, setIsOpen] = useState(false)

  async function SubmitModal() {
    const formData = new FormData()
    formData.append("name",category.name)
    formData.append("files",category.file)
    const res=await AddNewCategory(formData)
    console.log(JSON.parse(formData))
    setIsOpen(false)
  }
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div onClick={openModal} className=' cursor-pointer border py-2 px-10 bg-gray-50 drop-shadow flex items-center justify-center space-x-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-4' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg><span>Add New Category</span></div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add New Category
                  </Dialog.Title>
                  
<form>
  <div className="my-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Category</label>
    <input type="text" onChange={(e)=>{setCategory({...category,name:e.target.value})}} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Women Cloths etc." required />
  </div>
  <div className="mb-6">
    <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnail Image</label>
    <input onChange={(e)=>{setCategory({...category,file:e.target.files[0]})}} type="file" id="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={SubmitModal}
                    >
                      Create New
                    </button>
                  </div>
</form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
