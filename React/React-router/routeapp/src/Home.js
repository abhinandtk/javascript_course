import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{display:"flex",gap:"30px"}} >
        <NavLink to="/Home">
            Home
        </NavLink>
        <NavLink to="/Menu" state={
            {nams:"hai"}
        }>
            Menu
        </NavLink>
        <NavLink to="/Contact">
            Contact
        </NavLink>
        <NavLink to="/Settings">
            Settings
        </NavLink>
    </div>
  )
}
