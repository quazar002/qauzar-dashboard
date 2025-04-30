import React, { useState, useEffect } from 'react';
import '../styles/ProductCategory.css';

export default function ProductCategory() {
  const dataByFilter = {
    '7 Days': [
      { name: 'Bag', amount: 143382 },
      { name: 'Wallet', amount: 87974 },
      { name: 'Shoes', amount: 45211 },
      { name: 'Necklace', amount: 21893 },
    ],
    '30 Days': [
      { name: 'Bag', amount: 200000 },
      { name: 'Wallet', amount: 150000 },
      { name: 'Shoes', amount: 80000 },
      { name: 'Necklace', amount: 40000 },
    ],
    '1 Year': [
      { name: 'Bag', amount: 500000 },
      { name: 'Wallet', amount: 300000 },
      { name: 'Shoes', amount: 150000 },
      { name: 'Necklace', amount: 80000 },
    ],
  };

  const [filter, setFilter] = useState('7 Days');
  const [data, setData] = useState(dataByFilter['7 Days']);
  const [containerHeight, setContainerHeight] = useState('auto');

  useEffect(() => {
    const chart = document.querySelector('.chart-card');
    if (chart) {
      setContainerHeight(`${chart.offsetHeight}px`);
    }
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setData(dataByFilter[newFilter]);
  };

  const maxAmount = Math.max(...data.map(item => item.amount));

  return (
    <div className='card'>

    <div className="product-category-card" style={{ height: containerHeight }}>
      <div className="product-category-header">
        <h3>Product Category</h3>
        <select 
          value={filter} 
          onChange={(e) => handleFilterChange(e.target.value)} 
          className="filter-select"
          >
          <option>7 Days</option>
          <option>30 Days</option>
          <option>1 Year</option>
        </select>
      </div>

      <div className="product-category-list">
        {data.map((item, idx) => (
          <div key={idx} className="product-category-item">
            <div className="item-top">
              <span className="product-name">{item.name}</span>
              <span className="product-amount">{item.amount.toLocaleString()}</span>
            </div>
            <div className="product-bar-wrapper">
              <div 
                className="product-bar" 
                style={{ width: `${(item.amount / maxAmount) * 100}%` }}
                ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
}
