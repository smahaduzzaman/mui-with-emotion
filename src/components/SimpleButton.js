// import { Button } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';

const SimpleButton = () => {
    return (
        <div>
            <Button
                // variant="contained"
                variant='outlined'
                // variant="text"
                // color='primary'
                color='secondary'
                disableRipple={false}
                // disableElevation={false}
                disableElevation={true}
                fullWidth={true}
                sx={{ marginBottom: '1rem' }}
            >Checkout</Button>
        </div>
    );
};

export default SimpleButton;