import React from 'react';
// import FacebookIcon from '@mui/icons-material/Facebook';
import Facebook from '@mui/icons-material/Facebook';
import { Instagram } from '@mui/icons-material';

const MuiIcon = () => {
    return (
        <div>
            <Facebook
                sx={{ fontSize: 100, color: 'blue' }}
                color='primary'
            ></Facebook>
            <Instagram
                sx={{ fontSize: 100, color: 'red' }}
                color='secondary'
            ></Instagram>
        </div>
    );
};

export default MuiIcon;