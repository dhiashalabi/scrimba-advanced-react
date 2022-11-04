import React from "react"
import Menu from "./components/Menu"
import Favorite from "./components/Favorite"
import "./App.css"

function App(props: any) {
  console.log(props)
  return (
    <div>
      <Menu />
      <hr />
      <Favorite />
    </div>
  )
}

export default App
