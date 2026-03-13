import type { HabitItemProps } from "../types/types";
import PurpleButton from "./UI/Button/PurpleButton"

function HabitItem(props: HabitItemProps) {
    const { habit, onToggle: onToogle, onDelete } = props;
    const {title, isCompleted} = habit;

    return (
        <li
            className="
                flex gap-2 items-center justify-between
                border p-2 rounded
                ">
            <p 
                className={isCompleted ? "line-through" : ""}
                >{title}</p>
            <p>{isCompleted ? "Done" : "In progress"}</p>
            <div>
                <PurpleButton onClick={() => onToogle(habit.id)}>
                Change Status
                </PurpleButton>
                <PurpleButton onClick={() => onDelete(habit.id)}>
                Delete Habit
                </PurpleButton>
            </div>
        </li>
    )
}

export default HabitItem;