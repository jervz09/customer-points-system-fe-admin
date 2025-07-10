import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SidebarUserInfo from './SidebarUserInfo';

const Aside = motion.aside;

const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Clients', path: '/clients' },
  { name: 'Promos', path: '/promos' },
  { name: 'Redeem Logs', path: '/redeem-logs' },
];

export default function Sidebar({ onClose }) {
  return (
    <Aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ duration: 0.3 }}
      className="fixed lg:static z-50 w-64 h-full bg-gray-200 dark:bg-gray-700 shadow-lg lg:shadow-none"
    >
      <div className="flex justify-between items-center border-b border-gray-400 dark:border-gray-400 p-5">
        <SidebarUserInfo />
        <button
          onClick={onClose}
          className="lg:hidden text-gray-700 dark:text-gray-200 text-xl"
        >
          ✕
        </button>
      </div>

      <nav className="p-4 h-screen space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </Aside>
  );
}
