import { useState, useEffect } from "react"

function useWordGame(startingTime: number = 30) {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isToStart, setIsToStart] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    function calculateWordCount(text: string) {
        const arrWords = text.trim().split(" ")
        return arrWords.filter(word => word !== "").length
    }

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value)
    }
    function startGame() {
        setIsToStart(true)
        setTimeRemaining(startingTime)
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

    return { text, handleChange, timeRemaining, isToStart, startGame, wordCount }
}

export default useWordGame
