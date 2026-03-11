import type { HabitListProps } from '../types/types'
import HabitItem from './HabitItem';


function HabitList(props: HabitListProps){
    const { habits } = props;

    function renderHabits() {
        if (!habits.length){
            return <p>No Habits yet</p>
        }
        console.log(habits);
        return <p>Habit count: {habits.length}</p>
    }

    return (
        <div>
            {renderHabits()}
            <ul>
                {habits.map(habit => (
                    <HabitItem
                        {...habit}
                    />
                    )
                )}
            </ul>
        </div>
    )
}

export default HabitList;