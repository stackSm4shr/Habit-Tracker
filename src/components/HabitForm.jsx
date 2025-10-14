import { useState } from "react";

export function Form({ setHabits }) {
  const [formState, setFormState] = useState("");

  function handleChange(e) {
    setFormState(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formState.trim()) return;
    setHabits((prev) => [...prev, { id: Date.now(), title: formState.trim() }]);
    setFormState("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-2 mb-6 w-full max-w-md"
    >
      <input
        type="text"
        value={formState}
        onChange={handleChange}
        placeholder="Enter new habit..."
        className="flex-grow border rounded px-4 py-2"
      />
      <button className="bg-gray-500 text-white px-4 py-2 rounded">
        Add Habit
      </button>
    </form>
  );
}
