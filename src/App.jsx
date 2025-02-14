import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from './page/shop';
import Home from './page/Home';

const routers = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
    
  },
  {
    path:'shop',
    element:<Shop/>
  }
])
const App = () => {
  return (
    <RouterProvider router={routers} />
  )
}

export default App

