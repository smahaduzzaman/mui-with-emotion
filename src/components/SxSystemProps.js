import { Button } from '@mui/material';
import React from 'react';

const SxSystemProps = () => {
    const isActive = true;

    return (
        <>
            <Button
                variant='contained'
                sx={[{
                    color: 'white',
                    bgcolor: 'primary.main',
                    '&:hover': {
                        bgcolor: 'primary.dark',
                    },
                    padding: '10px 20px',
                    borderRadius: '5px',
                    boxShadow: '0 5px 10px rgba(0,0,0,0.12)',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                },
                isActive && {
                    color: 'white',
                    backgroundColor: 'secondary.main',
                    '&:hover': {
                        backgroundColor: 'secondary.dark',
                    },
                }

                ]}

            >
                Submit
            </Button>
        </>
    );
};

export default SxSystemProps;