// /app/page.js
import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-2xl font-bold">Bienvenido a la Aplicación</h1>
            <SignedOut>
                <SignInButton>Login</SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    );
}