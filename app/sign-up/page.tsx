import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* The 'forceRedirectUrl' prop forces the redirect to your dashboard */}
      <SignUp forceRedirectUrl="/dashboard" />
    </div>
  );
}