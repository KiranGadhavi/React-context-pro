import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


export default function Profile() {
    const {user} = useContext(UserContext)
  
    if(!user) return <div className='bg-red-300 p-3 text-white '>Please Login</div>
     return <div className='bg-green-600 p-3 text-white '>Welcome {user.username}</div>
  
}
