import { NextResponse } from 'next/server';
import { revokeGoogleAccess } from '@/lib/google';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    const result = await revokeGoogleAccess(email);
    
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to offboard user' },
      { status: 500 }
    );
  }
}