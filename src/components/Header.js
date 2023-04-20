// home, about us, collage

import React from 'react';
import { Box, Button } from '@mui/material';


function Header() {
    return (
        <Box sx={{
            backgroundColor: '#483D8B',
            color: '#DBEBEB'
        }}>
            <Button>Home</Button>
            <Button>Gallery</Button>
            <Button>AboutUs</Button>
        </Box >
    );
}

export default Header;
