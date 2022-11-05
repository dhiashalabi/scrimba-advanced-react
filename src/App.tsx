import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const STARTING_TIME = 15
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isToStart, setIsToStart] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value)
  }

  function calculateWordCount(text: string) {
    const arrWords = text.trim().split(" ")
    return arrWords.filter(word => word !== "").length
  }

  function startGame() {
    setIsToStart(true)
    setTimeRemaining(STARTING_TIME)
    setWordCount(0)
    setText("")
  }

  function endGame() {
    setIsToStart(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if (isToStart && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }
    else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isToStart])

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isToStart}
      />
      <h4>Time reminaing: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isToStart}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  )
}

export default App
