import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Cultivos from "./pages/Cultivos";
import Invernaderos from "./pages/Invernaderos";
import Camas from "./pages/Camas";
import Perfil from "./pages/Perfil";
import Inicio from "./pages/Inicio";
import PublicRoute from "./components/router/PublicRoute";
import {UserProvider} from './context/UserContext'

function App() {
  return (
    <UserProvider> 
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/' element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Register />} />
          </Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path="inicio" element={<Inicio />} />
            <Route path="cultivos" element={<Cultivos />} />
            <Route path="invernaderos" element={<Invernaderos />} />
            <Route path="camas" element={<Camas />} />
            <Route path="perfil" element={<Perfil />} />
          </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
