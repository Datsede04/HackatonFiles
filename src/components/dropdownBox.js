import React from 'react'

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function dropdownBox(title,message,button) {
  return (
    <>
    
        <Typography variant='h4'>
        {title}
        </Typography>
        
        <Typography variant='h4'>
        {message}
        </Typography>

        <Button>
               {button}
        </Button>

    </>
  )
}

export default dropdownBox