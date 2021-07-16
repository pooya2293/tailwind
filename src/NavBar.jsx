/* This example requires Tailwind CSS v2.0+ */
import React, { useContext,useRef,useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import {AppContext,useGlobalContext} from './context';
/* import icons */
import { Transition } from '@headlessui/react'
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
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon,
  HomeIcon,ChatIcon,
 } from '@heroicons/react/solid'
 import { FaUserTimes,FaUserEdit } from "react-icons/fa";
import { DiCss3,DiJavascript,DiReact } from "react-icons/di";

const NavBar = ()=>{

  const {isSidebarOpen,openSidebar,closeSidebar,isSidebarLimite,unLimitSidebar,limiteSidebar} = useGlobalContext();
  const linksHolderRef = useRef(null);
  const linksRef = useRef(null);
  const btnHolderRef = useRef(null);
  const data = useGlobalContext();
  const  [winWidth,setWinWidth] = useState(window.innerWidth);
  useEffect(()=>{
    // if click menu bar show links
    const linksHeight = linksHolderRef.current.getBoundingClientRect().height;
    if(isSidebarOpen){
      linksHolderRef.current.style.opacity = '100%';
      linksHolderRef.current.style.visibility = 'visible';
    }else {
      linksHolderRef.current.style.opacity = '0';
      linksHolderRef.current.style.visibility = 'hidden';
    }
    // if winWidth bigger than 640px show links
    function handelResize() {
      setWinWidth(window.innerWidth);
    }
    window.addEventListener('resize',handelResize);
    if(winWidth>640){
      linksHolderRef.current.style.opacity = '100%';
      linksHolderRef.current.style.visibility = 'visible';
    }else {
      unLimitSidebar();
    }
    console.log(winWidth);
    return ()=> window.removeEventListener('resize',handelResize);
  },[isSidebarOpen,winWidth])
 return(
    <aside className={`transition-all duration-300 sidebar show-sidebar sm:bg-green-100 sm:float-right sm:h-screen sm:relative ${isSidebarLimite?'sm:w-8':'sm:w-36'}`}>
    <div id="toggleSideBar" className="hidden relative bg-indigo-500 w-6 h-4 text-white rounded-full justify-center top-1 sm:flex sm:left-1 cursor-pointer">
      {isSidebarLimite?<ChevronDoubleLeftIcon className="hidden sm:block h-4 w-5 text-white" onClick={()=>unLimitSidebar()}/>:<ChevronDoubleRightIcon className="hidden sm:block h-4 w-5 text-white" onClick={()=>limiteSidebar()}/>}
    </div>
      <header className="flex h-12 justify-between items-center px-2 text-gray-600 sm:flex-col" >
        <h2 className="text-gray-500 sm:hidden">Logo.ir</h2>
        <div id="smHeader" className={`flex w-24 justify-between items-center relative ${isSidebarLimite?'sm:flex-col-reverse sm:top-2 sm:w-auto':'sm:-space-x-3 sm:w-28 sm:top-1'}`}>
          <div id="counter" className={`absolute left-3 bg-red-600 w-3 h-3 font-bold text-white rounded-full flex items-center justify-center px-1 top-0 ${isSidebarLimite?'sm:top-7 sm:left-5 sm:w-2 sm:h-2 text-minCounter':'sm:top-2 sm:left-1'}`}>25</div>
          <MailIcon className="h-6 w-6 " />
          <div id="prof" className={`transition-all duration-300 h-8 w-8 rounded-full overflow-hidden  ${isSidebarLimite?'sm:w-7 sm:h-7':'sm:h-12 sm:w-12'}`}>
          <div id="profmode" className={`absolute left-14 bg-gray-400 text-white rounded-full ${isSidebarLimite?'w-1 h-1 sm:left-6':'w-2 h-2 sm:left-24'}`}></div>
            <img src={prof} alt="" />
          </div>
          {(isSidebarOpen?
            <XIcon onClick={()=>closeSidebar()} className="h-6 w-6 cursor-pointer sm:hidden" />
            :<MenuIcon onClick={()=>openSidebar()} className="h-6 w-6 cursor-pointer sm:hidden"/>
            )}
        </div>
      </header>
        <div className= {`transition-all duration-700 overflow-hidden ${isSidebarLimite&&''}`} ref={linksHolderRef} >
          <div id="linksHolder" className={`relative ${isSidebarLimite?'px-0':'px-2'}`} >
          <ul id="links" className={`${isSidebarLimite&&'top-1 relative'}`} ref={linksRef}>
              <li className={`flex items-center w-full h-10 rounded mt-2 text-white sm:h-7 ${isSidebarLimite?'justify-center':'px-2 bg-indigo-500'}`}>
                <div id="icon" className="h-8 w-10 bg-white rounded-lg flex items-center justify-center sm:h-5 sm:w-6 sm:rounded">
                  <HomeIcon className="w-6 h-6 text-indigo-500 sm:h-4 sm:w-4"/>
                </div>
                <a href="#" className={`px-2 w-full sm:text-xs ${isSidebarLimite&&'hidden'}`}>خانه</a>
                </li>
              <div className={`border-b border-gray-300 mt-2 text-gray-600 ${isSidebarLimite&&'hidden'}`}>
                <span className="font-bold">پروژه ها</span>
              </div>
              <li className={`flex items-center w-full h-10 rounded text-gray-600 sm:h-7 ${isSidebarLimite?'justify-center my-0':'border px-2 border-indigo-500 my-2'}`}>
                <div id="icon" className="h-8 w-10 bg-indigo-500 rounded-lg flex items-center justify-center sm:h-5 sm:w-6 sm:rounded">
                  <DiCss3 className="w-6 h-6 text-white sm:h-4 sm:w-4"/>
                </div>
                <a href="#" className={`px-2 w-full sm:text-xs ${isSidebarLimite?'hidden':''}`}>CSS</a>
              </li>
              <li className={`flex items-center w-full h-10 rounded text-gray-600 sm:h-7 ${isSidebarLimite?'justify-center my-0':'border px-2 border-indigo-500 my-2'}`}>
                <div id="icon" className="h-8 w-10 bg-indigo-500 rounded-lg flex items-center justify-center sm:h-5 sm:w-6 sm:rounded">
                  <DiJavascript className="w-6 h-6 text-white sm:h-4 sm:w-4"/>
                </div>
                <a href="#" className={`px-2 w-full sm:text-xs ${isSidebarLimite?'hidden':''}`}>JavaScript</a>
              </li>
              <li className={`flex items-center w-full h-10 rounded text-gray-600 sm:h-7 ${isSidebarLimite?'justify-center my-0':'border px-2 border-indigo-500 my-2'}`}>
                <div id="icon" className="h-8 w-10 bg-indigo-500 rounded-lg flex items-center justify-center sm:h-5 sm:w-6 sm:rounded">
                  <DiReact className="w-6 h-6 text-white sm:h-4 sm:w-4"/>
                </div>
                <a href="#" className={`px-2 w-full sm:text-xs ${isSidebarLimite?'hidden':''}`}>React</a>
              </li>
              <li className={`flex items-center w-full h-10 rounded text-white sm:h-7 ${isSidebarLimite?'justify-center my-0':'px-2 bg-indigo-500 my-2'}`}>
                <div id="icon" className="h-8 w-10 bg-white rounded-lg flex items-center justify-center sm:h-5 sm:w-6 sm:rounded">
                  <ChatIcon className="w-6 h-6 text-indigo-500 sm:h-4 sm:w-4"/>
                </div>
                <a href="#" className={`px-2 w-full sm:text-xs ${isSidebarLimite?'hidden':''}`}>بیشتر</a>
                <ChevronLeftIcon className={`w-5 h-5 text-white absolute left-2 sm:w-3 sm:h-3 ${isSidebarLimite?'hidden':''}`} /> 
              </li>
            </ul>
            </div>
            <div id="btnHolder" ref={btnHolderRef} className={`flex flex-col items-center px-3 w-full mb-1 absolute bottom-0 sm:block sm:px-0 sm:w-auto transition-all ${isSidebarLimite?'btnHolderSide sm:mx-1':'btnHolderNav sm:mx-2'}`}>
              <button className={`btn btn-primary sm:p text-center mt-1 ${isSidebarLimite?'btnSide w-6 flex justify-center rounded':'w-full'}`}>
                {isSidebarLimite?<FaUserEdit className="w-5 h-5 text-white sm:w-3 sm:h-3" />:'ویرایش'}
              </button>
              <button className={`btn btn-secondary sm:p text-center mt-1 ${isSidebarLimite?'btnSide w-6 flex justify-center rounded':'w-full'}`}>
              {isSidebarLimite?<FaUserTimes className="w-5 h-5 text-white sm:w-3 sm:h-3" />:'خروج'}
              </button>
            </div>
          </div>
    </aside>
  )
}

export default NavBar;