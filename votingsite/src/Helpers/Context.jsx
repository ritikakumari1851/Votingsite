import React, { createContext } from 'react'
import { useState } from 'react'
export const MyContext = createContext()
export default function Context({children}) {
    const [userToken, setUserToken] = useState("jhhsdfb")
  return (
  <MyContext.Provider value={{userToken,setUserToken}}>
    {children}
  </MyContext.Provider>
  )
}
