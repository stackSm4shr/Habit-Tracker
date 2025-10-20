import { useState } from "react";

export function Form({ setHabits }) {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    goal: "",
    unit: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formState.title.trim()) return;

    setHabits((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: formState.title.trim(),
        description: formState.description.trim(),
        goal: formState.goal.trim(),
        unit: formState.unit.trim(),
        count: 0,
        check: false,
      },
    ]);

    setFormState({
      title: "",
      description: "",
      goal: "",
      unit: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mb-6 w-full max-w-md"
    >
      <input
        type="text"
        name="title"
        value={formState.title}
        onChange={handleChange}
        placeholder="Enter new habit..."
        className="border rounded px-4 py-2"
      />

      <input
        type="text"
        name="description"
        value={formState.description}
        onChange={handleChange}
        placeholder="Add description..."
        className="border rounded px-4 py-2"
      />

      <input
        type="number"
        name="goal"
        value={formState.goal}
        onChange={handleChange}
        placeholder="Add goal (e.g. 5)"
        className="border rounded px-4 py-2"
      />

      <input
        type="text"
        name="unit"
        value={formState.unit}
        onChange={handleChange}
        placeholder="Add unit (e.g. pages, pushups, minutes...)"
        className="border rounded px-4 py-2"
      />

      <button
        type="submit"
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
      >
        Add Habit
      </button>
    </form>
  );
}
