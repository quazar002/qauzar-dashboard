import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/LineChartCard.css';

export default function LineChartCard() {
  const [selectedRange, setSelectedRange] = useState('12M');

  // Datasets
  const dataSets = {
    '12M': [
      { name: 'Feb', normal: 30, risk: 20 },
      { name: 'Mar', normal: 40, risk: 22 },
      { name: 'Apr', normal: 50, risk: 30 },
      { name: 'May', normal: 55, risk: 28 },
      { name: 'Jun', normal: 60, risk: 32 },
      { name: 'Jul', normal: 65, risk: 34 },
      { name: 'Aug', normal: 70, risk: 36 },
      { name: 'Sep', normal: 72, risk: 38 },
      { name: 'Oct', normal: 75, risk: 40 },
      { name: 'Nov', normal: 78, risk: 42 },
      { name: 'Dec', normal: 80, risk: 44 },
      { name: 'Jan', normal: 85, risk: 45 },
    ],
    '6M': [
      { name: 'Aug', normal: 70, risk: 36 },
      { name: 'Sep', normal: 72, risk: 38 },
      { name: 'Oct', normal: 75, risk: 40 },
      { name: 'Nov', normal: 78, risk: 42 },
      { name: 'Dec', normal: 80, risk: 44 },
      { name: 'Jan', normal: 85, risk: 45 },
    ],
    '30D': [
      { name: 'Week 1', normal: 70, risk: 30 },
      { name: 'Week 2', normal: 75, risk: 35 },
      { name: 'Week 3', normal: 80, risk: 40 },
      { name: 'Week 4', normal: 85, risk: 42 },
    ],
    '7D': [
      { name: 'Mon', normal: 12, risk: 5 },
      { name: 'Tue', normal: 14, risk: 6 },
      { name: 'Wed', normal: 16, risk: 7 },
      { name: 'Thu', normal: 18, risk: 8 },
      { name: 'Fri', normal: 20, risk: 9 },
      { name: 'Sat', normal: 22, risk: 10 },
      { name: 'Sun', normal: 24, risk: 11 },
    ]
  };

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3 className="chart-title">감정 통계</h3>
        <div className="chart-controls">
          <div className="time-filters">
            <button className={selectedRange === '12M' ? 'active' : ''} onClick={() => setSelectedRange('12M')}>
              12 Months
            </button>
            <button className={selectedRange === '6M' ? 'active' : ''} onClick={() => setSelectedRange('6M')}>
              6 Months
            </button>
            <button className={selectedRange === '30D' ? 'active' : ''} onClick={() => setSelectedRange('30D')}>
              30 Days
            </button>
            <button className={selectedRange === '7D' ? 'active' : ''} onClick={() => setSelectedRange('7D')}>
              7 Days
            </button>
          </div>

          <button className="export-btn">
            📄 Export PDF
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dataSets[selectedRange]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="normal" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="risk" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
