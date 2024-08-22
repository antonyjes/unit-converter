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
    m: 1,
    cm: 100,
    mm: 1000,
    mi: 0.000621371,
    yd: 1.0936133,
    ft: 3.2808399,
    in: 39.3700787,
    km: 0.001,
  },

  weight: {
    g: 1,
    mg: 1000,
    lb: 0.00220462,
    oz: 0.035274,
    kg: 0.001,
  },
  temperature: { "°C": 1, "°F": 33.8, K: 274.15 },
};

const Form = ({ type }) => {
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    if (type == "length") {
      const valueInMeters = value * (1 / values.length[from]);
      const finalValue = valueInMeters * values.length[to];
      console.log(finalValue);
    } else if (type == "weight") {
      const valueInGrams = value * (1 / values.weight[from]);
      const finalValue = valueInGrams * values.weight[to];
      console.log(finalValue);
    } else if (type == "temperature") {
      const valueInCelsius = value * (1 / values.temperature[from]);
      const finalValue = valueInCelsius * values.temperature[to];
      console.log(finalValue);
    }
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
              required
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
              required
            >
              <option>Select a unit</option>
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
              required
            >
              <option>Select a unit</option>
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
