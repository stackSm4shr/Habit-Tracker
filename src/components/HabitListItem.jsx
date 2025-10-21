import { Counter } from "./HabitCounter";

// habbitlistitem function, returns a list item and calls counter with (habbits and sethabbits)
export function HabitListItem({ habit, setHabits }) {
  return (
    <li
      className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 rounded-xl border transition-all duration-300
        ${
          habit.check
            ? "bg-green-100 border-green-300"
            : "bg-white border-gray-200 hover:bg-gray-50"
        }`}
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {habit.title}
        </h3>
        {habit.description && (
          <p className="text-sm text-gray-500 mb-2">{habit.description}</p>
        )}

        <div className="flex flex-wrap gap-2 text-sm text-gray-700">
          <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">
            🎯 Goal: {habit.goal} {habit.unit}
          </span>
          <span
            className={`px-3 py-1 rounded-full border ${
              habit.check
                ? "bg-gray-100 border-gray-200 text-green-700"
                : "bg-yellow-50 border-yellow-200 text-yellow-700"
            }`}
          >
            {habit.check ? "✅ Done" : "⏳ In Progress"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Counter habit={habit} setHabits={setHabits} />
      </div>
    </li>
  );
}
