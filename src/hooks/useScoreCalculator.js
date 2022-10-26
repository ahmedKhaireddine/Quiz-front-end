import { useEffect, useState } from "react"

const useScoreCalculator = (answers) => {
  const [score, setScore] = useState(0)

  useEffect(() => {
    let sum = 0

    if (answers.length > 0)
      sum = answers.map(answer => answer.weight).reduce((sum, value) => sum + value)

    setScore(sum)
  }, [answers])

  return score
}

export default useScoreCalculator