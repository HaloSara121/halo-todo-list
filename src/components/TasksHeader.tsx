'use client'

import { useTasks } from '@/contexts/TasksContext'

export const TasksHeader = () => {
  const { checkedTasks, totalTasks } = useTasks()

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-1.5 font-bold text-sky-500">
        Tarefas criadas
        <span className="rounded-full bg-zinc-700 px-2 py-1 text-xs text-white">
          {totalTasks}
        </span>
      </div>

      <div className="flex gap-1.5 font-bold text-violet-500">
        Concluídas
        <span className="rounded-full bg-zinc-700 px-2 py-1 text-xs text-white">
          {checkedTasks?.length} de {totalTasks}
        </span>
      </div>
    </div>
  )
}
