import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageForm from '../components/MessageForm'

const Chat = () => {
  return (
    <div className=' h-3/4'>
      <div class="flex h-screen text-gray-800 antialiased">
        <div class="flex h-full w-full flex-col md:flex-row overflow-x-hidden">
          {/* nav */}
          <div class="bg-gray-800 p-5 md:shrink-0">
            <Sidebar />
          </div>

          <div class="flex h-full flex-auto flex-col p-2">
            <MessageForm/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Chat