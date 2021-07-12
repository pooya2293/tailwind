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
  ChevronLeftIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon,
  HomeIcon
 } from '@heroicons/react/solid'

import { DiCss3,DiJavascript,DiReact } from "react-icons/di";

const NavBar = ()=>{
 return(
    <aside className="sidebar show-sidebar">
      <header className="flex h-12 justify-between items-center px-1 text-gray-600" >
        <h2 className="text-md text-gray-500">Logo.ir</h2>
        <div className="flex w-24 justify-between items-center relative">
          <div id="counter" className="absolute left-3 bg-red-600 w-3 h-3 font-bold text-white rounded-full flex items-center justify-center px-1">25</div>
          <MailIcon className="h-6 w-6 " />
          <div className="profile h-8 w-8 rounded-full overflow-hidden">
          <div id="profmode" className="absolute left-14 bg-gray-400 w-2 h-2 text-white rounded-full"></div>
            <img src={prof} alt="" />
          </div>
          <MenuIcon className="h-6 w-6" />
        </div>
      </header>
      <div id="linksHolder" className="flex flex-col justify-between px-2 h-screen">
      <ul id="links">
          <li className="flex items-center w-full h-10 bg-indigo-500 rounded px-2 mt-2 text-white">
            <div id="icon" className="h-8 w-10 bg-white rounded-lg flex items-center justify-center">
              <HomeIcon className="w-6 h-6 text-indigo-500"/>
            </div>
            <a href="#" className="px-2 w-full">خانه</a>
          </li>
          <div className="border-b border-gray-300 mt-2 text-gray-600">
            <span className="font-bold">پروژه ها</span>
          </div>
          <li className="flex items-center border border-indigo-500 w-full h-10 rounded px-2 my-2 text-gray-600">
            <div id="icon" className="h-8 w-10 bg-indigo-500 rounded-lg flex items-center justify-center">
              <DiCss3 className="w-6 h-6 text-white"/>
            </div>
            <a href="#" className="px-2 w-full">CSS</a>
          </li>
          <li className="flex items-center border border-indigo-500 w-full h-10 rounded px-2 my-2 text-gray-600">
            <div id="icon" className="h-8 w-10 bg-indigo-500 rounded-lg flex items-center justify-center">
              <DiJavascript className="w-6 h-6 text-white"/>
            </div>
            <a href="#" className="px-2 w-full">JavaScript</a>
          </li>
          <li className="flex items-center border border-indigo-500 w-full h-10 rounded px-2 my-2 text-gray-600">
            <div id="icon" className="h-8 w-10 bg-indigo-500 rounded-lg flex items-center justify-center">
              <DiReact className="w-6 h-6 text-white"/>
            </div>
            <a href="#" className="px-2 w-full">React</a>
          </li>
          <li className="flex items-center w-full h-10 bg-indigo-500 rounded px-2 mt-2 text-white">
            <div id="icon" className="h-8 w-10 bg-white rounded-lg flex items-center justify-center">
              <HomeIcon className="w-6 h-6 text-indigo-500"/>
            </div>
            <a href="#" className="px-2 w-full">بیشتر</a>
            <ChevronLeftIcon className="w-6 h-6 text-white"/> 
          </li>
        </ul>
        <div className="mb-1">
          <button className="btn btn-primary w-full text-center mt-1">ویرایش</button>
          <button className="btn btn-red w-full text-center mt-1">خروج</button>
        </div>
        </div>
    </aside>
  )
}

export default NavBar;