import Authentication from './pages/Authentication'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Forgotpassword from './pages/Forgotpassword'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/forgotpassword",
        element: <Forgotpassword />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
