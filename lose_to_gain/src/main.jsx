import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Foods from './Components/Foods/Foods.jsx'
import Chart from './Components/Chart/Chart.jsx'

//<Route path='user/:userid' element={<User />} />

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<About />} />
      <Route path='Foods' element={<Foods />} />
      <Route path='Chart' element={<Chart />} />
      
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
