// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Doculist from './components/Doculist.jsx';
import Docuedit from './components/Docuedit.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Doculist />} />
        <Route path="/create" element={<Docuedit />} />
        <Route path="/edit/:id" element={<Docuedit />} />
      </Routes>
    </Router>
  );
}

export default App;
