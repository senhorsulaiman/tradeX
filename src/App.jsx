
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomeLayout, Landing, SamplePage } from './pages'

import ErrorElement from './components/ErrorElement'
import { loader as landingLoader} from './pages/Landing'
const router=createBrowserRouter([

  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[

      {
        index:true,
        loader:landingLoader,
        element:<Landing/>,
        errorElement:<ErrorElement/>,

      },
      {
        path:'samplepage',
        element:<SamplePage/>,
        errorElement:<ErrorElement/>,
      },
    ],
  }
])
function App() {


  return <RouterProvider router={router} />
}

export default App
