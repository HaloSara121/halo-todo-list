'use client'

import { Clipboard } from 'lucide-react'

import { useTasks } from '@/contexts/TasksContext'

import { TaskItem } from './TaskItem'

export const TaskList = () => {
  const { checkedTasks, totalTasks, uncheckedTasks } = useTasks()

  if (totalTasks > 0)
    return (
      <div className="scroll-none pb-8 lg:overflow-scroll">
        {uncheckedTasks.length > 0 ? (
          <ul className="space-y-4">
            {uncheckedTasks.tasks
              .filter((task) => task.isChecked === false)
              ?.map((task) => (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  isChecked={task.isChecked}
                />
              ))}
          </ul>
        ) : (
          <div className="my-8 flex flex-col items-center justify-center gap-1 text-center">
            <Clipboard className="h-16 w-16 text-zinc-500" />
            <strong className="text-lg font-black text-zinc-400/80">
              Você não tem mais tarefas a fazer
            </strong>
            <span className="text-zinc-400/80">
              Crie novas tarefas para se organizar
            </span>
          </div>
        )}

        {checkedTasks.length > 0 && (
          <>
            <div className="my-4  h-px w-full bg-zinc-500/50" />
            <span className="font-bold text-violet-500">Concluídas: </span>

            <ul className="mt-2 space-y-4">
              {checkedTasks.tasks?.map((task) => (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  isChecked={task.isChecked}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-center">
      <Clipboard className="h-32 w-32 text-zinc-500" />
      <strong className="text-lg font-black text-zinc-400/80">
        Você ainda não tem tarefas cadastradas
      </strong>
      <span className="text-zinc-400/80">
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  )
}
