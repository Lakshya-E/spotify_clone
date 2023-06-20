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

export const getUserPlaylist = async(user_id,token) => {
    const response = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`,{
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token[0][1]}`
        }
    })

    const responseData = await response.json();
    return responseData.items;
}