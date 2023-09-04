import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className='h-screen pt-36 '>
    <div class="flex bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8 mx-auto max-w-sm lg:max-w-4xl">
        <img class="hidden lg:block lg:w-1/2 bg-cover"
            src="https://i.pinimg.com/originals/5d/52/bf/5d52bf896566c30dfcfc603b0e67aed2.gif">
        </img>
        <div class="w-full px-8 py-5 lg:w-1/2">
            <h2 class="text-3xl font-bold text-red-400 text-center">Login</h2>

           
            <div class="mt-4">
                <label class="block text-red-400 text-sm font-bold mb-2">Email Address</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-red-400 text-sm font-bold mb-2">Password</label>
                    <a href="#" class="text-xs text-white">Forgot Password?</a>
                </div>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            <div class="mt-8">
                <button class="bg-red-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-600">Login</button>
            </div>
            <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 md:w-1/4"></span>
                <Link to="/signup" class="text-xs text-red-500 uppercase">or sign up</Link>
                <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Login