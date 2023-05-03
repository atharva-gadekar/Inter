import React from 'react'
import picture from "../assets/jr-korpa-wAXD_Its-48-unsplash.jpg"
export default function event() {
    return (
        <>
            <div className="bg-white rounded-3xl shadow-md w-[56rem]">
                <div className="flex mb-6 mt-6 space-x-12 items-center">
                    <img src={picture} alt="" className='mt-8 mb-8 h-44 w-44 -ml-12 shadow-lg rounded-3xl' />
                    <div className='pr-4'>
                        <p className='text-gray-600 text-sm pb-1'>26 December 2019</p>
                        <h1 className='text-gray-800 text-lg font-bold pb-2'>Event name</h1>
                        <p className='text-gray-500 text-sm pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam, rem aspernatur quasi eius ut minus voluptatem assumenda </p>
                        <button className='bg-blue-600 text-white text-sm px-4 py-2 rounded-full font-medium'>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
      </>
    
  )
}
 