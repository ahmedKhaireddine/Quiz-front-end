import { useEffect } from "react"

const useTitle = (title) => {
  useEffect(() => {
      document.title = `${title} - Quiz`
  }, [title])

  return null
}

export default useTitle
