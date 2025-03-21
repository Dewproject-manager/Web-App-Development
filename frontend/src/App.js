import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PurchaseRequest from './pages/PurchaseRequest';
import ApprovalDashboard from './pages/ApprovalDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PurchaseRequest />} />
        <Route path="/approval" element={<ApprovalDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

