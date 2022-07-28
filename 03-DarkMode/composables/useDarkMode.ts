const useDarkMode =()=>{
    const isDarkMode = useState("darkmode", ()=>false)
    const toggleDarkMode=()=>{
        isDarkMode.value  = !isDarkMode.value
    }
    return {
        isDarkMode,
        toggleDarkMode
    }
}


export default useDarkMode;