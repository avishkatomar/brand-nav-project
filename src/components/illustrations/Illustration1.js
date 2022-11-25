import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import illustration1img from "../../Assets/Illustration1.svg"
import "./illustration1.css";
import DataRow from "./DataRow";

export default function ImgMediaCard() {
  return (
    <>
    <div className="container">
    <Card className="illustration1-Card" sx={{ maxWidth: '100%' }} style={{ border: "none", boxShadow: "none" }}>
      <div className='card-text'>
      <CardContent>
        
        <div className='main-heading'>Want anything to be easy with <span className='company-name-1'>LaslesVPN </span>.</div>
        <div className='main-content1'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</div>
              </CardContent>
      <CardActions className='illustrations-card-action1'>
        <Button className="button-illustrations1" size="large">Get Started</Button>
      </CardActions>
      </div>
      <div className='card-img'>
      <CardMedia
        component="img"
        alt="illustration1img"
        src={illustration1img}
      />
      </div>
    </Card>
    </div>
    <div className="data-row">
    <DataRow/>
    </div>
    </>
  );
}
