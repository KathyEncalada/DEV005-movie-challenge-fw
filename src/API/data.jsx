const apyToken = import.meta.env.VITE_REACT_API_TOKEN;

export async function GetData(url) {
    const response = await fetch( url, {
        method: 'GET',
        headers: {
            accept: 'aplication/json',
            Authorization: apyToken
        }
    });
    return await response.json();
}