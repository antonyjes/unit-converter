import { useState } from "react";

const unities = {
  length: {
    Kilometer: "km",
    Meter: "m",
    Centimeter: "cm",
    Millimeter: "mm",
    Mile: "mi",
    Yard: "yd",
    Foot: "ft",
    Inch: "in",
  },
  weight: {
    Kilogram: "kg",
    Gram: "g",
    Milligram: "mg",
    Pound: "lb",
    Ounce: "oz",
  },
  temperature: { Celsius: "°C", Fahrenheit: "°F", Kelvin: "K" },
};

const values = {
  length: {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  },

  weight: {
    kg: 1000,
    g: 1,
    mg: 0.001,
    lb: 0.453592,
    oz: 0.0283495,
  },
  temperature: { "°C": 1, "°F": 33.8, K: 274.15 },
};

const Form = ({ type }) => {
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    console.log(value, from, to);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={calculate}>
        <div>
          <label>Enter the {type} to convert</label>
          <input
            value={value}
            type="number"
            placeholder="300"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <label>Unit to convert from</label>
          <select onChange={(e) => setFrom(e.target.value)} value={from}>
            {Object.entries(unities[type]).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Unit to convert to</label>
          <select onChange={(e) => setTo(e.target.value)} value={to}>
            {Object.entries(unities[type]).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button>Convert</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
