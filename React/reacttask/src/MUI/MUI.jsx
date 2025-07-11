/*

MUI : Move faster
with intuitive React UI tools

Material UI is an open-source React component library that implements Google's Material Design. 
It's comprehensive and can be used in production out of the box.

MUI offers a comprehensive suite of free UI tools to help you ship new features faster. 
Start with Material UI, our fully-loaded component library, or bring your own design 
system to our production-ready components.


npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

*/


import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function MUI() {
    return (
        <div className='container mt-5'>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <br /><br />
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
    )
}

export default MUI