import React from 'react'

const MessageForm = () => {
  return (
    <div class="flex h-full flex-auto flex-col md:pt-16 ">
    <div class="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 ">
      <p class="sticky top-0 bg-white z-1  text-sm p-2 font-semibold uppercase text-indigo-500">Name</p>    
      <div class="mb-2 pt-5 flex h-full flex-col overflow-x-auto">
        
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-start-1 col-end-8 rounded-lg p-3">
              <div class="flex flex-row items-center">
                <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">A</div>
                <div class="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                  <div>Hey How are you today?</div>
                </div>
              </div>
            </div>
            
            <div class="col-start-6 col-end-13 rounded-lg p-3">
              <div class="flex flex-row-reverse items-center justify-start">
                <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">A</div>
                <div class="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
                  <div>I'm ok what about you?</div>
                </div>
              </div>
            </div>
            
            <div class="col-start-1 col-end-8 rounded-lg p-3">
              <div class="flex flex-row items-center">
                <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">A</div>
                <div class="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                  <div>Lorem ipsum dolor sit amet !</div>
                </div>
              </div>
            </div>

          </div>
       
      </div>
      <div class="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4">
        <div>
          <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
            </svg>
          </button>
        </div>
        <div class="ml-4 flex-grow">
          <div class="relative w-full">
            <input type="text" class="flex h-10 w-full rounded-xl border pl-4 focus:border-indigo-300 focus:outline-none" />
            <button class="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-gray-400 hover:text-gray-600">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="ml-4">
          <button class="flex flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500 px-4 py-1 text-white hover:bg-indigo-600">
            <span>Send</span>
            <span class="ml-2">
              <svg class="-mt-px h-4 w-4 rotate-45 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MessageForm