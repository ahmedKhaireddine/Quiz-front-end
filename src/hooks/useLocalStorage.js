import { useCallback, useState } from "react"

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return initialValue

    try {
      const item = window.localStorage.getItem(key)

      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = useCallback((valueToStore) => {
    try {
      setStoredValue(valueToStore)

      if (typeof window !== "undefined")
        window.localStorage.setItem(key, JSON.stringify(valueToStore))

    } catch (error) {
      console.log(error)
    }
  }, [key, storedValue])

  return [storedValue, setValue]
}