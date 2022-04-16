import React from 'react'
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const useStyles = makeStyles((theme)=>({
    section: {
      color:"white",  
      backgroundColor: "black",
      display:"flex",
      height:"100vh"
    },
    
    section2: {
      color:"black",  
      backgroundColor: "whitesmoke",
      display:"flex",
      height:"100vh"
    },

    left__side:{
       flex:2,  
       marginLeft:20     
    },
    
    bold :{
        fontWeight:300
    },
    text:{
        

    },
    video:{
        flex:1,
        height: 500,
        marginRight:20,
        margin:20,
        borderRadius:16,
    },
    button:{
            color:"black",
            backgroundColor:"yellow",
            paddingLeft:40,
            paddingRight:40,
            paddingTop:20,
            paddingBottom:20,
            marginTop:20 ,
            "&:hover":{
                backgroundColor:"gold"     
        }
            
    },
    elevated:{
        "&:hover":{
            elevated: 3,
    }
    }    

  }));
function Introsection() {
  const classes = useStyles()
    return (
    <>
     <section  className={classes.section}>
        <div >
         </div>
        <div className={classes.left__side}>
            <div>
               <Typography variant="h4" style={{marginBottom:20,marginTop:40}} className={[classes.bold,  classes.text]}>
                    Courses, Coaching, and Community for Creatives
                      </Typography>;
                <Typography variant="h6"  style={{marginBottom:20,marginTop:40}}>
                    On a mission to help one billion people make a living doing what they love (without losing their soul). We’re like a private art school - minus the crippling debt.
                      </Typography>      
                <Button variant="contained" className={classes.button}>Shop Courses</Button>
            </div>
        </div> 
        <div >
             <video className={classes.video} >
                <source src="https://media.videoask.com/transcoded/ada270b1-d76e-42a3-9b59-46e2bc81054d/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImFkYTI3MGIxLWQ3NmUtNDJhMy05YjU5LTQ2ZTJiYzgxMDU0ZCIsImV4cCI6MTY1MDM3Njg2M30.IRYWJBlf5g87kxu9a0JSxFxf3kOuQffz95MEDhRYWDI0czTHzbCFnPGFB33asXu9B0aTISUK3d8VjCyIFHZOVuT4BjAaapK2MKUHTtIa-Qy-hFHXMhJO8_X5ufpSVN7TNXUJmcdPccutrc1GApZxQzdPJruCybtiwC_eZwCZekWcgQDCQ67lrBJqN1fguVVofCubxAyS78CY9A2Nc4-DeI9perqNgS8vjSSWaMmuSykrrMcBmrBIuC8HpopSQhOFmCXdq3cmleyjhKvB9Lnmb6p_zXAkHkDBMg_RRgjnUxcdt6t24SyLqhcTd2S3Y4inJD8_RMa_vXIPLbg2kx2N2Tk_QkkOY56BCrhEApiUhNrnligC29oqWsBq4OeeKOzGH5qtzI6QAmF03HzIXf9X_-AtRIuQySJ41PaqWwEqBsirnLFPLKeZWyMmNU11oSXWPGt1P4_aC_yqOF2FHMT3oryMYUZuSpou-qSajadQLOWQ4QQVSFkQHG7XKw_Y6SvxRabO1Fe9HFj066rgtjPnezOFB7ffbqX39AhHbatK_fr38HJYmKtldkyNOzGIEJtULcIz6-ioS8UseBtadCnkPhmT4xjVrGkB1F0Luu-7m_cw-NpMX6njhQEN3HjK-lcUThlTnfjuMrRehCmWgEpu0kQniv17MJukB1GkfMSgp3w" type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
        </div>
     
     </section>

     <section className={classes.section2}>
     <Box sx={{ flexGrow: 1, minWidth: 275  }} style={{ marginTop:200}}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper style={{height:"40vh", margin:20,padding:10}}>
                            <div style={{margin:30}}>
                                <Typography variant='h4'>
                                Level-Up Your Design Skills
                                </Typography>
                                <Typography variant='p'>
                                The Design Career Kickstarter track is here to help you master all the essential skills clients and agency are looking to hire- and then some!
                                </Typography>
                                <Button sx={{ elevated:2,backgroundColor:"black", color:"white",width:200, height:30, marginTop:50}}>
                                Learn Design
                                </Button>
                            </div>
                        </Paper>
                     </Grid>
                    <Grid item xs={4}>
                        <Paper style={{height:"40vh", margin:20,padding:10}}>
                        <div style={{margin:30}}>
                            <Typography variant='h4'>
                            Launch Your Creative Business
                            </Typography>
                            <Typography variant='p'>
                            The Entrepreneur Launchpad track has everything you need to get your creative business up and running. </Typography>
                            <Button sx={{backgroundColor:"black", color:"white",width:200, height:30, marginTop:5}}>
                            START YOUR BUSINESS
                            </Button>

                           </div> 
                        </Paper>
                     </Grid>
                    <Grid item xs={4}>
                        <Paper style={{height:"40vh", margin:20,padding:10, elevated:2}}>
                        <div style={{margin:30}}> 
                            <Typography variant='h4'>
                            Skyrocket Your Agency
                            </Typography>
                            <Typography variant='p'>
                            All the resources you need to land bigger clients and scale are waiting for you in our Agency Accelerator track.</Typography>
                            <Button sx={{ backgroundColor:"black", color:"white",width:200, height:30, marginTop:5}}>
                            GROW YOUR BUSINESS
                            </Button>
                            </div>
                        </Paper>
                     </Grid>
                 </Grid>  
               </Box>           
     </section>
    </>
  )
}

export default Introsection