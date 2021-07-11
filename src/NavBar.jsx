/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import ReactDOM from 'react-dom';
/* import icons */
import { Popover, Transition } from '@headlessui/react'
import prof from './img/prof.jpg'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  MailIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'


const NavBar = ()=>{
 return(
    <aside className="sidebar show-sidebar">
      <header className="flex h-12 justify-between items-center px-1 text-gray-600" >
        <h2 className="text-2xl text-gray-500">Logo.ir</h2>
        <div className="flex w-40 justify-between relative">
          <div id="counter" className="absolute left-6  bg-red-600 w-5 h-5 font-bold text-white rounded-full flex items-center justify-center px-1">99+</div>
          <MailIcon className="h-10 w-10 " />
          <div className="profile h-10 w-10 rounded-full overflow-hidden">
            <img src={prof} alt="" />
          </div>
          <MenuIcon className="h-10 w-10" />
        </div>
      </header>
    </aside>
  )
}

export default NavBar;