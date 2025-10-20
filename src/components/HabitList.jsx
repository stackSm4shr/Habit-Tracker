import { HabitListItem } from "./HabitListItem";

export function HabitList({ habits, setHabits }) {
  return (
    <div className="w-full max-w-md bg-white border rounded">
      <h2 className="text-2xl font-semibold p-4 border-b">Habit List</h2>
      {habits.length === 0 ? (
        <p className="p-4 text-gray-500">No habits yet. Add one above!</p>
      ) : (
        habits.map((habit) => (
          <HabitListItem key={habit.id} habit={habit} setHabits={setHabits} />
        ))
      )}
    </div>
  );
}
