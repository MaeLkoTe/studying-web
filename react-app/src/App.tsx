import { useState } from "react"

import HabitForm from "./components/HabitFrom";
import HabitList from "./components/HabitList";
import type { Habit } from "./types/types";


function App() {
    const [habitText, setHabitText] = useState('');
    const [habits, setHabits] = useState<Habit[]>([]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setHabitText(e.target.value);
    }

    function handleAddSubmit(){
        const trimmedText = habitText.trim();
        if(!trimmedText){
            return 
        }

        const id = String(Date.now()).slice(-5);
        const newHabit: Habit = {
            id: Number(id),
            title: trimmedText,
            completed: false
        }

        setHabits([...habits, newHabit]);
        setHabitText("");
    }

    return (
    <div className="max-w-xl mx-auto mt-10">
        <h1 className="text-3xl">Habit Tracker</h1>
        <HabitForm 
            habitText={habitText}
            handleChange={handleChange} 
            handleAddSubmit={handleAddSubmit}
        />
        <HabitList
            habits={habits}
        />
        
    </div>
)}

export default App;