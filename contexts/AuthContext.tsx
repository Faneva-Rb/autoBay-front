"use client"

import { User } from "@/lib/types";
import { ReactNode, useEffect, useState, createContext, useContext } from "react";


type AuthContextType = {
    user: User | null,
    setUser: (user: User | null) => void,
    logout: () => void 
}


const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({
    children
}: {
    children: ReactNode
}){
    const [user, setUser] = useState<User | null>(null)


    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if(storedUser){
            try {
                setUser(JSON.parse(storedUser))
            } catch (error) {
                console.log(error);
            }
        }
    }, [])

    function logout(){
        localStorage.removeItem("access_token");
        localStorage.removeItem("user")
        setUser(null)
        window.location.href = "/"
    }

    return (
        <AuthContext.Provider value={{user, setUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth error")
    }

    return context
}