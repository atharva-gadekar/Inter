import React from 'react'
import profile_bg from "../assets/bg_profile.png"
import profile from "../assets/Frame 6 1.png"
export default function ProfileSidebar() {
  return (
    <div>
          <div className='bg-white p-1 w-[112%] rounded-3xl mx-5 mt-6'>
              <img src={profile_bg} alt="" className='rounded-2xl mt-4 px-4'/>
              <img src={profile} className="-mt-12 mr-auto ml-auto rounded-2xl h-20 w-20"></img>
              <h1 className='text-center font-bold text-2xl mt-4'>Nick Rybak</h1>
              <p className='text-center text-slate-500 mt-3 mb-20 text-base px-12'>UX/UI designer- Appservice Agency</p>
              <div className='px-1 mt-6'>
              <div className="flex justify-between px-4 mb-3 text-sm">
                  <p >Who viewed your profile</p>
                  <p className='text-blue-600'>205</p>
              </div>

              <div className="flex justify-between px-4 mb-8 text-sm">
                  <p>Views of your post</p>
                  <p className='text-blue-600'>9767</p>
              </div>
    </div>
              

              
      </div>
    </div>
  )
}
