import { CLIENT_ID } from '$env/static/private';
import { CLIENT_SECRET } from '$env/static/private';
import { REFRESH_TOKEN } from '$env/static/private';
import { AUTHORIZATION_CODE } from '$env/static/private';


export async function GET({request, locals}) {

    const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
    
    const accessToken = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: REFRESH_TOKEN,

            // 1. This line is for getting an authorization code, you will then get a the code which you can use to get an authorized access token(not client credentials). For express users they can listen on the redirect uri and get the line after "redirect_uri?code=QWERTY12345...."
            // https://accounts.spotify.com/en/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}

            // 2. You can then request an authorization code - access token here along with the refresh code which is permanent until revoked(?). Keep the refresh code, you will use it to get an authorization code - access token which expires in around an hour.
            // grant_type: 'authorization_code'
            // code: AUTHORIZATION_CODE
            // redirect_uri: 'http://localhost:5173/about',

            // 3. Get an authorization code every refresh using your refresh token.
            // grant_type: 'refresh_token',
            // refresh_token: REFRESH_TOKEN,

          }),

    });
    const accessTokenResponse = await accessToken.json();

    let nowPlaying
    let status
    // Not listening to a song results in internal error. Try catch this.
    try {
        const nowPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers : {
                'Authorization': `Bearer ${accessTokenResponse.access_token}`
            }
        })
        nowPlaying = await nowPlayingResponse.json();
        status = 'Success'
    } catch (error) {
        nowPlaying = error
        status = 'Error'
    }

    if(nowPlaying) {
        return new Response(
            JSON.stringify({
                status,
                nowPlaying : nowPlaying
            })
        )
    }
}