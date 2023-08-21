import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from './Pages/Home'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Product from "./Pages/Product"


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Product' element={<Product/>}/>
      </Route>
    </Routes>  
  )
}

export default App
