import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav class="fixed w-full z-20 top-0 left-0 bg-black border-gray-200 px-4">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <Link to="/" class="flex items-center">
            <a class='text-2xl text-white bx bx-message-dots'></a>
            <span class="self-center text-white text-2xl font-semibold whitespace-nowrap p-2"> Chitchat</span>
          </Link>
          <button
            id="menuToggleButton"
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only ">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div
            class={`${isMenuOpen ? 'block' : 'hidden'
              } w-full md:block md:w-auto`}
            id="navbar-default" 
          >
            <ul class=" font-medium flex flex-col p-4  mt-2 md:flex-row md:space-x-8 ">
              <li>
                <Link to="/" class="my-px max-sm:bg-red-600 block py-2 rounded px-2 text-white md:p-0" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about" class="my-pe max-sm:bg-red-600 block py-2 rounded px-2 text-white md:p-0 md:text-white">About</Link>
              </li>
              <li>
                <Link to="/chat" class="my-px max-sm:bg-red-600 block py-2 rounded px-2 text-white  md:p-0 md:text-white">Chat</Link>
              </li>
              <li>
                <div class="dropdown">
                  <button class="my-px bg-red-700 text-white font-semibold  px-8 rounded items-center">
                    <span>More <i class='font-semibold bx bx-chevron-down'></i></span>
                  </button>
                  <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <Link to="/login" class="bg-gray-700 text-white hover:bg-gray-400 py-2 px-8 block whitespace-no-wrap">Login</Link>         
                  <Link to="/signup" class="bg-gray-700 text-white hover:bg-gray-400 py-2 px-8 block whitespace-no-wrap">Sign up</Link>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>



    </div>
  );
};

export default Navigation;