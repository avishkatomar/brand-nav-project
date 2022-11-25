import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import PlanItem1 from "./PlanItem1";
import PlanItem2 from "./PlanItem2";
import PlanItem3 from "./PlanItem3";
import "./choosePlan.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveStack() {
  return (
    <div className='container-choosePlan'>
       
           <div className='choose-plan-heading'>Choose your Plan</div>
          <Typography variant="body2" color="text.secondary">
          <div className='choose-plan-subtext'>Lets choose the package that is best for you and explore it happily and cheerfully.</div> 
          
          </Typography>
        <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        width="100%"
        paddingTop={"1rem"}
        >

        <Item className="plan-item">
            <PlanItem1/>
        </Item>
        <Item className="plan-item"> <PlanItem2/></Item>
        <Item className="plan-item"> <PlanItem3/></Item>
      </Stack>
    </div>
  );
}
