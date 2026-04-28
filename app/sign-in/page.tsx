import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* The 'forceRedirectUrl' prop forces the redirect to your dashboard */}
      <SignIn forceRedirectUrl="/dashboard" />
    </div>
  );
}