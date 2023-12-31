import { Toaster } from 'react-hot-toast'
import './App.css'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Form from './components/Form'

function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <Navbar />
      <div className='flex flex-col items-center justify-center gap-10 p-5 mx-auto mt-[10px] border-2 border-slate-200'>
        <Form />
      </div>
    </ThemeProvider>
  )
}

export default App
