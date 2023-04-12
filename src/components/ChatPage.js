import React from 'react'
import Chat
    from './Chat';
    import LeftChat from './LeftChat';
export default function ChatPage() {
  return (
    <div className="mb-6">
      <div className='flex h-full'>
          <LeftChat />
              <Chat/>
          </div>
      </div>
          
              
          
    
  )
}
