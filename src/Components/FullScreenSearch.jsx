import React from 'react'

const FullScreenSearch = () => {
  return (
    <>
        <div className="p-20 bg-amber-100 absolute z-99">
  <div id="search-box" className="hidden fixed top-0 left-0 w-screen h-screen bg-gray-900 z-90">
    <span className="cursor-pointer text-6xl text-white hover:text-amber-500 absolute right-5 top-5" title="Close">×</span>
    <div className="w-full h-full flex justify-center items-center">
      <form action>
        <input type="text" placeholder="What are you looking for?" name="search" className="w-96 px-3 py-2 rounded-tl-full rounded-bl-full border-0 focus:outline-0" />
        <button type="submit" className="px-3 py-2 -ml-1.5 bg-green-500 hover:bg-green-600 text-white rounded-tr-full rounded-br-full">Search</button>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default FullScreenSearch