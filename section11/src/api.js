// axios는 HTTP 비동기 통신 라이브러리
import axios from "axios";

// Home
export async function fetchCountries () {
    try {
        const response  = await axios.get(
            "https://naras-api.vercel.app/all"
        ); // 비동기 호출
    
        return response.data;
    } catch (e) {
        // 에러 대응 코드
        return [];
    }
    
}

// Search
export async function fetchSearchResults(q){
    try {
        const response = await axios.get(
            `https://naras-api.vercel.app/search?q=${q}`
        );
    
        return response.data;
    } catch (e) {
       return []; 
    }
}

// Country
export async function fetchCountry(code){
    try {
        const response = await axios.get(`https://naras-api.vercel.app/code/${code}`);
        return response.data;
    } catch (e) {
        return null;
    }
}