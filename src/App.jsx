import { useState } from "react"
import Form from "./components/Form"

function App() {
  const [type, setType] = useState("length")

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1>Unit Converter</h1>
      <nav>
        <ul>
          <li><a onClick={() => setType("length")}>Length</a></li>
          <li><a onClick={() => setType("weight")}>Weight</a></li>
          <li><a onClick={() => setType("temperature")}>Temperature</a></li>
        </ul>
      </nav>
      <Form type={type} />     
    </div>
  )
}

export default App
