import { useState, useEffect } from "react";

export function Counter({ habit, setHabits }) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === habit.id
          ? { ...h, check: count >= Number(h.goal) }
          : h
      )
    );
  }, [count, habit.id, habit.goal, setHabits]);

  return (
    <div className="text-gray-800 bg-gray-200 font-medium border rounded p-2">
      <p>count: {count}</p>
      <button className="text-green-700 text-3xl" onClick={increase}>
        <i className="fa fa-check-square-o"></i>
      </button>
    </div>
  );
}
