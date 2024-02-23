import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RestauranteAba from "./pages/Restaurante";



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/restaurante/:id',
      element: <RestauranteAba /> 
    }
    
  ])

  return (
    <>
          <RouterProvider router={router}/>
    </>
  )
}

export default App;
