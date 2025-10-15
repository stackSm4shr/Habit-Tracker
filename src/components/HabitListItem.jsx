import { Counter } from "./HabitCounter";

export function HabitListItem({ habit }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b ">
      <p className="text-gray-800 bg-gray-200 font-medium border rounded p-2">
        Title: {habit.title}
      </p>
      <p className="text-gray-800 bg-gray-200 font-medium border rounded p-2">
        Description: {habit.description}
      </p>
      <p className="text-gray-800 bg-gray-200 font-medium border rounded p-2">
        Goal: {habit.goal}
      </p>
      <p className="text-gray-800 bg-gray-200 font-medium border rounded p-2">
        Unit: {habit.unit}
      </p>
      <Counter />
      <p className="text-gray-800 bg-gray-200 font-medium border rounded p-2">
        Done?: {habit.check === true ? "True" : "False"}
      </p>
    </div>
  );
}
