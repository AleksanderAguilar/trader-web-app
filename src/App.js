import Register from './components/Register/Register'
import Home from './components/Home/Home'
import TestPage from './components/TestingPage';
import Layout from './components/Layout';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import {  Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />

            <Route path="/testingPage" element={<TestPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
