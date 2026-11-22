type monoData = {
    health: number
    hunger: number
    cleanliness: number
    happiness: number
    exp: number
}

const getMonoData = async () => {
    const res = await fetch("https://capstone-project-1cyy.vercel.app/monostats")

     if (!res.ok) {
        throw new Error("Failed to fetch Mono Data")
    }

    const data = await res.json()

    return data
}

