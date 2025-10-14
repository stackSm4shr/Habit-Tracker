import data from "./data.json";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/HabitForm";
import { HabitList } from "./components/HabitList";

export function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : data;
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <Header />
      <Form setHabits={setHabits} />
      <HabitList habits={habits} />
    </div>
  );
}
