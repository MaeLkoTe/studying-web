import { useEffect, useState } from "react"

import HabitForm from "./components/HabitFrom";
import HabitList from "./components/HabitList";
import type { Habit } from "./types/types";
import DefaultSelect from "./components/UI/Select/DefaultSelect";


function App() {
    const [habitText, setHabitText] = useState('');
    const [habits, setHabits] = useState<Habit[]>([]);
    const [selectedSort, setSelectedSort] = useState('')

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
    
    useEffect(() => {
        const storedHabits = localStorage.getItem("habits");
        if (storedHabits) {
            setHabits(JSON.parse(storedHabits));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits));
        console.log("Saved to localStorage");
    }, [habits]);



    function deleteHabit(id: number){
        setHabits(prev => prev.filter((habit) => habit.id !== id))
    }

    function sortPosts(sort: string){
        setSelectedSort(sort);
        setHabits(prev => [...prev].sort((a, b) => {
            if(sort === "title"){
                return a.title.localeCompare(b.title);
            }
            if(sort === "status"){
                return Number(b.isCompleted) - Number(a.isCompleted);
            }
            return 0;
        }));
    }

    return (
    <div className="max-w-xl mx-auto mt-10">
        <h1 className="text-3xl">Habit Tracker</h1>
        <HabitForm 
            habitText={habitText}
            handleChange={(e) => setHabitText(e.target.value)} 
            handleAddSubmit={handleAddSubmit}
        />
        <DefaultSelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Sort by"
            options={[
                {value: "title", name: "Sort by Title"},
                {value: "status", name: "Sort by Status"}
            ]}
        />
        <HabitList
            habits={habits}
            onToggle={changeHabitStatus}
            onDelete={deleteHabit}
        />
        
    </div>
)}

export default App;