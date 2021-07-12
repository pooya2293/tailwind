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
  ChevronLeftIcon,
  ChevronDoubleRightIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon,
  HomeIcon
 } from '@heroicons/react/solid'

import { DiCss3,DiJavascript,DiReact } from "react-icons/di";

const NavBar = ()=>{
 return(
    <aside className="sidebar show-sidebar sm:bg-green-100 sm:w-36 sm:float-right sm:h-screen sm:relative">
    <div id="counter" className="hidden relative bg-indigo-500 w-6 h-4 text-white rounded-full justify-center top-1 sm:flex sm:left-1">
      <ChevronDoubleRightIcon className="hidden sm:block h-4 w-4 text-white" />
    </div>
      <header className="flex h-12 justify-between items-center px-2 text-gray-600 sm:flex-col" >
        <h2 className="text-md text-gray-500 sm:hidden">Logo.ir</h2>
        <div id="smHeader" className="flex w-24 justify-between items-center relative sm:top-1 sm:w-28 sm:-space-x-3">
          <div id="counter" className="absolute left-3 bg-red-600 w-3 h-3 font-bold text-white rounded-full flex items-center justify-center px-1 top-0 sm:top-2 sm:left-1">25</div>
          <MailIcon className="h-6 w-6 " />
          <div id="prof" className="h-8 w-8 rounded-full overflow-hidden sm:h-12 sm:w-12">
          <div id="profmode" className="absolute left-14 bg-gray-400 w-2 h-2 text-white rounded-full sm:left-24"></div>
            <img src={prof} alt="" />
          </div>
          <MenuIcon className="h-6 w-6 sm:hidden"/>
        </div>
      </header>
      <div id="linksHolder" className="relative px-2 h-96">
      <ul id="links">
          <li className="flex items-center w-full h-10 bg-indigo-500 rounded px-2 mt-2 text-white sm:h-7">
            <div id="icon" className="h-8 w-10 bg-white rounded-lg flex items-center justify-center sm:h-5 sm:w-6 sm:rounded">
              <HomeIcon className="w-6 h-6 text-indigo-500 sm:h-4 sm:w-4"/>
            </div>
            <a href="#" className="px-2 w-full sm:text-xs">خانه</a>
          </li>
          <div className="border-b border-gray-300 mt-2 text-gray-600">
            <span className="font-bold">پروژه ها</span>
          </div>
          <li className="flex items-center border border-indigo-500 w-full h-10 rounded px-2 my-2 text-gray-600 sm:h-7">
            <div id="icon" className="h-8 w-10 bg-indigo-500 rounded-lg flex items-center justify-center sm:h-5 sm:w-6 sm:rounded">
              <DiCss3 className="w-6 h-6 text-white sm:h-4 sm:w-4"/>
            </div>
            <a href="#" className="px-2 w-full sm:text-xs">CSS</a>
          </li>
          <li className="flex items-center border border-indigo-500 w-full h-10 rounded px-2 my-2 text-gray-600 sm:h-7">
            <div id="icon" className="h-8 w-10 bg-indigo-500 rounded-lg flex items-center justify-center sm:h-5 sm:w-6 sm:rounded">
              <DiJavascript className="w-6 h-6 text-white sm:h-4 sm:w-4"/>
            </div>
            <a href="#" className="px-2 w-full sm:text-xs">JavaScript</a>
          </li>
          <li className="flex items-center border border-indigo-500 w-full h-10 rounded px-2 my-2 text-gray-600 sm:h-7">
            <div id="icon" className="h-8 w-10 bg-indigo-500 rounded-lg flex items-center justify-center sm:h-5 sm:w-6 sm:rounded">
              <DiReact className="w-6 h-6 text-white sm:h-4 sm:w-4"/>
            </div>
            <a href="#" className="px-2 w-full sm:text-xs">React</a>
          </li>
          <li className="flex items-center w-full h-10 bg-indigo-500 rounded px-2 mt-2 text-white sm:h-7">
            <div id="icon" className="h-8 w-10 bg-white rounded-lg flex items-center justify-center sm:h-5 sm:w-6 sm:rounded">
              <HomeIcon className="w-6 h-6 text-indigo-500 sm:h-4 sm:w-4"/>
            </div>
            <a href="#" className="px-2 w-full sm:text-xs">بیشتر</a>
            <ChevronLeftIcon className="w-5 h-5 text-white absolute left-2 sm:w-3 sm:h-3"/> 
          </li>
        </ul>
        <div className="flex mb-1 absolute bottom-0">
          <button className="btn btn-primary w-full sm:p text-center mt-1">ویرایش</button>
          <button className="btn btn-red w-full text-center mt-1">خروج</button>
        </div>
        </div>
    </aside>
  )
}

export default NavBar;