import { ThemeToggle } from './ThemeTogggle'

const Navbar = () => {
  return (
    <div className='w-full flex p-3 border-b border-1 border-slate-200  justify-between'>
      <h1 className='text-xl font-bold '>Baavalibuch</h1>
      <ThemeToggle />
    </div>
  )
}

export default Navbar
