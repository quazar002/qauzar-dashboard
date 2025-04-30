import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import {
  FiHome,
  FiBarChart2,
  FiTag,
  FiUsers,
  FiUser,
  FiBox,
  FiShoppingCart,
  FiFileText,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';
import { AiFillFire } from 'react-icons/ai';

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Scrollable top section */}
      <div className="sidebar-section top">
        <ul className="sidebar-menu">
          <li><Link to="/"><FiHome className="icon" /> Dashboard</Link></li>

          <p className="sidebar-group-title">Analytics</p>
          <li><Link to="/performance"><FiBarChart2 className="icon" /> Performance</Link></li>
          <li>
            <Link to="/hotjar">
              <AiFillFire className="icon" /> Hotjar <span className="sidebar-new">NEW</span>
            </Link>
          </li>

          <p className="sidebar-group-title">Support</p>
          <li><Link to="/tickets"><FiTag className="icon" /> Tickets <span className="sidebar-badge">15</span></Link></li>
          <li><Link to="/agents"><FiUsers className="icon" /> Agents</Link></li>
          <li><Link to="/customers"><FiUser className="icon" /> Customers</Link></li>

          <p className="sidebar-group-title">Shop</p>
          <li><Link to="/products"><FiBox className="icon" /> Products</Link></li>
          <li><Link to="/orders"><FiShoppingCart className="icon" /> Orders</Link></li>
          <li><Link to="/reports"><FiFileText className="icon" /> Reports</Link></li>
        </ul>
      </div>

      {/* Pinned bottom section */}
      <div className="sidebar-section bottom">
        <ul className="sidebar-menu">
          <li><Link to="/settings"><FiSettings className="icon" /> Settings</Link></li>
          <li><Link to="/logout"><FiLogOut className="icon" /> Logout</Link></li>
        </ul>
      </div>
    </aside>
  );
}
