

export async function GetData(url) {
    const response = await fetch( url, {
        method: 'GET',
        headers: {
            accept: 'aplication/json',
            Authorization: 
        }
    });
    return await response.json();
}
