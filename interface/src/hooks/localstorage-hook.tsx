const useLocalStorage = () => {
    
    const set = (key: string, value: object) => 
        localStorage.setItem(key, JSON.stringify(value))

    const get = (key: string) => 
        localStorage.getItem(key)
    
    return {
        set,
        get
    }
}

export default useLocalStorage;