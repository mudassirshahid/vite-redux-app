import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(true)
    const handleTheme = () => {
        setTheme(!theme)
    }
    return (
    <ThemeContext.Provider value={{theme, handleTheme}}>
        <div className={theme ? "darkTheme" : "lightTheme"}>
            {children}
        </div>
    </ThemeContext.Provider>
     )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}