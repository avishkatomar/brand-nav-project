import logo from './logo.svg';
import './App.css';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import HomePage from './components/HomePage';
import Illustration1 from './components/illustrations/Illustration1';
import Illustration2 from './components/illustrations/Illustration2';
import GlobalNetwork from "./components/GlobalNetworkPage";
import ChoosePlan from "./components/choosePlan/ChoosePlan";
import Reviews from './components/reviewsPage/Reviews';
function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="App">
      <Grid  alignItems="center" direction="column" columns={{xs:12, sm: 12, md: 12}}>
      <Item><HomePage/></Item> 
      <Item><Illustration1/></Item>
      <Item><Illustration2/></Item>
      <Item><ChoosePlan/></Item>
      <Item><GlobalNetwork/></Item>
      <Item><Reviews/></Item>
      
      </Grid>
    </div>
  );
}

export default App;
