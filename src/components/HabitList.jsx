import { HabitListItem } from "./HabitListItem";

// habit list function returns habit list, maps through habits and calls habitlistitem with each habit
export function HabitList({ habits, setHabits }) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b bg-gray-500">
        <h2 className="text-2xl font-semibold text-white">Your Habits</h2>
        <span className="text-white text-sm">
          {habits.length} {habits.length === 1 ? "habit" : "habits"}
        </span>
      </div>

      {habits.length === 0 ? (
        <p className="p-6 text-gray-500 text-center">
          No habits yet. Add one above to get started!
        </p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {habits.map((habit) => (
            <HabitListItem key={habit.id} habit={habit} setHabits={setHabits} />
          ))}
        </ul>
      )}
    </div>
  );
}
