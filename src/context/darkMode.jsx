import { createContext, useState } from "react";

export const DarkModeContext=createContext()

export const DarkModeContextProvider=({childrend})=>{

    const [darkMode,setDarkMode]=useState(localStorage.getItem("darkMode")|| false);

    const toggle=()=>{
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode)
    },[darkMode]);

    return (
        <DarkModeContextProvider value={{darkMode,toggle}}>{children}</DarkModeContextProvider>
    )
}

