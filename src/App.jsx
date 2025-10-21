import data from "./data.json";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/HabitForm";
import { HabitList } from "./components/HabitList";

// app function, first gets habits from localstorage if any else from data.json
export function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : data;
  });

  // if habits change, useEffect saves to local storage 
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // returns header, returns form called with sethabits and returns habitlist called with habits and sethabits
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <Header />
      <Form setHabits={setHabits} />
      <HabitList habits={habits} setHabits={setHabits} />
    </div>
  );
}
