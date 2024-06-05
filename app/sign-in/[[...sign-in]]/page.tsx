// /pages/signin.tsx
import { SignIn } from "@clerk/nextjs";

// app/sign-in/[...sign-in].tsx
import React from 'react';

const SignInPage = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
              <SignIn/>
          </div>
      </div>
  );
};

export default SignInPage;