import React from 'react'
import hashtag from "../assets/hash.png"
export default function Hashtag() {
  return (
    <div className='bg-white rounded-3xl p-4'>
          <div className="flex p-4 space-x-5 items-center">
              <div>
              <img src={hashtag} alt="" className='h-24 w-24'/>
              </div>
              <div>
                  <h1 className='font-bold text-xl'>#dsa</h1>
                  <p className='text-gray-500 text-sm'>3729 posts</p>
                  <button className='bg-blue-600 text-white font-medium rounded-full px-4 py-1 mt-2'>Follow</button>
              </div>
      </div>
    </div>
  )
}
