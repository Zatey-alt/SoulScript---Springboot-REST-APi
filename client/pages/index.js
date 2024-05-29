import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Diary</h1>
        <div className="mb-4">
          <Link href="/signin">
            Sign In
          </Link>
        </div>
        <div>
          <Link href="/register">
           Register
          </Link>
        </div>
      </div>
    </div>
  );
}
