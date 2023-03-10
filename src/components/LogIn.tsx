"use client"

import { signIn } from "next-auth/react"

const LogIn = () => {
  return (
    <button onClick={()=>{
        signIn()
    }}>LogIn</button>
  )
}

export default LogIn