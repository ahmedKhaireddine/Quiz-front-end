import { useCallback, useEffect, useState } from "react"

const useTimer = ({
  endTime = 0,
  onTimeOver,
  order = "INCREMENTAL",
}) => {
  const [time, setTime] = useState(null)

  const start = useCallback((duration) => {
    setTime(duration)
  }, [])

  useEffect(() => {
    if (typeof onTimeOver === "function" && time === endTime) {
      onTimeOver()
    }
  }, [endTime, onTimeOver, time])

  useEffect(() => {
    let interval = null
    let newTime = 0

    if (time > 0) {
      interval = setInterval(() => {
        newTime = order === "DECREMENTAL" ? time - 1 : time + 1
        setTime(newTime)
      }, 1000)
    } else {
      setTime(null)
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [endTime, onTimeOver, order, time])

  return { start, time }
}

export default useTimer
