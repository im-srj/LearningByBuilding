import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 mb-5'>Tailwind Test</h1>
      <Card subject="Chemistry" desc="Chemistry is the study of matter and its interactions with other matter and energy" />
      <Card subject="Physics" desc="Physics is the study of the physical plane of matter, motion, force, and energy" />

    </>
  )
}

export default App
