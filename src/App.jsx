import data from "./data.json";
import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/HabitForm";
import { HabitList } from "./components/HabitList";

export function App() {
  const [habits, setHabits] = useState(data);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <Header />
      <Form setHabits={setHabits} />
      <HabitList habits={habits} />
    </div>
  );
}
