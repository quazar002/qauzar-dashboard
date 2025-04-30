import React from 'react';
import '../styles/TransactionsTable.css';

export default function TransactionsTable() {
  const transactions = [
    {
      id: 'A-001',
      title: '위탁판매자 001',
      subtitle: '상품명: 루이비통 알마 BB',
      price: '$1,100,000',
      date: 'Jan 17, 2025',
      status: '정상 감지',
      statusType: 'normal',
    },
    {
      id: 'A-002',
      title: '위탁판매자 002',
      subtitle: '상품명: 펜디 바이더웨이 미니',
      price: '$1,400,000',
      date: 'Jan 17, 2025',
      status: '정상 감지',
      statusType: 'normal',
    },
    {
      id: 'A-003',
      title: '위탁판매자 003',
      subtitle: '상품명: 샤넬 트렌디 CC 탑핸들',
      price: '$3,400,000',
      date: 'Jan 17, 2025',
      status: '위험 감지',
      statusType: 'danger',
    },
    {
      id: 'A-004',
      title: '위탁판매자 004',
      subtitle: '상품명: 루이비통 모노그램 캐리올',
      price: '$980,000',
      date: 'Jan 17, 2025',
      status: '위험 감지',
      statusType: 'danger',
    },
  ];

  return (
    <div className='card'>

    <div className="transactions-card">
      <div className="transactions-header">
        <div>
          <h3>Transactions</h3>
          <p>Real-time consignment sales risk detection statistics</p>
        </div>
        <a href="#" className="see-all-link">See All Transactions ➔</a>
      </div>

      <ul className="transactions-list">
        {transactions.map((item) => (
          <li key={item.id} className="transaction-item">
            <div className="transaction-left">
              <div className={`badge ${item.statusType}`}>
                <span className="badge-dot"></span>
                {item.status}
              </div>

              <div className="transaction-info">
                <div className="transaction-title">{item.title}</div>
                <div className="transaction-subtitle">{item.subtitle}</div>
              </div>
            </div>

            <div className="transaction-center">
              <div className="transaction-price-date">
                <div className="price">{item.price}</div>
                <div className="date">{item.date}</div>
              </div>
              <div className="transaction-status-text">변경전</div>
            </div>

            <div className="transaction-actions">⋯</div>
          </li>
        ))}
      </ul>
    </div>
        </div>
  );
}
