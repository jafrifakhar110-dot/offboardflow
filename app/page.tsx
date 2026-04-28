'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">OffboardFlow</h1>
        <p className="text-xl text-gray-600 mb-8">One click. Full access revoked.</p>
        <div className="space-x-4">
          <Link href="/signup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
            Sign Up
          </Link>
          <Link href="/signin" className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}