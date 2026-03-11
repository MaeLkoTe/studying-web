import type { HabitFormProps } from "../types/types";

function HabitForm(props: HabitFormProps) {
    const { habitText, handleChange, handleAddSubmit } = props;

    return(
        <article>
            <input 
                placeholder="Input Habit title"
                onChange={handleChange}
                value={habitText}
                className="px-1 mr-2 border-2" type="text"/>
            <button 
                onClick={handleAddSubmit}
                className="     px-2 cursor-pointer border-2 rounded-lg 
                                transition-transform duration-300 hover:scale-105 active:scale-98
                                bg-violet-400 text-white">
                Add Habit
            </button>
        </article>
    )
}

export default HabitForm;