import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Menu() {
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location,'location');
  return (
    <div><p>
Menu
    </p>
    <button onClick={()=>navigate(`/user/${2}`,{
      replace:true,
      state:"my argument"
    })}>setUseparams</button>
    <button onClick={()=>{
        navigate(-1)
    }}>Back</button>
        </div>
  )
}
