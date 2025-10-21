import { useState, useEffect } from "react";

// Counter Function
export function Counter({ habit, setHabits }) {
  const [count, setCount] = useState(habit.count || 0);

  // Increase the count
  function increase() {
    setCount((prev) => prev + 1);
  }

  // Reset the count
  function reset() {
    setCount(0);
  }

  // Update habit state state
  useEffect(() => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === habit.id
          ? {
              ...h,
              count,
              check: count >= Number(h.goal),
            }
          : h
      )
    );
  }, [count, habit.id, habit.goal, setHabits]);

  // return div with counter and buttons
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
      <p className="text-gray-700 font-medium mb-2">Count: {count}</p>

      <div className="flex gap-3">
        <button
          onClick={increase}
          className="text-4xl hover:scale-110 transition-transform duration-150"
          title="Mark progress"
        >
          ✅
        </button>

        <button
          onClick={reset}
          className="text-2xl hover:scale-110 transition-transform duration-150"
          title="Reset progress"
        >
          🔁
        </button>
      </div>
    </div>
  );
}
