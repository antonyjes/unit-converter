const Result = ({ value, from, to, result, setResultPanel }) => {
  return (
    <div className="justify-center items-center flex">
      <div className="relative w-full max-w-md rounded-lg shadow border bg-gray-800 border-gray-700 p-4">
        {/* Modal body */}
        <div className="relative p-6 z-10">
          <p className="text-2xl font-medium text-white">
            Result of your calculation:
          </p>
          <p className="text-3xl font-medium text-white">
            {value} {from} = {result} {to}
          </p>
        </div>
        {/* Modal footer */}
        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
          <button
            className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setResultPanel(false)}
          >
            Back to the converter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
