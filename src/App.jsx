import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      <div className="flex space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform duration-200">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform duration-200">
          <img src={reactLogo} className="h-24 w-24 animate-spin" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold text-purple-600 mb-8">Vite + React + Tailwind</h1>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
        >
          Count is {count}
        </button>
        <p className="text-blue-700 text-center">
          Edit <code className="bg-yellow-100 px-2 py-1 rounded text-sm text-orange-800">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-red-600 text-center mt-8 max-w-md font-semibold">
        Click on the Vite and React logos to learn more. Tailwind CSS is now working!
      </p>
    </div>
  )
}

export default App
