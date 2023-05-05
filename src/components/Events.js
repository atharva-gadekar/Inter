import React from 'react'
import Event from './Event'
export default function Events() {
  return (
    <>
      <div className='px-20 py-6'>
        <div className=''>
          <div className="flex items-center space-x-6">
            <h3 className="text-3xl font-bold text-black ">Upcoming Events</h3>
            <hr className='w-[620px] border-gray-300'/>
          </div>
        <Event></Event>
        </div>
       
        <div>
        <div className="flex items-center space-x-6 mt-16">
            <h3 className="text-3xl font-bold text-black ">Past Events</h3>
            <hr className='w-[700px] border-gray-300'/>
          </div>
        <Event></Event>
        
        </div>
        
      </div>
    </>
  )
}
