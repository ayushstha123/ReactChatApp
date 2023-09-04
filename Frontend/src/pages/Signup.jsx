import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

//for image uploads
const [image,setImage]=useState(null);
const [uploadImage,setUploadImage]=useState(false);
const [previewImage,setPreviewImage]=useState(null);


function validateImage(e){
const file=e.target.files[0];
if(file>1048576){//1mb
return alert("file cannot be more than 1mb");
}
else{
  setImage(file);
  setPreviewImage(URL.createObjectURL(file));
}
}

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div>

      <div class=" h-screen md:flex">
        <div
          class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-red-500 to-red-900 i justify-around items-center hidden">
          <div>
            <h1 class="text-white font-bold text-4xl font-sans">Chitchat</h1>
            <p class="text-white mt-1">The most popular Chat application in the city</p>
          </div>
          <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div class="flex md:w-1/2 px-5 h-screen justify-center pt-16 items-center bg-white">
          <form class="bg-white" onSubmit={handleSubmit}>

            <h1 class="text-gray-800 font-bold text-3xl mb-5">Sign up</h1>
            <div class="flex items-center space-x-6">
              <div class="shrink-0 items-center my-4">
                <img id='preview_img' class="h-16 w-16 object-cover rounded-full" src={ previewImage || "https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"} alt="Current profile photo" />
              </div>
              <label class="block">
                <span class="sr-only">Choose profile photo</span>
                <input type="file" onChange={validateImage} accept='image/jpeg,image/png' class="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100
                "/>
              </label>
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">

              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd" />
              </svg>
              <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd" />
              </svg>
              <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>
            <span class="text-sm ml-2">Already have an account? <Link className='cursor-pointer text-blue-700 underline' to="/login">Login</Link></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup