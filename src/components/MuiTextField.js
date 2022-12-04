import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

const MuiTextField = () => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="on"
        >
            <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                helperText="Invalid User"
                error={true}
            />
        </Box>
    );
};

export default MuiTextField;