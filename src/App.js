import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';

// Importando as páginas
import HomePage from './Pages/HomePage';
import AboutusPage from './Pages/AboutusPage';
import LoginPage from './Pages/LoginPage';
import ServPage from './Pages/ServicoPage';
import CadastroPage from './Pages/CadastroPage';
import CalendarPage from './Pages/CalendarPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<HomePage />}></Route>
        <Route path="sobre-nos" element ={<AboutusPage />}></Route>
        <Route path="/login" element ={<LoginPage/>}></Route>
        <Route path="/servico" element ={<ServPage/>}></Route>
        <Route path="/Cadastro" element ={<CadastroPage/>}></Route>
        <Route path="/Calendar" element ={<CalendarPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
