import Register from './components/Register/Register'
import Home from './components/Home/Home'
import TestPage from './components/TestingPage';
import Layout from './components/Layout';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import RequireAuth from './components/RequireAuth';
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/testingPage" element={<TestPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<RequireAuth />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Route>
    </Routes>



  );
}

export default App;
