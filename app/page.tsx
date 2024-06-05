// /app/page.js
import React from 'react';
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-2xl font-bold">Bienvenido a la Aplicación</h1>
            <SignedOut>
                <Button>
                    <SignInButton>
                        Login
                    </SignInButton>
                </Button>
            </SignedOut>
            <SignedIn>
                <div className="flex items-center gap-2">
                    <span>Ajustes de usuario:</span>
                    <UserButton/>
                </div>
                <Button>
                    <a href="#">Gestionar Establecimiento</a>
                </Button>
            </SignedIn>
        </div>
    );
}