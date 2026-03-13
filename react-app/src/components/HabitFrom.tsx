import type { HabitFormProps } from "../types/types";
import PurpleButton from "./UI/Button/PurpleButton"

function HabitForm(props: HabitFormProps) {
    const { habitText, handleChange, handleAddSubmit } = props;

    return(
        <article>
            <input 
                placeholder="Input Habit title"
                onChange={handleChange}
                value={habitText}
                className="px-1 mr-2 border-2" type="text"/>
            <PurpleButton
                onClick={handleAddSubmit}>
                Add Habbit
            </PurpleButton>
        </article>
    )
}

export default HabitForm;