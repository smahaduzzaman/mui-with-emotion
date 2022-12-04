import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const BasicRating = () => {
    const [value, setValue] = React.useState(2);
    console.log(value);

    return (
        <div>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{ color: 'brown' }}
                />
            </Box>
        </div>
    );
};

export default BasicRating;