import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GANN from './GANN';






const App = () => {
  return (
    <div>

<Router basename="/Allmini">
<GANN></GANN>
      <Routes>
        <Route path="/" element={<Home />} />
  
      </Routes>
      </Router>
    </div>
  );
};

export default App;
