import { CreateTaskForm } from '@/components/CreateTaskForm'
import { Header } from '@/components/Header'
import { TaskList } from '@/components/TaskList'
import { TasksHeader } from '@/components/TasksHeader'

export default function Home() {
  return (
    <div className="flex h-full flex-col bg-zinc-900">
      <Header />

      <main className="mx-auto flex w-full max-w-[1000px] flex-col items-center px-4">
        <div className="w-full">
          <CreateTaskForm />

          <TasksHeader />

          <div className="my-4  h-px w-full bg-zinc-500/50" />

          <TaskList />
        </div>
      </main>
    </div>
  )
}
