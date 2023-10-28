import React from 'react'
import Layout from './Components/Layout/Layout'
import ContactUs from './Components/ContactUs/ContactUs'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'
import Header from './Components/Header/Header'
import Experiance from './Components/Experiance/Experiance'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import About from './Components/About/About'
import Services from './Components/Services/Services'

export default function App() {
  const routes = createBrowserRouter([
    {path:"/", element:<Layout></Layout> , children:[
      {path:'' , element:<Header/>},
      {path:'/contactUs' , element:<ContactUs/>},
      {path:'/experiance' , element:<Experiance/>},
      {path:'/portfolio' , element:<Portfolio/>},
      {path:'/testimonials' , element:<Testimonials/>},
      {path:'/about' , element:<About/>},
      {path:'/services' , element:<Services/>},
    ]}
  ])
  return (
   <>
   <RouterProvider router={routes}></RouterProvider>
   </>
  )
}
