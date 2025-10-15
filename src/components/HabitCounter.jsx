import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div className="text-gray-800 bg-gray-200 font-medium border rounded p-2">
      <p>count: {count}</p>
      <button className="text-green-700 text-3xl" onClick={increase}>
        <i className="fa fa-check-square-o"></i>
      </button>
    </div>
  );
}
