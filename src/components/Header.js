import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import HeaderDialog from './HeaderDialog'

const useStyle = makeStyles({
    appbar:{
        "& .MuiToolbar-root":{
           color:"white",
           backgroundColor:"black", 
       }, 
    },

})

export default function Header() {
  
    const classes = useStyle();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" component="div" style={{fontWeight:400, marginRight:20}} >
            thefutur
          </Typography>
          <Typography variant="h6" component="div"  style={{fontWeight:400, marginRight:20}}>
            Courses & Tools
          </Typography>
          <Typography variant="h6" component="div"  style={{fontWeight:400, marginRight:20}}>
                Content
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  style={{fontWeight:400, marginRight:20}}>
                 Our Mission
          </Typography>
          <Typography variant="h6" component="div"  style={{fontWeight:400, marginRight:20}}>
                  Login
          </Typography>   
         <HeaderDialog/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}