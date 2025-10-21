import { useState } from "react";

// Form Function with useState
export function Form({ setHabits }) {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    goal: "",
    unit: "",
  });

  //change handler, 
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  //submit handler, prevents reloading 
  function handleSubmit(e) {
    e.preventDefault();

    // if empty return
    if (!formState.title.trim()) return;

    // else spread prev habits and add new habit to habits
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

    // reset form to empty
    setFormState({
      title: "",
      description: "",
      goal: "",
      unit: "",
    });
  }

  // return add habit form
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Add a New Habit
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
          placeholder="Habit title (Read, Exercise, Meditate...)"
          className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
        />

        <input
          type="text"
          name="description"
          value={formState.description}
          onChange={handleChange}
          placeholder="Description"
          className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
        />

        <div className="flex gap-4">
          <input
            type="number"
            name="goal"
            value={formState.goal}
            onChange={handleChange}
            placeholder="Goal (number)"
            className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
          />

          <input
            type="text"
            name="unit"
            value={formState.unit}
            onChange={handleChange}
            placeholder="Unit (p/Day, km/Week, h/Day...)"
            className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-xl transition shadow-sm hover:shadow-md"
        >
          ➕ Add Habit
        </button>
      </div>
    </form>
  );
}
