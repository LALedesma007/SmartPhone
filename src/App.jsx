import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from './Pages/Home'
import Login from "./Pages/Login"


function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='Login' element={<Login/>}/>
      </Route>
    </Routes>  
  )
}

export default App
