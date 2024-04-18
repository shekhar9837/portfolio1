import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/HeroSection/Hero'
import About from './Components/About/About'
import  "./App.css"
import ReactDOM  from 'react-dom'
import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Hero/>,

      },
      {
        path: "/About",
        element: <About/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      }
    ]
  }


])

export default Router
