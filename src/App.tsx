import React from 'react'
import Navbar from './components/Navbar'

import Auth from './components/Auth'
import Landingpage from './components/Landingpage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Landingpage />
      <Auth />
    </div>
  )
}

export default App
