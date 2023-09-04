import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from './Pages/Home'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Product from "./Pages/Product"
import Shopping from "./Pages/Shopping"
import Administrator from "./Pages/Administrator"
import Favorite from "./Pages/Favorite"
import Help from "./Pages/Help"


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Shopping' element={<Shopping/>}/>
        <Route path='/Favorite' element={<Favorite/>}/>
        <Route path='/Administrator' element={<Administrator/>}/>
        <Route path='/Help' element={<Help/>}/>
      </Route>
    </Routes>  
  )
}

export default App
