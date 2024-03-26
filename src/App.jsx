// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './styles.css'; 
import CreateTodoPage from './pages/CreateTodoPage';
import DisplayTodoPage from './pages/DisplayTodoPage';
import UpdateTodoPage from './pages/UpdateTodoPage';

function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/" element={<DisplayTodoPage />} />
          <Route path="/create" element={<CreateTodoPage />} />
          <Route path="/update/:id" element={<UpdateTodoPage />} />
        </Routes>
     
    </Router>
  );
}

export default App;
