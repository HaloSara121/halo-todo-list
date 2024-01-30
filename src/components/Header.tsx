import { Logo } from './Logo'

export const Header = () => {
  return (
    <header className="flex h-48 items-center justify-center bg-zinc-950 px-8 text-4xl font-black text-white">
      <Logo color="#fff" borderColor="#fff" className="mr-2 h-10 w-10" />
      Halo&nbsp;
      <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
        to do
      </span>
    </header>
  )
}
