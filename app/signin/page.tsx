'use client';

import { SignIn } from '@clerk/nextjs';

export default function SigninPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn forceRedirectUrl="/dashboard" />
    </div>
  );
}