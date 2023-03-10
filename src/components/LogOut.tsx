"use client"

import { signOut } from "next-auth/react"

const LogOut = () => {
    
  return (
    <button onClick={()=>{
        signOut()
    }}>LogOut</button>
  )
}

export default LogOut