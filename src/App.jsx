import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import Login from './pages/AuthPages/Login/Login';
import Register from './pages/AuthPages/Register/Register';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import { useDispatch } from 'react-redux';
import { checkIfLoggedIn } from "./redux/actionCreators/authActionCreator";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {


  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(checkIfLoggedIn());
  }, [dispatch])

  return (
    <div className="App">
    <ToastContainer />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/*" element={<DashboardPage />} />
      

    </Routes>
    </div>
  )
}

export default App;
