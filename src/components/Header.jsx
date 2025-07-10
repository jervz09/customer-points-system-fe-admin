import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header({ onToggleSidebar }) {
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
        <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
          Admin User
        </div>
      </div>
    </header>
  );
}

