import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when registration request starts
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      router.push('/signin');
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration error, e.g., display error message to the user
    } finally {
      setIsLoading(false); // Set loading state to false after registration request completes
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            disabled={isLoading} // Disable button when loading state is true
          >
            {isLoading ? 'Loading...' : 'Register'} {/* Show loading text when loading state is true */}
          </button>
        </form>
        <div className="mt-4 text-blue-500 hover:underline">
          <Link href="/signin">
            Sign In
          </Link>
        </div>
        <div className="mt-2 text-blue-500 hover:underline">
          <Link href="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
