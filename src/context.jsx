import React, { useState,useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children})=>{
	const [isSidebarOpen,setIsSidebarOpen] = useState(false);
	const [isSidebarLimite,setIsSidebarLimite] = useState(false);
	const openSidebar = ()=>{
		setIsSidebarOpen(true);
	}
	const closeSidebar =()=>{
		setIsSidebarOpen(false);
	}

	const unLimitSidebar=()=>{
		setIsSidebarLimite(false);
	}
	const limiteSidebar=()=>{
		setIsSidebarLimite(true);
	}

	return(
		<AppContext.Provider value={{
			isSidebarOpen,
			openSidebar,
			closeSidebar,
			isSidebarLimite,
			unLimitSidebar,
			limiteSidebar
		}}>
			{children}
		</AppContext.Provider>
	)
}

// custome hook 
export const useGlobalContext = ()=>{
	return useContext(AppContext)
}

export {AppContext,AppProvider}