'use client';

import Link from 'next/link';
import { useAuth, useUser } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  if (isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">OffboardFlow</h1>
          <p className="text-xl text-gray-600 mb-8">Welcome back, {user?.primaryEmailAddress?.emailAddress}!</p>
          <Link href="/dashboard" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
            Go to Dashboard →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">OffboardFlow</h1>
        <p className="text-xl text-gray-600 mb-8">One click. Full access revoked.</p>
        <div className="space-x-4">
          <Link href="/sign-up" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
            Sign Up
          </Link>
          <Link href="/sign-in" className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}