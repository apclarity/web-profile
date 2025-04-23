import React from 'react';

const SpotifyLoginButton = () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirectUri = window.location.hostname === 'localhost'
        ? 'https://bb96-2404-8000-1047-32b-484d-eacc-3da2-fb2f.ngrok-free.app/callback'
        : 'https://andreaspecr.com/callback';

    // Encode redirect URI properly
    const encodedRedirectUri = encodeURIComponent(redirectUri);

    // Construct Spotify login URL
    const spotifyLoginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodedRedirectUri}&scope=user-read-currently-playing`;

    return (
        <div className='flex justify-center mt-20'>
            <a href={spotifyLoginUrl}>
                <button className="p-2 bg-green-600 rounded-2xl cursor-pointer">Login with Spotify</button>
            </a>
        </div>
    );
};

export default SpotifyLoginButton;
