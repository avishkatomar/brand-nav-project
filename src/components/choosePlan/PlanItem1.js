import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import tickimg from "../../Assets/Group 1120.svg";
import Typography from '@mui/material/Typography';
import Free from "../../Assets/Free.svg";
import "./planItem.css"

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: '100%' }} style={{ border: "1px", boxShadow: "none" }}>
      <CardMedia
        component="img"
        className="box-img"
        src={Free}
        alt="item"
      />
      <CardContent>
        <Typography gutterBottom className="choose-plans-heading" variant="h5" component="div">
          Free Plan
        </Typography>
        <Typography className="p-tag-points-parent" variant="body2" color="text.secondary">
          
          <p className="p-tag"><img src={tickimg}/>&nbsp;Unlimited Bandwitch</p>
          <p className="p-tag"><img src={tickimg}/>&nbsp;Encrypted Connection</p>
          <p className="p-tag"><img src={tickimg}/>&nbsp;No Traffic Logs</p>
          <p className="p-tag"><img src={tickimg}/>&nbsp;Works on All Devices</p>
          <p className="p-tag">&nbsp;</p>
          <p className="p-tag">&nbsp;</p>
        </Typography>
      </CardContent>
      <div className="price">Free</div>
      <CardActions className='button-container'>
        <Button className="button-plan-item">Select</Button>
      </CardActions>
    </Card>
  );
}
