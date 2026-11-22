import type { Users } from "../types/Users"

export const usersService = {
     getUsers: async (): Promise<Users[]> => {
        const url = process.env.USERS_URL

         if (!url) {
            throw new Error("USERS_URL is missing")
        }

        const res = await fetch(url) 

        if (!res.ok){
            throw new Error("Failed to fetch Users")
        }
        return await res.json()
    }
}