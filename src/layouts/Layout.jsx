import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
      </AnimatePresence>
      {/* Main content */}
      <div className="flex flex-col flex-1">
        <Header onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
