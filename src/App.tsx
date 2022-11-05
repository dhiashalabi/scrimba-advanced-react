import "./App.css"
import useWordGame from "./useWordGame"

function App() {
  const { text, handleChange, timeRemaining, isToStart, startGame, wordCount } = useWordGame(5)
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
