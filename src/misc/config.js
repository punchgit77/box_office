
const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString){
    // eslint-disable-next-line no-shadow
    const result=await fetch(`${API_BASE_URL}${queryString}`).then(r=>r.json());
    return result;
}