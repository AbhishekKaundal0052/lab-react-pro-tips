import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Form from './Pages/Form'
import Home from './Pages/Home'
import Contacts from './Pages/Contacts'

function App() {

  return (
    <>  
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Contacts' element={<Contacts/>}></Route>
    <Route path='/Form' element={<Form/>}></Route>
    </Routes>
    </>
  )
}

export default App
