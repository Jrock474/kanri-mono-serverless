import type { MonoData } from "../types/monoData"

export const monoDataService = {

    getMonoData: async (): Promise<MonoData> => {
        const url = process.env.MONODATA_API_URL

        if (!url) {
            throw new Error("MONODATA_API_URL is missing")
        }
        
        const res = await fetch(url)

        if (!res.ok) {
                throw new Error("MONODATA_API_URL is missing")
        }

        const data = await res.json()

        return data
    }
}

