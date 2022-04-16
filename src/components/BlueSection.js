import { Button, Typography } from '@mui/material'
import React from 'react'
import {FormControl} from '@mui/material'

function BlueSection() {
  return (
    <section style={{height:"150vh",background:"#1818ed"}}> 
         <div style={{display:"flex", flexDirection:"row"}}>
               <div style={{display:"flex", flexDirection:"column",color:"white"}}>
                 <div style={{fontWeight:100}}>

                  <Typography variant='h2'>
                  Welcome to the School of Tomorrow   
                  </Typography>
                 </div>

                 <div  style={{margin:30}}>

                  <Typography variant='h6'>
                  The #1BMinusOne project is an ambitious undertaking to change the way we learn and teach. And the march to one billion begins with you.
                  </Typography>
                 </div>

                 <div style={{margin:30}}>

                  <Typography variant='h6'>
                  Enter your email address and you’ll be assigned a permanent number—you’ll be one in a billion, officially. You'll also be added to our email newsletter, of which you can opt out any time.
                  </Typography>
                 </div>
               </div>
               
               <div style={{display:"flex", flexDirection:"column"}}>
                      
                   <div style={{display:"flex", flexDirection:"row", margin:20}}>
                      <div style={{justifyContent:"center", alignContent:"center", backgroundColor:"black",color:"white",marginLeft:20, width:100, borderRadius:20}}>
                           <h3 style={{paddingLeft:40, fontSize:40}}>2</h3>  
                     </div>
                      <div style={{backgroundColor:"black",color:"white",marginLeft:20,marginLeft:15, width:100, borderRadius:20}}>
                           <h3 style={{paddingLeft:40, fontSize:40}}>9</h3>  
                     </div>
                      <div style={{backgroundColor:"black",color:"white",marginLeft:20,marginLeft:15, width:100, borderRadius:20}}>
                           <h3 style={{paddingLeft:40, fontSize:40}}>1</h3>  
                     </div>
                      <div style={{backgroundColor:"black",color:"white",marginLeft:20,marginLeft:15, width:100, borderRadius:20}}>
                           <h3 style={{paddingLeft:40, fontSize:40}}>4</h3>  
                     </div>
                      <div style={{backgroundColor:"black",color:"white",marginLeft:20,marginLeft:15, width:100, borderRadius:20}}>
                           <h3 style={{paddingLeft:20, fontSize:40}}>4</h3>  
                     </div>
                       </div>
                  
                  <div style={{marginTop:10, color:"white", fontSize:40}}>
                      <h3>Get your number</h3>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", fontSize:40}}>
                    
                     <input style={{borde:1,borderColor:0,color:"white", backgroundColor:"#1818ed"}} placeholder="First name"></input>
                     <input style={{borderBottom:1,borderColor:1,color:"white",backgroundColor:"#1818ed"}} placeholder="Last name"></input>
                  </div>
                  <div style={{marginTop:10, color:"white", fontSize:30}}>
                      <h3>Can We Contact You</h3>
                  </div>  
                    <div style={{display:"flex",flexDirection:"row",color:"white"}}>
                        <input type="checkbox" style={{width: 20,height: 20}}></input>
                        <lable style={{fontSize: 20}}>Yes, I’d like to receive emails from The Futur</lable>
                    </div>
                
                    <Button style={{background:"gold", color:"white", margin:20}}> Get Your Number</Button>

               </div>
         </div>
    </section>
  )
}

export default BlueSection