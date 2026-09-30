import { api } from "./api";


export async function login(
    email: string,
    password: string
){
    const data = await api("auth/login", {
        method: "POST",
        body: JSON.stringify({email, password})
    })

    localStorage.setItem(
        "access_token",
        data.data.token
    )

    localStorage.setItem(
        "user",
        JSON.stringify(data.data.user)
    )

    return data.data.user
}

export function logout(){
    localStorage.removeItem("access_token");
    localStorage.removeItem("user")
    window.location.href = "/"
}