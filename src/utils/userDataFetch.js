const meUrl = "https://api.spotify.com/v1/me/"
const getTopUrl = `${meUrl}top/artists`


export const getTopArtist = async(token) => {

    const response = await fetch(getTopUrl, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token[0][1]}`
        }
    })

    const responseData = await response.json();
    // console.log(responseData.items);

    if(responseData.items)
        return responseData.items;



}