import React from 'react'
import {createBrowserRouter, RouterProvider, useParams} from 'react-router-dom'


function Hai() {return <p>hai</p>}

function User () {
    const {id} = useParams()    
    return <h1>{id}</h1>
}

function Urls() {
    const router = createBrowserRouter([
        {path: "/hi",element: <Hai/>},
        {path: "/user/:id",element: <User/>}
    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Urls