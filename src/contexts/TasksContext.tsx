'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { v4 } from 'uuid'

type Task = {
  id: string
  title: string
  isChecked: boolean
}

type TasksContextStore = {
  tasks: Task[]
  checkedTasks: {
    tasks: Task[]
    length: number
  }
  uncheckedTasks: {
    tasks: Task[]
    length: number
  }
  totalTasks: number
  toggleTask: (taskId: string, value: boolean) => void
  deleteTask: (taskId: string) => void
  createTask: (title: string) => void
}

interface TasksProviderProps {
  children: ReactNode
}

const TasksContext = createContext({} as TasksContextStore)

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const storedTasks = localStorage.getItem('halo-todo')
    const storedTasksArray = storedTasks && JSON.parse(storedTasks)
    if (storedTasksArray.length > 0) {
      setTasks(storedTasksArray)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('halo-todo', JSON.stringify(tasks))
  }, [tasks])

  const toggleTask = (taskId: string, value: boolean) => {
    setTasks((state) => {
      const newState = state.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isChecked: value,
          }
        }

        return task
      })

      return newState
    })
  }

  const createTask = (title: string) => {
    const newTask: Task = {
      id: v4(),
      title,
      isChecked: false,
    }

    setTasks((state) => {
      return [...state, newTask]
    })
  }

  const deleteTask = (taskId: string) => {
    setTasks((state) => {
      const newState = state.filter((task) => task.id !== taskId)

      return newState
    })
  }

  const uncheckedTasks = useMemo(() => {
    const filteredCheckedTasks = tasks.filter(
      (task) => task.isChecked === false,
    )

    return {
      length: filteredCheckedTasks.length,
      tasks: filteredCheckedTasks,
    }
  }, [tasks])

  const checkedTasks = useMemo(() => {
    const filteredCheckedTasks = tasks.filter(
      (task) => task.isChecked !== false,
    )

    return {
      length: filteredCheckedTasks.length,
      tasks: filteredCheckedTasks,
    }
  }, [tasks])

  const totalTasks = useMemo(() => {
    return tasks.length
  }, [tasks])

  return (
    <TasksContext.Provider
      value={{
        tasks,
        toggleTask,
        createTask,
        deleteTask,
        uncheckedTasks,
        checkedTasks,
        totalTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => {
  const tasks = useContext(TasksContext)
  return tasks
}
