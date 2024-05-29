import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when sign-in request starts
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Sign-in failed');
      }

      router.push('/');
    } catch (error) {
      console.error('Sign-in error:', error);
      // Handle sign-in error, e.g., display error message to the user
    } finally {
      setIsLoading(false); // Set loading state to false after sign-in request completes
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>
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
            {isLoading ? 'Loading...' : 'Sign In'} {/* Show loading text when loading state is true */}
          </button>
        </form>
        <div className="mt-4 text-blue-500 hover:underline">
          <Link href="/register">
           Register
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
