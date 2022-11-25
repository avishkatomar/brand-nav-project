import * as React from 'react';
import usersImg from "../../Assets/Group 1216.svg";
import locationImg from "../../Assets/Group 1215.svg";
import serverImg from "../../Assets/Group 1217.svg";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import "./dataRow.css";

export default function MediaCard() {
  return (
    <div className="data-row-list">
    <span >    
    <Card className='data-item' style={{ border: "none", boxShadow: "none" }}>
      <CardMedia
        component="img"
        sx={{ width: 20 , height:20}}
        className='card-data-row-img'
        src={usersImg}
      />
       <CardContent className="card-content">
       <div className="card-content-text">  
        90+
        </div>
          <div>Users</div>
        </CardContent>
    </Card>
    </span>
    <span >
    <Card className='data-item' style={{ border: "none", boxShadow: "none" }}>
    <CardMedia
      component="img"
      
      sx={{ width: 20 , height:20}}
      className='card-data-row-img'
      src={locationImg}
    />
     <CardContent className="card-content">
     <div className="card-content-text">  
        30+
        </div>
          <div>Locations</div>
        </CardContent>
    </Card>
    </span>
    <span >
    <Card className='data-item' style={{ border: "none", boxShadow: "none" }}>
    <CardMedia
        component="img"
       
        sx={{ width: 20 , height:20}}
        className='card-data-row-img'
        src={serverImg}
    />
     <CardContent className="card-content">
         <div className="card-content-text">  
        50+
        </div>
          <div>Servers</div>
          </CardContent>
    </Card>
    </span>
    
  
  </div>
  );
}