import "./App.css"
import Example from "./components/Example"

function App(props: any) {
  console.log(props)
  return (
    <div>
      <Example render={
        function (number: number) {
          return <h1>{number >= 0 ? "Positive" : "Negative"}</h1>
        }
      }
      />
    </div>
  )
}

export default App
