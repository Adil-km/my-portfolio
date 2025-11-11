import { NavBar } from './components/NavBar.jsx';
import { MainPage } from './components/MainPage.jsx';
import { Contact } from './components/Contact.jsx';
import { ErrorPage } from './components/ErrorPage.jsx';
import { SuccessPage } from './components/SuccessPage.jsx';
import Blog from './components/Blog/Blog.jsx';
import Admin from './components/Blog/Admin.jsx';

import { Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import SingleBlog from './components/Blog/SingleBlog.jsx';
import AddBlog from './components/Blog/AddBlog.jsx';
import Dashboard from './components/Blog/Dashboard.jsx';

import axios from 'axios';
import EditBlog from './components/Blog/EditBlog.jsx';

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();
  
  return (
    <>
	<Analytics />
      {/* Hide NavBar when on the Contact page */}
      {location.pathname === "/" && <NavBar />}
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        
        <Route path="/admin/auth" element={<Admin />} />
        <Route path="/admin/add" element={<AddBlog />} />
        <Route path="/admin/edit/:slug" element={<EditBlog/>} />
        <Route path="/admin/posts" element={<Dashboard />} />
        
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
