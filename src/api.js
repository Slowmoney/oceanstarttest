import axios from "axios";
export const API = {
    suggestFio:(data = {})=>{
        return axios.post(
            "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio",
            data,
            { headers: { 
                'Expires': '0',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                "Authorization": `Token ${import.meta.env.VITE_TOKEN}` 
                } 
            })
    }
}