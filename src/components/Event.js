import moment from 'moment/moment';
import React from 'react'
import { Link } from 'react-router-dom';


export default function Event(props) {
  const { url,image,date, name, description } = props;
  const formattedDate = moment(date).format('MMMM D, YYYY');

  return (
    <>
      <div className="bg-white rounded-3xl shadow-md w-[56rem] " >
        <div className="flex mb-6 mt-6 space-x-12 items-center">
          <img src={image} alt="" className='mt-8 mb-8 h-44 w-44 -ml-12 shadow-lg rounded-3xl' />
          <div className='pr-4'>
          <h1 className='text-gray-800 text-lg font-bold pb-2'>{name}</h1>
            <p className='text-gray-600 text-sm pb-1'>{formattedDate}</p>
            
            <p className='text-gray-500 text-sm pb-5'>{description}</p>
            
            <button className='bg-blue-600 text-white text-sm px-4 py-2 rounded-full font-medium'>
            <Link to={url}>
              Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
