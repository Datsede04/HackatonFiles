import { Button, Typography } from '@mui/material'
import  {makeStyles} from "@mui/styles"
import React from 'react'
import CountUp from 'react-countup';
import Grid from "@mui/material/Grid";
const useStyle = makeStyles((theme)=>({
        section:{
            backgroundColor:"gold",
            display:"flex",  
            flexDirection: "row",
            height:"100vh"
        },
        div1:{
            display:"flex",  
            flexDirection: "column",
            marginTop:200,
            marginBottom:30,
            mariginLeft:30,
            
        },

    div2:{
        margin:10
    }


}))

function YellowSection() {
  
    const classes =useStyle();

  return (
    <>
      <section className={classes.section}> 
                <Grid container spacing={2}>
                    <Grid item xs={6} >
              <div style={{display:"flex",flexDirection:"column", fontSize:40, margin:50}}>           
                    <Typography variant='h4' >
                        Premium Coaching Like No Other
                        </Typography>      
                </div>

                <div style={{display:"flex",flexDirection:"column", fontSize:25, margin:50}}>
                    <Typography variant='p' className={classes.dev1}>
                         Accelerate your business growth and gain access to a business advisory board of experts.
                         Access weekly, live group coaching from Chris Do and his team of subject-matter leaders along with other like-minded creatives and entrepreneurs from around the globe in our community-backed learning portal.
                     </Typography>
                </div>

                <div style={{display:"flex",flexDirection:"row", fontSize:40, marginTop:30}}>

                <CountUp style={{fontSize:35, marginTop:30}}
                    start={0} 
                    end={650}
                    duration={2.75}
                    separator=" "
                    decimal=","
                    prefix="+ "
                    suffix=" left"
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                    >
                    {({ countUpRef, start }) => (
                        <div>
                        <span ref={countUpRef} />
                        <Button onScroll={start}></Button>
                        </div>
                    )}
                    </CountUp>


                    <CountUp 
                    start={0} 
                    end={354}
                    duration={2.75}
                    separator=" "
                    decimal=","
                    prefix="+"
                    suffix=" left"
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                    >
                    {({ countUpRef, start }) => (
                        <div>
                        <span ref={countUpRef} />
                        <Button onScroll={start}></Button>
                        </div>
                    )}
                    </CountUp>
                </div>
                <Button style={{background:"#1818ed", color:"white", margin:20}}> JOIN THE PRO GROUP</Button>
               
                        </Grid>

                     <Grid item xs={6}>     
                         <img style={{width:500,height:500}} alt="fasdasf" src='https://assets-global.website-files.com/5d816b07d269385f68dbcab0/614102de7c709e0aec8580f5_progroup-badge-min.png'/>
                         </Grid>   
                    </Grid>

      </section>
    </>
  )
}

export default YellowSection