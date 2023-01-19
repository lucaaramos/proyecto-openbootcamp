import React,{useState, useEffect} from 'react'

    
const initialCredentials = [
    {
        user: '',
        password: ''
    }
]

const [credentials, setCredentials] = useState(initialCredentials)

export default function registerForm() {
  return (
    <div>registerForm</div>
  )
}
