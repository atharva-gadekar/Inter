import React from 'react'
import Event from './Event'
export default function Events() {
  return (
    <>
      <div className='px-20 py-6'>
        <div className=''>
        <h3 className="text-3xl font-bold text-black ">Upcoming Events</h3>
        <Event></Event>
        </div>
       
        <div>
        <h3 className="text-3xl font-bold text-black ">Past Events</h3>
        <Event></Event>
        <Event></Event>
        <Event></Event>
        </div>
        
      </div>
    </>
  )
}
