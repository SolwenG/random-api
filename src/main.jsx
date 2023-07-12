import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import './main.css'
import Quiz from './quiz-api/Quiz'
import Cat from './random-cat/Cat'
import RandomApp from './random-user/RandomApp'
import Root from './Root'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/random-app",
                element: <RandomApp />,
            },
            {
                path: "/random-cat",
                element: <Cat />,
            },
            {
                path: "/quiz",
                element: <Quiz />,
            }
        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
