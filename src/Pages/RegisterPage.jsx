import {useRef,useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'

export default function RegisterPage() {

  const [RegisterData,setRegisterData] = useState({
    firstname:"",
    lastname:"",
    username:"",
    phone:"",
    email:"",
    password:"",
    confirm_password:""
  })

  const HandleChange = (e)=>{
      const {name,value} = e.target;
      setRegisterData({...RegisterData,[name]:value})
  }
  const postData = async()=>{
    const res = await fetch("https://ratayo-api.herokuapp.com/register",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      mode:"cors",
      credentials:"include",
      body: JSON.stringify(RegisterData)
    })
    console.log(res)

  }

  const [isChecked,setIsChecked] = useState(false)
  const vendorInput = useRef()
  const CheckVendorOption =()=>{
      vendorInput.current.checked = true
  }

    return (
      <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
            <div className='flex justify-center'>
            <Link to="/">

              <img
                className="h-12 w-auto"
                src={Logo}
                alt="Workflow"
              />
            </Link>
            </div>
              <h2 className="mt-6 text-3xl font-extrabold text-skin-primary">Register to your account</h2>
              
            </div>
  
            <div className="mt-8">
              <div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Sign up with</p>
  
                  <div className="mt-1 grid gap-3">
                    <div>
                      <a
                        href="#"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with Google</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
  
                    
  
                    
                  </div>
                </div>
  
                <div className="mt-6 relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
              </div>
  
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                <div className='flex space-x-4'>
                <div className='w-[49%]'>
                    <label htmlFor="fName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={HandleChange}
                        id="fName"
                        name="firstName"
                        type="text"
                        autoComplete="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className='w-[49%]'>
                    <label htmlFor="lName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={HandleChange}
                        id="lName"
                        name="lastName"
                        type="text"
                        autoComplete="lName"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>
                  </div>
                  <div>
                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                      User Name
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={HandleChange}
                        id="userName"
                        name="userName"
                        type="text"
                        autoComplete="userName"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <div className="mt-1">
                  <input
                  onChange={HandleChange}
                    id="phone"
                    name="phone"
                    type="phone"
                    autoComplete="phone"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                  />
                </div>
              </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={HandleChange}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>

                  
  
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={HandleChange}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="cPassword" className="block text-sm font-medium text-gray-700">
                     Confirm Password
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={HandleChange}
                        id="cPassword"
                        name="confirm_password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                     Choose One
                    </label> */}
                    <div className="mt-1 w-full flex justify-start items-center space-x-5">
                     <div>
                      <input
                      className=''
                        defaultChecked="true"
                        onFocus={()=>{setIsChecked(false)}}
                        onChange={()=>{setIsChecked(false)}}
                        id="customer"
                        name="user_type"
                        type="radio"
                       
                      />
                      <label htmlFor="customer">sign as Customer</label>
                      </div>
                      <div>
                    <input
                        ref={vendorInput}
                        onFocus={()=>{setIsChecked(true)}}
                        onChange={()=>{setIsChecked(true)}}
                        id="vendor"
                        name="user_type"
                        type="radio"
                        
                      />
                      <label htmlFor="vendor">sign as vendor</label>
                      </div>
                    </div>
                    
                  </div>
                  {isChecked?(

                  <>
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                     Shop name
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Shop URL(without any spaces or capital) *
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-skin-secondaryLight focus:border-skin-secondaryLight sm:text-sm"
                      />
                    </div>
                  </div>
                  </>
                  ):""}
                  
  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-skin-secondary focus:ring-skin-secondaryLight border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-skin-primary">
                        Remember me
                      </label>
                    </div>
  
                    <div className="text-sm">
                      <a href="#" className="font-medium text-skin-secondary hover:text-skin-secondaryLight">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
  
                  <div className='flex space-x-6'>
                  {!isChecked?(

                    <button
                      type="button"
                      onClick={postData}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-skin-secondary hover:bg-skin-secondaryDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skin-secondaryLight"
                    >
                      Sign up
                    </button>
                  ):(

                    <Link
                      type="button"
                      to="/dashboard/vendor"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-skin-secondary hover:bg-skin-secondaryDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skin-secondaryLight"
                    >
                      Sign up as a vendor
                    </Link>
                  )}
                  </div>
                </form>
                <div className='w-full flex justify-center py-2'>
                <Link to="/login" className="text-sm text-center text-skin-primary">
                  Already have an Account? <span className='text-skin-secondary underline'>Login Here</span>
                </Link> 
                </div>
                <div className='w-full flex justify-center py-2'>
                <Link to="/" className="text-lg underline text-center text-skin-secondary">Back To Home</Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    )
  }
  