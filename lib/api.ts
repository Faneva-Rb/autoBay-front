const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function api<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T>{
    const token = typeof window != "undefined" ? localStorage.getItem("access_token") : null;
    const response = await fetch(`${API_URL}/${endpoint}`, 
        {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}`} : {}
                ),
                ...options.headers
            }
        }
    )

    const data = await response.json().catch(()=> null);

    if(!response.ok){
        throw new Error(
            data?.message || "Une erreur est survenue"
        )
    }

    return data;
}