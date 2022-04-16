import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const useStyle = makeStyles({
    appbar:{
       "& .MuiPaper-root":{
            color:"white",    
            backgroundColor:"black"
       }
    },
    bottomBar:{
        "&:hover":{
            borderBottom:1
          }
    },
    divider:{
        "& .MuiDivider-root":{
            color:"white",
            backgroundColor:"white"
        }
    },
    marign:{
        marign:20
    }

})

export default function HeaderDialog() {

    const classes =  useStyle()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <MenuIcon onClick={handleClickOpen}/>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className= {classes.appbar}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            
            <Typography sx={{ ml: 2, flex: 1 }} variant="h3" component="div">
                thefutur
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
            <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>
       <div  className={classes.marign}>

  
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                                        
                     <Typography variant='h6' className={classes.bottomBar}>
                        Bootcamp
                        </Typography>
                        
                        <Typography>
                        Are you ready to scale your business? Join our intense Business Bootcamp and learn how.
                        </Typography>

                        <Button>
                          Scale your business
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                                        
                     <Typography variant='h4' className={classes.bottomBar}>
                     Pro Group
                        </Typography>
                        
                        <Typography>
                        Ever feel lonely as a freelancer, founder or studio owner? Join our vibrant community of creative entrepreneurs! </Typography>

                        <Button>
                           Join the group
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                                        
                     <Typography variant='h4' className={classes.bottomBar}>
                     Carousel Design
                        </Typography>     
                        <Typography>
                        Learn Chris Do’s exact process for make attention-grabbing Instagram content meant to grow your industry authority. </Typography>
                        <Button>
                        Enroll Now

                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <dropdownBox/>
                    </Grid>
                    <Grid item xs={4}>
                        <dropdownBox/>
                    </Grid>    
                </Grid>
            </Box>

        <Divider className={classes.divider}/>

        <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={5}>
                    <Grid item xs={2}>
                       <Typography variant='h6' className={classes.bottomBar}>
                         Learn
                        </Typography>
                           <Typography>
                               pricing 
                         </Typography>
                           <Typography>
                               Logo Design 
                         </Typography>
                           <Typography>
                               Lead Generation 
                         </Typography>
                           <Typography>
                               Design 
                         </Typography>
                           <Typography>
                               Branding
                         </Typography>
                           <Typography>
                               View All
                         </Typography>
                    </Grid>
                    <Grid item xs={2}>
                       <Typography variant='h6' className={classes.bottomBar}>
                         Shop
                        </Typography>
                           <Typography>
                            Business Skill 
                         </Typography>
                           <Typography>
                              Creative Skill
                         </Typography>
                           <Typography>
                               Business Resource
                         </Typography>
                           <Typography>
                               Private Coacing
                         </Typography>
                           <Typography>
                             Merchendise
                         </Typography>
                           <Typography>
                               Shop All 
                         </Typography>
                    </Grid>
                    <Grid item xs={2}>
                       <Typography variant='h6' className={classes.bottomBar}>
                         Explore
                        </Typography>
                           <Typography>
                               Blog
                         </Typography>
                           <Typography>
                              Email Newslater
                         </Typography>
                           <Typography>
                               Podcast 
                         </Typography>
                           <Typography>
                               The Fututre Almuni 
                         </Typography>
                           <Typography>
                               Upcoming Event
                         </Typography>
                           <Typography>
                               Video Content
                         </Typography>
                    </Grid>
                    <Grid item xs={2}>
                       <Typography variant='h6' className={classes.bottomBar}>
                         Collaboration
                        </Typography>
                          
                           <Typography>
                               Advertise Us 
                         </Typography>
                           <Typography>
                               Become An Affiliate
                         </Typography>
                           <Typography>
                               Hire Us to Speek
                         </Typography>
                           <Typography>
                               Work With Us
                         </Typography>
                    </Grid>
                    <Grid item xs={2}>
                       <Typography variant='h6' className={classes.bottomBar}>
                         Connect
                        </Typography>
                         
                           <Typography>
                               Meet Our Team
                         </Typography>
                           <Typography>
                               Rport A Bug
                         </Typography>
                           <Typography>
                               FAQ
                         </Typography>
                           <Typography>
                              Contact Us
                         </Typography>
                           <Typography>
                               Sign In
                         </Typography>
                    </Grid>   
        </Grid>
        </Box>
        </div> 
      </Dialog>
    </div>
  );
}
