import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import About from './components/About'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { getDB } from './Utils/database'
import { getSavedProducts } from './Utils/CustomLoader'




const router = createBrowserRouter([
{
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader : ()=> getSavedProducts(),
    children:[
        {
            path:'/',
            element : <Home></Home>, 
        },
        {
            path:"/shop",
            element : <Shop></Shop>,
            loader: () => fetch('products.json')
        },
        {
            path:'/about',
            element : <About></About>
        }, {
            path: '/cart',
            element: <Cart></Cart>,
            loader : ()=> getSavedProducts()
        }
      
    ]
}

])



ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
