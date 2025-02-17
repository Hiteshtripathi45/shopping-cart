import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from './page/shop';
import Home from './page/Home';
import Cart from "./page/cart";
import Navbar from './component/navbar';

const Layout =({children})=>(
  <>
  <Navbar/>
  {children}
  </>
)
const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: 'shop',
    element: <Layout><Shop /></Layout>,
  },
  {
    path: 'cart',
    element: <Layout><Cart /></Layout>,
  }
]);
const App = () => {
  return (
        <RouterProvider router={routers} />
  
  )
}

export default App

