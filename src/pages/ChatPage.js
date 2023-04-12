import React from 'react'
import Chat
    from '../components/Chat';
    import LeftChat from '../components/LeftChat';
export default function ChatPage() {
  return (
      
          <div className='flex'>
          <LeftChat />
              <Chat/>
          </div>
              
          
    
  )
}
