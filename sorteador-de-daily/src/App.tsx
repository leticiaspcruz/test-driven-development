import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/form/form';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
