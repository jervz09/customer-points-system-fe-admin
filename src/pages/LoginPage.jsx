import React, { useState } from 'react';
import axiosClient from '../lib/axiosClient';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // ✅ Prevent form default reload
    setError(''); // ✅ Clear previous error

    try {
      const res = await axiosClient.post('/admin/login', {
        username,
        password,
      });
      // ✅ Save token and redirect
      localStorage.setItem('token', res.data.datatoken);
      localStorage.setItem('user', JSON.stringify(res.data.data.user));
      window.location.href = '/dashboard';
    } catch (err) {
      // ✅ Show proper error message
      const message =
        err.response?.data?.message || err.message || 'Login failed.';
      setError(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Login
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm bg-red-100 p-2 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-200">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
