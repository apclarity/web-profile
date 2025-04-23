// src/api/spotifyAuth.js

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI =
  window.location.hostname === "localhost"
    ? "https://bb96-2404-8000-1047-32b-484d-eacc-3da2-fb2f.ngrok-free.app/callback"
    : "https://andreaspecr.com/callback";

const SCOPES = ["user-read-currently-playing", "user-read-playback-state"];

export const SPOTIFY_AUTH_URL =
  "https://accounts.spotify.com/authorize" +
  `?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&scope=${SCOPES.join("%20")}` +
  `&response_type=token` +
  `&show_dialog=true`;
