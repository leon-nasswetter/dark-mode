import useLocalStorage from "./useLocalStorage"

function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage("dark")

    return [darkMode, setDarkMode]
}

export default useDarkMode;