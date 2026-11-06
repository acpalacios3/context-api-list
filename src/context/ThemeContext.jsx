import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useLocalStorage("theme", "light");

    const toggleTheme = () => {
        setTheme(prevTheme =>
            prevTheme === "light" ? "dark" : "light"
        );
    };

    return (
        // theme: the current theme, toggleTheme: change the theme.
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
