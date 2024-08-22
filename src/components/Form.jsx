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
    <div className="p-6 space-y-6 md:space-y-8 sm:p-8">
      <form onSubmit={calculate}>
        <div className="space-y-6 md:space-y-8 mb-10">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-white">
              Enter the {type} to convert
            </label>
            <input
              value={value}
              type="number"
              placeholder="300"
              onChange={(e) => setValue(e.target.value)}
              className="border rounded-lg w-full p-2.5"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-white">
              Unit to convert from
            </label>
            <select
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              className="rounded-lg w-full border border-gray-600 placeholder-gray-400 p-2.5"
            >
              {Object.entries(unities[type]).map(([key, value]) => (
                <option key={key} value={value}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-white">
              Unit to convert to
            </label>
            <select
              onChange={(e) => setTo(e.target.value)}
              value={to}
              className="rounded-lg w-full border border-gray-600 placeholder-gray-400 p-2.5"
            >
              {Object.entries(unities[type]).map(([key, value]) => (
                <option key={key} value={value}>
                  {key}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <button className="text-sm rounded-lg bg-blue-600 w-[70%] text-white font-medium px-5 py-2.5">
            Convert
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
