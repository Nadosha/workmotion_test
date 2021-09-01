import React from 'react';
import logo from './logo.svg';
import { ProgressBar } from './components/progressBar/ProgressBar';
import './App.css';
import EmployeeList from "./components/employeesList/employeeList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EmployeeList />
      </header>
    </div>
  );
}

export default App;
