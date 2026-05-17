import { api } from "../../shared/lib/axios/axios";

export const getAllProducts = async () => {
    try {
        const response = await api.get("/produtos", {
            headers: { "apiKey": import.meta.env.VITE_SUPABASE_KEY }
        })
        return response.data
    } catch (error) {
        
    }
}