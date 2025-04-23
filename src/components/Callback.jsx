import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const getAccessToken = () => {
            const params = new URLSearchParams(window.location.hash.replace('#', '?'));
            const token = params.get('access_token');
            if (token) {
                localStorage.setItem('spotifyAccessToken', token);
                navigate('/'); // Arahkan kembali ke halaman utama
            }
        };

        getAccessToken();
    }, [navigate]);

    return <div>Loading...</div>;
};

export default Callback;
