import React from 'react'

export default function Message({message, own }) {
  return (
      <div className={own?"flex justify-end mb-4 space-x-2":"flex justify-start mb-4 space-x-"}>
            <div
              className={own?"mr-2 py-3 px-4 bg-blue-100 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-slate-600 order-1":"ml-2 py-3 px-4 bg-gray-100 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-slate-600 order-2"}
            >
              {message.text}
            </div>
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              className={own?"object-cover h-8 w-8 rounded-full order-2":"object-cover h-8 w-8 rounded-full order-1"}
              alt=""
            />
          </div>
  )
}

