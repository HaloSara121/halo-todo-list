'use client'

import { Trash } from 'lucide-react'

import { useTasks } from '@/contexts/TasksContext'
import { cn } from '@/lib/utils'

interface TaskItemProps {
  id: string
  title: string
  isChecked?: boolean
}

export const TaskItem = ({ title, isChecked, id }: TaskItemProps) => {
  const { toggleTask, deleteTask } = useTasks()

  return (
    <li
      className={cn(
        'flex items-center justify-between gap-4 rounded-lg bg-zinc-700 p-2',
        isChecked && 'bg-zinc-700/50 text-white/50 line-through',
      )}
    >
      <div className="flex h-full flex-1 items-center gap-4">
        <input
          type="checkbox"
          className="ml-2 h-4 w-4 cursor-pointer"
          checked={isChecked}
          onChange={() => toggleTask(id, !isChecked)}
        />
        <label className="flex-1 cursor-pointer break-words" title={title}>
          {title}
        </label>
      </div>

      <button
        onClick={() => deleteTask(id)}
        className="rounded-lg bg-rose-500 p-2 text-white hover:bg-rose-600"
      >
        <Trash className="h-5 w-5" />
      </button>
    </li>
  )
}
