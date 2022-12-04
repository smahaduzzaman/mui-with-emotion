import { Avatar } from '@mui/material';
import React from 'react';

const AvatarImage = () => {
    return (
        <div>
            <Avatar
                alt="Cindy Baker" src="https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1"
                sx={{ width: 100, height: 100, marginBottom: '1rem' }}
            />
        </div>
    );
};

export default AvatarImage;