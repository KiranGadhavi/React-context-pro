import { useEffect, useState } from 'react'
import './App.css'
// {import UserContext from './context/UserContext'}
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {

      const [todos, setTodos] = useState([])

      const addTodo = (todo) =>{
        setTodos((prev)=> [{id: Date.now(), ...todo}, ...prev])
      }

      const updateTodo =(id, todo) =>{
        setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))

      }

      const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo)=> todo.id !== id))
      }

      const toggleComplete = (id) => {
        setTodos((prev) => 
        prev.map((prevTodo) => prevTodo.id === 
        id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
      }

 useEffect(() => {
   const todos = JSON.parse(localStorage.getItem("todos"))
   if (todos && todos.length > 0){
    setTodos(todos)
   }
 }, [])

 useEffect(() => {
 localStorage.setItem("todos", JSON.stringify(todos))
 
}, [todos])
 

            const [themeMode, setThemeMode] = useState('light')

            const lightTheme = () =>{
              setThemeMode("light")
            }
            const darkTheme = () =>{
              setThemeMode("dark")
            }
            // actual change in theme
            useEffect(()=>{
              document.querySelector('html').classList.remove("light", "dark")
              document.querySelector('html').classList.add(themeMode)
              
            },[themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <h1 className=' bg-pink-600 p-3 text-white'>I am React Toggle Theme Context</h1>
    <div className='flex flex-wrap min-h-screen items-center bg-pink-100 py-6 '>
      <div className='w-full'>
        <div className='w-full max-w-sm ma-auto flex justify-end mb-4'>
         <ThemeBtn/>
        </div>
        <div className='w-full max-w-sm mx-auto'>
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
    
      <UserContextProvider >
      <div className='bg-pink-100'>
      <h1 className=' bg-pink-600 p-3 mb-9 mt-9 text-white'>I am react Login context</h1>
      <Login/>
      <Profile/>
      </div>
    </UserContextProvider>

    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <h1 className=' bg-pink-600 p-3 mt-10 text-white'>Todo context</h1>
      <div className="bg-pink-100 min-h-screen py-8 ">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-pink-600">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
    </>
    
  )
}

export default App
