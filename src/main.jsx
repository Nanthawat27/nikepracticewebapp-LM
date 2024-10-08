import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Sale30 from './Pages/Sale30.jsx';
import Hotnew from './Pages/Hotnew.jsx';
import Mens from './Pages/Mens.jsx';
import Women from './Pages/Women.jsx';
import Sale from './Pages/Sale.jsx';
import Kids from './Pages/Kids.jsx';
import Design from './Pages/Design.jsx';
import SNKRS from './Pages/SNKRS.jsx';
import Jordan from './Pages/Jordan.jsx';
import MenShoes from './SubPages/MenShoes.jsx';
import MenApparel from './SubPages/MenApparel.jsx';
import MenAccessories from './SubPages/MenAccessories.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/Saleoff",
    element: <Sale30></Sale30>
  },
  {
    path: "/New",
    element: <Hotnew></Hotnew>
  },
  {
    path: "/Men",
    element: <Mens></Mens>
  },
  {
    path: "/Women",
    element: <Women></Women>
  },
  {
    path: "/Kids",
    element: <Kids></Kids>
  },
  {
    path: "/Sale",
    element: <Sale></Sale>
  },
  {
    path: "/Design",
    element: <Design></Design>
  },
  {
    path: "/Snkrs",
    element: <SNKRS></SNKRS>
  },
  {
    path: "/Jordan",
    element: <Jordan></Jordan>
  },
  {
    path: "/Men/Shoes",
    element: <MenShoes></MenShoes>
  },
  {
    path: "/Men/Apparel",
    element: <MenApparel></MenApparel>
  },
  {
    path: "/Men/Accessories",
    element: <MenAccessories></MenAccessories>
  }
  

])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  
)
