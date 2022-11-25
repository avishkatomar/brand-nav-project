import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import tickimg from "../../Assets/Group 1120.svg";
import illustration2img from "../../Assets/Illustration2.svg"
import "./illustration2.css"
export default function ImgMediaCard2() {
  return (
    <Card className="illustration2-Card" sx={{ maxWidth: '100%' }} style={{ border: "none", boxShadow: "none" }}>
      <div className='card-img-2'>
      <CardMedia
        component="img"
        alt="illustration2img"
        src={illustration2img}
      />
      </div>
      <div className='card-text'>
      <CardContent>
          <div className='features-heading'>We Provide Many Features You Can Use</div>
         <div className='features-type'> You can explore the features that we provide with fun and have their own functions each feature.
          <div className='feature-points'><img src={tickimg}/>&nbsp; Powerfull online protection.</div>
          <div className='feature-points'><img src={tickimg}/>&nbsp;Internet without borders.</div>
          <div className='feature-points'><img src={tickimg}/>&nbsp;Supercharged VPN</div>
          <div className='feature-points'><img src={tickimg}/>&nbsp;No specific time limits.</div>
          </div>
       </CardContent>
      
      </div>

    </Card>
  );
}
