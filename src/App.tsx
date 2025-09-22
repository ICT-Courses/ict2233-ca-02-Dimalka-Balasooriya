import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Welcome to React + Vite
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-600 mb-4">
            This is a basic React application with Vite and Tailwind CSS.
          </p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Count is {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App