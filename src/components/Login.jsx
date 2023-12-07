import React, {useState,useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})

    }
    return (
      <div className='p-10'>
      <h1 className='font-semibold text-3xl underline text-pink-600 mb-10'>Login</h1>  
    <div className='flex pt-8 pb-8 mx-auto'>
    
   <div className='flex-col mx-auto'>
   <input  className=" rounded-md border w-64 p-2" type='text' value={username} 
    onChange={(e)=> setUsername(e.target.value) } 
    placeholder='username'/>
   </div> 
    <div className='flex-col mx-auto'>
    <input  className="rounded-md border p-2 w-64" type='password' value={password} 
    onChange={(e)=> setPassword(e.target.value) }
     placeholder='password'/>
    </div>
    <div className='flex-col mx-auto '>
    <button className='bg-blue-700 text-white rounded-lg p-2 w-36 ' onClick={handleSubmit}>Submit</button>
   
    </div>
    </div>

    </div>
  )
}
