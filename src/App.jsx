
import {NavBar} from './components/NavBar.jsx';
import {MainPage} from './components/MainPage.jsx'
import { Contact } from './components/Contact.jsx';
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <NavBar/>
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
    </>
  )
}

export default App
