import React from 'react'
import icon from '../assets/Football_Icon 1.png'
export const Nav = () => {
  return (
    <nav class="bg-black">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-start">
        <img src={icon} class="h-8 justify-start mr-5" alt="Football Logo" />
        <span class="self-center text-xl whitespace-nowrap dark:text-white">Fantasy Footbal</span>
    </a>
    </div>
  </nav>
  )
}
export default Nav;