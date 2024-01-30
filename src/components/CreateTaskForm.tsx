'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useTasks } from '@/contexts/TasksContext'
import { cn } from '@/lib/utils'

const createTaskFormSchema = z.object({
  title: z.string().min(1, 'O titulo é obrigátorio').trim(),
})

type CreateTaskFormSchema = z.infer<typeof createTaskFormSchema>

export const CreateTaskForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTaskFormSchema),
    defaultValues: {
      title: '',
    },
  })
  const { createTask } = useTasks()

  const handleCreateTask = ({ title }: CreateTaskFormSchema) => {
    createTask(title)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateTask)}
      className="-mt-6 flex w-full gap-2"
    >
      <div className="relative flex w-full flex-col gap-2">
        <input
          type="text"
          className={cn(
            'h-16 w-full rounded-lg border border-zinc-950 bg-zinc-800 px-4 placeholder:text-zinc-500',
            errors.title && 'outline-rose-500',
          )}
          placeholder="Adicionar um nova tarefa"
          {...register('title')}
        />
        {errors.title && (
          <span className="absolute right-2 top-1 text-xs text-rose-500 lg:text-sm">
            {errors.title.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="flex items-center gap-1.5 rounded-lg bg-sky-500 px-3"
      >
        Criar
        <PlusCircle className="ml-1 h-5 w-5" />
      </button>
    </form>
  )
}
