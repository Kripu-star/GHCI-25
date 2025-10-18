import React from 'react'
import Navbar from './components/Navbar'

import Auth from './components/auth'
import Landingpage from './components/Landingpage'

const App = () => {
  return (
    <div>
      <Landingpage />
     <Navbar />
      <Auth />
    </div>
  )
}

export default App
