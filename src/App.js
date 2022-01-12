import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import { Register } from './components/Register';
import Users from './components/Users';

function App() {
  return (
      <div className='container'>
        <Navbar />
        <Header  appname="Post Bloggers Webapp !"/>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/"  element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;

