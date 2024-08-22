const Form = ({ type }) => {
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
  return (
    <div>
      <h1>Form</h1>
      <form>
        <div>
          <label>Enter the {type} to convert</label>
          <input type="number" placeholder="300" />
        </div>
        <div>
          <label>Unit to convert from</label>
          <select>
            {Object.entries(unities[type]).map(([key, value]) => (
              <option key={key} value={value}>{key}</option>
            ))}
          </select>
        </div>
        <div>
            <label>Unit to convert to</label>
            <select>
                {Object.entries(unities[type]).map(([key, value]) => (
                    <option key={key} value={value}>{key}</option>
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
