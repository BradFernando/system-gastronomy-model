// /pages/signup.tsx
import { SignUp } from "@clerk/nextjs";

// app/sign-up/[...sign-up].tsx
import React from 'react';

const SignUpPage = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
              <SignUp/>
          </div>
      </div>
  );
};

export default SignUpPage;