import React from 'react';
import { faker } from '@faker-js/faker';
import '../styles/RecentUsers.css';

export default function RecentUsers() {
  const users = [
    {
      name: 'Jenny Wilson',
      email: 'w.lawson@example.com',
      city: 'Austin',
      time: '오전 11 : 30분',
      avatar: faker.image.avatar(),
    },
    {
      name: 'Devon Lane',
      email: 'dat.roberts@example.com',
      city: 'New York',
      time: '오전 11 : 15분',
      avatar: faker.image.avatar(),
    },
    {
      name: 'Jane Cooper',
      email: 'jgraham@example.com',
      city: 'Toledo',
      time: '오전 10 : 58분',
      avatar: faker.image.avatar(),
    },
    {
      name: 'Dianne Russell',
      email: 'curtis.d@example.com',
      city: 'Naperville',
      time: '오전 10 : 55분',
      avatar: faker.image.avatar(),
    },
  ];

  return (
    <div className="recent-users-card">
      <div className="recent-users-header">
        <div>
          <h3>Recent Users</h3>
          <p>Live user statistics for the program</p>
        </div>
      </div>

      <ul className="recent-users-list">
        {users.map((user, index) => (
          <li key={index} className="recent-user-item">
            <div className="user-info">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <div>
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
              </div>
            </div>
            <div className="user-meta">
              <div className="user-time">{user.time}</div>
              <div className="user-city">{user.city}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="see-all-customers">
        SEE ALL CUSTOMERS ➔
      </div>
    </div>
  );
}
