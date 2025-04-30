import React, { useState, useEffect } from 'react';
import StatsCards from '../components/StatsCards';
import LineChartCard from '../components/LineChartCard';
import ProductCategory from '../components/ProductCategory';
import RecentUsers from '../components/RecentUsers';
import TransactionsTable from '../components/TransactionsTable';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState([]);
  const user = { name: 'Kim' };

  useEffect(() => {
    setTimeout(() => {
      setStats([
        { title: '정상 감지', value: '4건', subtext: 'vs Yesterday', trend: '+2건 ↑' },
        { title: '위험 감지', value: '2건', subtext: 'vs Yesterday', trend: '-10건 ↓' },
        { title: '총 리스크 감지 수', value: '84,382건', subtext: 'vs Last Month', trend: '+36%' },
        { title: 'Unknown Labels', value: '33,493건', subtext: 'vs Last Month', trend: '+36%' },
      ]);
    }, 300);
  }, []);

  return (
    <div className='card'>

    <div className="dashboard-container">
      <h2 className="dashboard-greeting">
        Hey {user.name} – <span>Here’s an update on your risk detection program today.</span>
      </h2>

      <StatsCards data={stats} />

      <div className="dashboard-section">
  <div className="dashboard-left"><LineChartCard /></div>
  <div className="dashboard-right"><ProductCategory /></div>
</div>
<div className="dashboard-section">
  <div className="dashboard-left"><TransactionsTable /></div>
  <div style={{paddingTop:'2rem'}} className="dashboard-right align-bottom"><RecentUsers /></div>
</div>
</div>
    </div>
  );
}
