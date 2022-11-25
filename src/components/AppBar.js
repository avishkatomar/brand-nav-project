import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import AdbIcon from '@mui/icons-material/Adb';
import "./appBar.css";
import logo from "../Assets/Logo.svg";

const pages = ['About','Features', 'Pricing','Testimonials','Help'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className='appBar-main'>
      <Container maxWidth="xl" className="appbar-container">
        <Toolbar disableGutters>
         
          <img src={logo} className="logo-app-bar"/>


          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
         
          <Box sx={{ flexGrow: 1 ,boxShadow: 'none' ,  display: { xs: 'none', md: 'flex' , justifyItems:'space-between', justifyContent:'center'} }}>
            {pages.map((page) => (
              <Button
                key={page}
               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box className='action-buttons-app-bar' sx={{ flexGrow: 0 ,boxShadow: 'none'}}>
          <Button className="button-sign-in">Sign In</Button> &nbsp;
            <Button className='button-sign-up'>Sign Up</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
