import React from 'react'
import {
    faSearch,
    faPenToSquare,
    faCircle,
    faPaperPlane,
    faKey, faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";
  
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function 
() {
  return (
      <div className='ml-auto mr-auto text-center'>
           <FontAwesomeIcon
              icon={faKey}
              size="lg"
              className="mr-auto ml-auto mt-40 text-blue-600 h-5 w-5 bg-blue-100 rounded-full cursor-pointer p-4 mb-6"
            />
          <h1 className='text-center text-xl font-semibold '>Set New Password</h1>
          <p className='p-5 text-sm text-gray-600 w-2/5 lg:w-1/5 ml-auto mr-auto'>Your new password must be different to previously used passwords</p>
          {/* form */}
          <div className="ml-auto mr-auto justify-center lg:block w-2/5 lg:w-1/5">
          <form className="flex flex-col gap-4 mb-4" >
           
            <div className="flex flex-col relative">
  <input
    
    id="password"
    name="password"
   
    placeholder="Enter new password"
    className="mt-2 px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
  />
  <input
    
    id="password"
    name="password"
   
    placeholder="Confirm password"
    className="mt-4 px-4 py-3 bg-[#dfe6f9] border-gray-300 rounded-lg"
  />
</div>


            
            <button
              type="submit"
              className="w-full mt-1 lg:mt-3 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg"
            >
              Reset Password
                  </button>
                  <div className="flex justify-center items-center space-x-3">
                  <FontAwesomeIcon icon={faArrowLeft} className=" h-3 w-3 text-blue-600" /><p className="text-blue-600 text-sm">Back to log in</p> 
                  </div>
            
          </form>
        </div>
    </div>
  )
}
