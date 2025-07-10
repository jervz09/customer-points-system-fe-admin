import React, { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header({ onToggleSidebar }) {
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const dropdownRef = useRef(null);
  const toggleDropdown = () => setOpen(!open);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="text-gray-800 dark:text-gray-100 p-6 bg-white dark:bg-gray-800 shadow px-6 py-4 flex w-full items-center justify-between border-b border-gray-200 dark:border-gray-700">
      {/* Left: Logo or Page Title */}
      <button
        className="lg:hidden text-2xl text-gray-700 dark:text-gray-200"
        onClick={onToggleSidebar}
      >
        ☰
      </button>
      <div className="text-xl font-semibold text-gray-800 dark:text-white">
        🧭 Customer Points System
      </div>

      {/* Right: Actions or User Info */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle (optional) */}
        <ThemeToggle />

        {/* User dropdown or name */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              {user.avatar || `${user.name.charAt(0)}${user.name.split(' ')[1].charAt(0)}`}
            </div>
            <span className="text-sm text-gray-800 dark:text-white">
              {user.name}
            </span>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded shadow-lg z-50">
              <ul className="text-sm text-gray-700 dark:text-gray-100">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
