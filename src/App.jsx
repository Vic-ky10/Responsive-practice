import React from 'react'
import Navbar from './Navbar'
import Feed from './Feed'




function App() {
  return (
    <> 
   <Navbar />
     <div style={{ padding: "80px 20px" }}>
        <h2>Instagram Responsive Navbar</h2>
      </div>
      <Feed />
      </>
  )
}

export default App