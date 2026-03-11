interface Habit {
    id: number,
    title: string,
    completed: boolean
}

interface HabitFormProps {
    habitText: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleAddSubmit: () => void
}

interface HabitListProps {
    habits: Habit[]
}

interface HabitItemProps {

}

export type { Habit, HabitFormProps, HabitListProps, HabitItemProps}