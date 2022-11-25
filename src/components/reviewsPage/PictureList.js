import * as React from 'react';
import netflix from "../../Assets/MaskGroup.svg";
import reddit from "../../Assets/MaskGroup(1).svg"
import amazon from "../../Assets/MaskGroup(2).svg"
import discord from "../../Assets/MaskGroup(3).svg"
import spotify from "../../Assets/MaskGroup(4).svg"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import "./PictureList.css";

export default function MediaCard() {
  return (
    <div className="picture-list">
    <span className='picture-item'>    
    <Card style={{ border: "none", boxShadow: "none" }}>
      <CardMedia
        component="img"
        height="90"
        src={netflix}
      />
    </Card>
    </span>
    <span className='picture-item'>
    <Card style={{ border: "none", boxShadow: "none" }}>
    <CardMedia
      component="img"
      height="70"
      src={reddit}
    />
    </Card>
    </span>
    <span className='picture-item'>
    <Card style={{ border: "none", boxShadow: "none" }}>
    <CardMedia
        component="img"
        height="200"
        src={amazon}
    />
    </Card>
    </span>
    <span className='picture-item'>
    
    <Card style={{ border: "none", boxShadow: "none" }}>
        <CardMedia
            component="img"
            height="70"
            src={discord}
        />
        </Card>
        </span>
    <span className='picture-item'>
    
        <Card style={{ border: "none", boxShadow: "none" }}>
        <CardMedia
        component="img"
        height="70"
        src={spotify}
        />
    </Card>
    </span>
  
  </div>
  );
}