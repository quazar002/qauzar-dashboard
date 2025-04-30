import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      {/* Fixed Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Slideable Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <main
        style={{
          paddingTop: '72px',
          paddingLeft: isSidebarOpen ? '220px' : '0',
          transition: 'padding-left 0.3s ease',
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
