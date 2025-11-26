'use client';
import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';

// Display some of the user's information
export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  return (
    <div className="min-h-screen bg-black px-4 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="font-bold">
          Assignment 10 - Welcome to the Shopping List App
        </p>
        {user ? (
          <div className="mt-4">
            <p className="text-lg">
              Welcome,{' '}
              {user.displayName ??
                user?.providerData?.[0]?.displayName ??
                (user?.email ? user.email.split('@')[0] : 'User')}
            </p>
            <p className="text-lg">Your Email is: {user.email}</p>
            <p className="text-lg">And here is your image!</p>
            {user.photoURL && (
              <img
                src={user.photoURL}
                className="mt-4 h-48 w-48 rounded-full"
              />
            )}
            <button
              onClick={firebaseSignOut}
              className="mt-4 rounded bg-red-600 px-4 py-2 hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-lg">You are not signed in.</p>
            <button
              onClick={gitHubSignIn}
              className="mt-4 rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
            >
              Sign In with GitHub
            </button>
          </div>
        )}
        <Link
          href="/week-10/shopping-list"
          style={{ color: 'green', marginTop: '20px', display: 'inline-block' }}
        >
          Go to Shopping List Page
        </Link>
      </div>
    </div>
  );
}

// Part 5: landing page ends
