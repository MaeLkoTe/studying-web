import type { Habit } from "../types/types";

function HabitItem(props: Habit) {
    const {id, title} = props;

    return (
        <li key={id}>{title}</li>
    )
}

export default HabitItem;