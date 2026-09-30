"use client"

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AuthGuard({
    children,
}: {
    children: React.ReactNode
}){
    const router = useRouter();
    const pathname = usePathname();
    const [authorized, setAuthorized] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("access_token")

        if(!token){
            router.replace("/");
            return
        }

        setAuthorized(true)
    }, [pathname, router])

    if(!authorized){
        return (
            <div className="flex min-h-screen items-center justify-center">Chargement</div>
        )
    }

    return <div> {children} </div>
}