import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ReviewCard from "./ReviewCard";
import picture1 from "../../Assets/Ellipse 175.png";
import picture2 from "../../Assets/Ellipse 175 (1).png";
import picture3 from "../../Assets/Ellipse 175 (2).png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import "./testimonials.css"

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cards =()=>{
    if(value===0 || value<0){
        return ( <><ReviewCard source={picture1}/>
        <ReviewCard source={picture2}/>
        <ReviewCard source={picture3}/></>);
    }
    else if(value ===1){
        return ( <ReviewCard source={picture2}/>);
    }
    else{
        return ( <ReviewCard source={picture3}/>);
    }
  }

  return (
    <>
   
    <div className='tab-buttons'>
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab  icon={<ArrowBackIosIcon/>} onClick={()=>{setValue(value-1)}} aria-label="phone" />
      <Tab icon={<ChevronRightIcon/>} onClick={()=>{setValue(value+1)}} aria-label="favorite" />
    </Tabs>
    </div>
    <br/><br/>
    <div className='tab-cards'>
    {cards()}
    </div>
    </>
  );
}
