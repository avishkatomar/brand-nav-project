import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import global from "../Assets/HugeGlobal.svg"
import "./GlobalNetworkPage.css"

export default function ActionAreaCard() {
  return (
    <div className='global-network-container'>
    <Card sx={{ maxWidth: '90%' ,margin:'auto' , display:'block', marginTop:'0.5rem'}} style={{ border: "none", boxShadow: "none" }}>
      {/* <CardActionArea> */}
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <div className='Global-network'>Huge Global Network of Fast VPN</div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <div className='Global-network-content'>See<span className='company-name'>&nbsp; LaslesVPN &nbsp;</span> everywhere to make it easier for you move locations.</div> 
          
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          src={global}
          alt="global-network"
        />
      {/* </CardActionArea> */}
    </Card>
    </div>
  );
}
