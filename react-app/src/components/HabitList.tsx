import type { HabitListProps } from '../types/types'
import HabitItem from './HabitItem';


function HabitList(props: HabitListProps){
    const { habits, onToggle: onToogle, onDelete } = props;

    return (
        <div>
            {habits.length ? <p>Habit count: {habits.length}</p> : <p>No Habits yet</p>}
            <ul className="mt-4 flex flex-col gap-2">
                {habits.map(habit => (
                    <HabitItem
                        key={habit.id}
                        habit={habit}
                        onToggle={onToogle}
                        onDelete={onDelete}
                    />
                    )
                )}
            </ul>
        </div>
    )
}

export default HabitList;