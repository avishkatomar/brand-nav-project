import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import "./reviewCard.css";

export default function MediaControlCard(source) {
  const theme = useTheme();
  return (
    <div className='customer-review-card'>
    <Card sx={{ display: 'flex',maxWidth:'75%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that lour'd upon our house
            In the deep bosom of the ocean buried.
          </Typography>
        </CardContent>
       
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 40 ,height:40 }}
        image={source.source}
        alt="Live"
      />
    </Card>
    </div>
  );
}
