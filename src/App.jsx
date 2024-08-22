import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [type, setType] = useState("length");

  return (
    <div className="flex flex-col items-center justify-center md:h-screen lg:py-0 bg-gray-900">
      <h1 className="mb-10 text-3xl font-bold text-white">Unit Converter</h1>
      <nav className="mb-10 w-[40%]">
          <ul className="flex flex-row text-white justify-between">
            <li>
              <a onClick={() => setType("length")} className={`font-semibold hover:text-blue-600 cursor-pointer ${type === "length" ? "text-blue-600" : ""}`}>Length</a>
            </li>
            <li>
              <a onClick={() => setType("weight")} className={`font-semibold hover:text-blue-600 cursor-pointer ${type === "weight" ? "text-blue-600" : ""}`}>Weight</a>
            </li>
            <li>
              <a onClick={() => setType("temperature")} className={`font-semibold hover:text-blue-600 cursor-pointer ${type === "temperature" ? "text-blue-600" : ""}`}>Temperature</a>
            </li>
          </ul>
        </nav>
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">        
        <Form type={type} />
      </div>
    </div>
  );
}

export default App;
