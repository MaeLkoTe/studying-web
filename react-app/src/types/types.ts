import type { ChangeEventHandler } from "react"

interface Habit {
    id: number,
    title: string,
    isCompleted: boolean
}

interface HabitFormProps {
    habitText: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleAddSubmit: () => void
}

interface HabitListProps {
    habits: Habit[]
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

interface HabitItemProps {
    habit: Habit
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

interface DefaultSelectType {
    options: {name: string, value: string}[],
    defaultValue: string, 
    onChange: (sort: string) => void,
    value: string
}

export type { Habit, HabitFormProps, HabitListProps, HabitItemProps, DefaultSelectType}