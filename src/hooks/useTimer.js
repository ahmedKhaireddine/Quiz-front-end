import { useCallback, useEffect, useState } from "react"

export const useTimer = ({
  endTime = 0,
  onTimeOver,
  order = "INCREMENTAL",
}) => {
  const [time, setTime] = useState(null)

  const start = useCallback((duration) => {
    setTime(duration)
  }, [])

  useEffect(() => {
    let interval = null
    let newTime = 0

    if (time > 0) {
      interval = setInterval(() => {
        newTime = order === "DECREMENTAL" ? time - 1 : time + 1
        setTime(newTime)
      }, 1000)
    } else {
      if (typeof onTimeOver === "function" && time === endTime) {
        onTimeOver()
        clearInterval(interval)
      }
    }

    console.log(endTime)
    
    return () => clearInterval(interval)
  }, [endTime, onTimeOver, order, time])

  return { time, start }
}
