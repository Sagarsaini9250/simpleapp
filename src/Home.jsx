import React, { useState } from 'react'
import Contact from './Contact'
function Home() {
    const [user,setuser] = useState("Diit Tech")
  return (
    <div>
            <h1>Hello {user}</h1>
            <Contact userDetail={user} />
    </div>
  )
}

export default Home