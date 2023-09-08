import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div class="mt-16 flex flex-col">
        <div class="flex flex-row items-center justify-between text-xs">
          <span class="text-base font-extrabold text-white">Available Rooms</span>
        </div>
        <div class="mt-4 flex h-26 flex-row  overflow-x-auto rounded-sm md:h-48 md:flex-col md:space-y-1 ">
          <button class="mx-1 flex flex-col items-center bg-sky-700 p-2 hover:bg-sky-900 md:flex-row md:rounded-md">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="border-2 flex w-10 h-10 rounded-full bg-indigo-200 md:h-10 md:w-10" ></img>
            <div class="truncate mx-2 -my-1 p-2 text-sm font-semibold md:ml-1  text-white overflow-hidden" style={{ maxWidth: '4rem' }}>
              Tech
            </div>
          </button>


          <button class="mx-1 flex flex-col items-center bg-sky-700 p-2 hover:bg-sky-900 md:flex-row md:rounded-md">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="border-2 flex w-10 h-10 rounded-full bg-indigo-200 md:h-10 md:w-10" ></img>
            <div class="truncate mx-2 -my-1 p-2 text-sm font-semibold md:ml-1  text-white overflow-hidden" style={{ maxWidth: '5rem' }}>
              Game
            </div>
          </button>

          <button class="mx-1 flex flex-col items-center bg-sky-700 p-2 hover:bg-sky-900 md:flex-row md:rounded-md">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="border-2 flex w-10 h-10 rounded-full bg-indigo-200 md:h-10 md:w-10" ></img>
            <div class="truncate mx-2 -my-1 p-2 text-sm font-semibold md:ml-1  text-white overflow-hidden" style={{ maxWidth: '5rem' }}>
              Self help
            </div>
          </button>

          <button class="mx-1 flex flex-col items-center bg-sky-700 p-2 hover:bg-sky-900 md:flex-row md:rounded-md">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="border-2 flex w-10 h-10 rounded-full bg-indigo-200 md:h-10 md:w-10" ></img>
            <div class="truncate mx-2 -my-1 p-2 text-sm font-semibold md:ml-1  text-white overflow-hidden" style={{ maxWidth: '5rem' }}>
              Books
            </div>
          </button>
        </div>
        <div class="mt-6 flex flex-row items-center justify-between text-xs">
          <span class="font-bold text-white">Messages</span>
        </div>
        <div class="-mx-2 mt-4 flex flex-row overflow-x-auto md:flex-col">
          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Sidebar