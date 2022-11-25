import React from 'react';
import PictureList from "./PictureList";

import Typography from '@mui/material/Typography';
import Testimonials from "./Testimonials";
import "./review.css";

const Reviews = () => {
    return (
        <div>
            <PictureList/>
            <br/><br/>
            <div className='choose-plan-heading'>Trusted by Thousands of Happy Customer</div>
    <Typography variant="body2" color="text.secondary">
    <div className='choose-plan-subtext'>These are the stories of our customers who have koined us with great pleasure when using this crazy feature.</div> 
    
    </Typography>
    
            <div className='customer-reviews-container'>
            <Testimonials/>
            </div>
        </div>
    );
};

export default Reviews;