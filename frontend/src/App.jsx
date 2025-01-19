import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation/Navigation.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </Router>
    </>
  )
}

export default App
