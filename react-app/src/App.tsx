import { useState } from "react"

import HabitForm from "./components/HabitFrom";
import HabitList from "./components/HabitList";
import type { Habit } from "./types/types";


function App() {
    const [habitText, setHabitText] = useState('');
    const [habits, setHabits] = useState<Habit[]>([]);


    function handleAddSubmit(){
        const trimmedText = habitText.trim();
        if(!trimmedText){
            return 
        }

        const id = String(Date.now()).slice(-5);
        const newHabit: Habit = {
            id: Number(id),
            title: trimmedText,
            isCompleted: false
        }

        setHabits([...habits, newHabit]);
        setHabitText("");
    }

    function changeHabitStatus(id: number){
        setHabits(prev => prev.map(function(habit) {
            if(habit.id !== id) return habit;
            return {
                ...habit,
                isCompleted: !habit.isCompleted
            };
            }) 
        )
    }

    function deleteHabit(id: number){
        setHabits(prev => prev.filter((habit) => habit.id !== id))
    }

    return (
    <div className="max-w-xl mx-auto mt-10">
        <h1 className="text-3xl">Habit Tracker</h1>
        <HabitForm 
            habitText={habitText}
            handleChange={(e) => setHabitText(e.target.value)} 
            handleAddSubmit={handleAddSubmit}
        />
        <HabitList
            habits={habits}
            onToggle={changeHabitStatus}
            onDelete={deleteHabit}
        />
        
    </div>
)}

export default App;