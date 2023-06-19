const CLIENT_ID = '88bd9043147741eabe7cc5e5802e67fb';
const redirect_uri = 'http://localhost:3000/'
const entryPoint = 'https://accounts.spotify.com/authorize'

const scopes = [
    'user-library-read',
    'user-library-modify',
    'user-read-email',
    'user-read-private',
    'app-remote-control',
    'user-read-currently-playing',  
]


export const authRedirectLink = `${entryPoint}?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=token`

export const reqToken = () => {
    return window.location.hash;
}