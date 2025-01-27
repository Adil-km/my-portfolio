
import {NavBar} from './components/NavBar.jsx';
import {MainPage} from './components/MainPage.jsx'
import { Contact } from './components/Contact.jsx';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
