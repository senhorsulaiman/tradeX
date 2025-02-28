import { createContext, useContext, useState } from "react";


const AppContext = createContext();
export const AppProvider=({ children }) => {



    // STATES

    const [isSidebarOpen, SetIsSidebarOpen] = useState(false);
    const [currentNavId, setCurrentNavId] = useState(null);
    const [category, setCategory] = useState('Popular');

    const [items,setItems]=useState([])


    const openSidebar = () => {

        SetIsSidebarOpen(true)
    }
    const toggleSidebar = () => {

        SetIsSidebarOpen(!isSidebarOpen)
    }
    const closeSidebar = () => {

        SetIsSidebarOpen(false)
    }

    return (<AppContext.Provider
        value={{isSidebarOpen, SetIsSidebarOpen, openSidebar, toggleSidebar, closeSidebar, currentNavId, setCurrentNavId,items,setItems,category,setCategory}}
    >         {children}
    </AppContext.Provider>)

}

export const useGlobalContext = () => {

    return useContext(AppContext);
}