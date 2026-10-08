"use client";

import { Button } from "@/components/kit/button";
import { Field, Input } from "@/components/kit/input";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);

        try {
            // await login(email, password);
            router.replace("/dashboard");
            router.refresh()
        } catch (error) {
            console.log(error);
            
        }


    }

    

    return <div>
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-gray-900">AutoBat</h1>

                <form onSubmit={handleSubmit}>
                    <Field label="Email" htmlFor="email">
                        <Input
                            id="email"
                            required
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </Field>
                    <Field label="Mot de passe" htmlFor="password">
                        <Input
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                    </Field>
                    <Button>
                        Connexion
                    </Button>
                </form>
            </div>
        </main>
    </div>
}