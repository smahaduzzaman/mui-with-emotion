// import React from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const HeroCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ padding: '1rem', width: '100%', height: '100%' }}
                component="img"
                height="140"
                image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE55U7I"
                alt="Computer"
            />
            <CardContent
                sx={{
                    display: 'flex',
                    // flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="primary.main">
                        Lizards are a widespread group of squamate reptiles.
                    </Typography>
                </Box>
                <IconButton
                    sx={{
                        // backgroundColor: "text.secondary",
                        color: "text.secondary",
                        '&:hover': {
                            backgroundColor: "text.primary",
                            color: "white",
                        },
                    }}
                >
                    <AddIcon></AddIcon>
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default HeroCard;