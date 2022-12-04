import { Button } from '@mui/material';
import React from 'react';

const ResponsiveValues = () => {
    return (
        <div>
            <Button
                variant="contained"
                sx={{
                    // height: [200, 300, 400],
                    width: [200, 300, 400],
                    borderRadius: [1, 2, 3],
                    padding: [1, 2, 3],
                    background: '#f7f7f7',
                    // width: {
                    //     xs: 100, // theme.breakpoints.up('xs')
                    //     sm: 200, // theme.breakpoints.up('sm')
                    //     md: 300, // theme.breakpoints.up('md')
                    //     lg: 400, // theme.breakpoints.up('lg')
                    //     xl: 500, // theme.breakpoints.up('xl')
                    // },
                    '&.MuiButton-root': {
                        background: '#f7f7f7',
                        color: '#000',
                        border: '1px solid #000',
                        borderRadius: '1rem',
                        padding: '1rem',
                        margin: '1rem',
                        '&:hover': {
                            background: '#000',
                            color: '#fff',
                        },
                    },

                }}
            >
                Submit
            </Button>
        </div>
    );
};

export default ResponsiveValues;